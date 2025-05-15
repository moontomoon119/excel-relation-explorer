const fs = require('fs');
const xlsx = require('xlsx');
const path = require('path');
const { normalizeColumnName, inferSourceType } = require('../utils/stringUtils');
const { inferColumnsFromData, createTable, createSpatialIndex, truncateTable } = require('./tableManager');
const { registerGridSource, registerGridSourceTableMapping } = require('./gridManager');
const { importDataToTable } = require('./dataImporter');
const db = require('../config/db');

// 좌표계 검증 함수
function validateCoordinates(jsonData, xColumn, yColumn) {
  // 한국 좌표계 범위 (대략적인 WGS84 좌표계 기준)
  const KOREA_BOUNDS = {
    minLat: 33.0, // 최남단
    maxLat: 38.7, // 최북단
    minLng: 124.5, // 최서단
    maxLng: 132.0  // 최동단
  };

  // 데이터 샘플링 (최대 100개)
  const sampleSize = Math.min(jsonData.length, 100);
  let validCount = 0;
  let outOfBoundsCount = 0;

  for (let i = 0; i < sampleSize; i++) {
    if (!jsonData[i]) continue;
    
    const x = parseFloat(jsonData[i][xColumn]);
    const y = parseFloat(jsonData[i][yColumn]);
    
    if (isNaN(x) || isNaN(y)) continue;
    
    // 일반적인 위도/경도 범위 체크
    if (x >= KOREA_BOUNDS.minLng && x <= KOREA_BOUNDS.maxLng && 
        y >= KOREA_BOUNDS.minLat && y <= KOREA_BOUNDS.maxLat) {
      validCount++;
    } else {
      outOfBoundsCount++;
    }
  }
  
  // 유효 데이터 비율 계산
  const validRatio = sampleSize > 0 ? validCount / sampleSize : 0;
  
  return {
    isValid: validRatio >= 0.9, // 90% 이상이 유효해야 함
    validRatio,
    outOfBoundsCount
  };
}

// 데이터 타입 안전성 확인 함수 추가
function ensureSafeColumns(columns, jsonData) {
  return columns.map(col => {
    // 이미 TEXT인 경우 그대로 유지
    if (col.type === 'TEXT') {
      return col;
    }
    
    // INTEGER나 NUMERIC 타입일 경우 검증
    if (col.type === 'INTEGER' || col.type === 'NUMERIC') {
      const sampleLimit = Math.min(jsonData.length, 100);
      let validCount = 0;
      let invalidCount = 0;
      let totalNonNullCount = 0;
      
      // 샘플 데이터에서 유효한 값의 비율 확인
      for (let i = 0; i < sampleLimit; i++) {
        if (!jsonData[i]) continue;
        
        const val = jsonData[i][col.originalName];
        if (val === null || val === undefined) continue;
        
        totalNonNullCount++;
        
        if (typeof val === 'string') {
          if (col.type === 'INTEGER' && /^-?\d+$/.test(val)) {
            // 정수 범위 확인
            try {
              const num = parseInt(val, 10);
              if (num <= 2147483647 && num >= -2147483648) {
                validCount++;
              } else {
                invalidCount++;
              }
            } catch (e) {
              invalidCount++;
            }
          } 
          else if (col.type === 'NUMERIC' && /^-?\d+(\.\d+)?$/.test(val)) {
            validCount++;
          }
          else {
            invalidCount++;
          }
        } 
        else if (typeof val === 'number') {
          validCount++;
        }
      }
      
      // 비율 계산 (샘플 데이터의 10% 이상이 유효하지 않으면 TEXT로 변환)
      const invalidRatio = totalNonNullCount > 0 ? invalidCount / totalNonNullCount : 0;
      
      if (invalidRatio > 0.1) {
        console.log(`Converting column ${col.name} from ${col.type} to TEXT (${Math.round(invalidRatio * 100)}% invalid values)`);
        return {
          ...col,
          type: 'TEXT'
        };
      }
    }
    
    return col;
  });
}

// 테이블 존재 여부 확인 함수
async function checkTableExists(tableName) {
  try {
    const query = `
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = $1
      );
    `;
    
    const result = await db.query(query, [tableName]);
    return result.rows[0].exists;
  } catch (error) {
    console.error('Error checking table existence:', error);
    return false;
  }
}

// 테이블 드롭 함수
async function dropTableIfExists(tableName) {
  try {
    const query = `DROP TABLE IF EXISTS ${tableName}`;
    await db.query(query);
    console.log(`Dropped table ${tableName} if it existed`);
    return true;
  } catch (error) {
    console.error(`Error dropping table ${tableName}:`, error);
    throw new Error(`Failed to drop table: ${error.message}`);
  }
}

const gridService = {
  processFile: async (filePath, originalFilename, xColumn, yColumn) => {
    // 초기 반환값 설정
    let result = {
      originalFilename,
      insertedCount: 0,
      updatedCount: 0,
      gridCount: 0,
      columnCount: 0
    };

    const ext = path.extname(originalFilename).toLowerCase();
    const isCSV = ext === '.csv';
    let workbook;

    // CSV 파일 처리
    if (isCSV) {
      const csvOptions = {
        type: 'string',
        cellDates: true,
        raw: true,
        codepage: 65001,
        dateNF: 'yyyy-mm-dd'
      };
      const fileBuffer = fs.readFileSync(filePath);
      const fileContent = Buffer.from(fileBuffer).toString('utf8');
      workbook = xlsx.read(fileContent, csvOptions);
    } else {
      // Excel 파일 처리
      workbook = xlsx.readFile(filePath, {
        type: 'binary',
        cellDates: true,
        cellNF: true,
        cellStyles: true,
        raw: true,
        codepage: 65001
      });
    }

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);

    if (jsonData.length === 0) {
      throw new Error('File contains no data');
    }

    // X, Y 좌표 검증
    const validationResult = validateCoordinates(jsonData, xColumn, yColumn);
    console.log('Coordinate validation result:', validationResult);
    
    // 좌표 검증 결과가 유효하지 않은 경우도 일단 진행 (개발 중이므로)
    if (!validationResult.isValid) {
      console.warn(`Warning: ${validationResult.outOfBoundsCount} points are outside of Korea's coordinate bounds.`);
    }

    // 데이터 소스 등록
    const baseFilename = path.basename(originalFilename, ext);
    const sourceType = inferSourceType(originalFilename);
    
    console.log(`Registering grid source: ${baseFilename}, type: ${sourceType}`);
    const sourceId = await registerGridSource(baseFilename, sourceType);
    console.log(`Registered grid source with ID: ${sourceId}`);
    
    result.sourceId = sourceId;

    // 테이블 이름 생성 및 컬럼 추론
    const tableName = `grid_${normalizeColumnName(baseFilename)}_${sourceId}`;
    result.tableName = tableName;
    console.log(`Created table name: ${tableName}`);

    // 컬럼 추론 후 안전성 확인
    const inferredColumns = inferColumnsFromData(jsonData);
    const safeColumns = ensureSafeColumns(inferredColumns, jsonData);
    result.columnCount = safeColumns.length;
    console.log(`Inferred ${safeColumns.length} columns`);

    // 기존 테이블이 있으면 삭제
    console.log(`Dropping existing table if exists: ${tableName}`);
    await dropTableIfExists(tableName);
    
    // 테이블 생성
console.log(`Creating new table: ${tableName}`);
await createTable(tableName, safeColumns);

// 데이터 삽입
console.log(`Importing data to table: ${tableName}`);
const insertedCount = await importDataToTable(tableName, jsonData, safeColumns);
result.insertedCount = insertedCount;
result.gridCount = jsonData.length;
console.log(`Imported ${insertedCount} rows out of ${jsonData.length}`);

// 공간 인덱스 생성 - 데이터 삽입 후로 이동
console.log(`Creating spatial index for columns: ${xColumn}, ${yColumn}`);
await createSpatialIndex(tableName, xColumn, yColumn);

// 그리드 소스-테이블 매핑
console.log(`Registering grid source-table mapping: sourceId=${sourceId}, tableName=${tableName}`);
await registerGridSourceTableMapping(sourceId, tableName);

    return result;
  }
};

module.exports = gridService;