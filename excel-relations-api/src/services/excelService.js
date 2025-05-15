//excel-relations-api/src/services/excelService.js

const fs = require('fs');
const xlsx = require('xlsx');
const path = require('path');
const { normalizeColumnName, inferSourceType, findPnuColumn } = require('../utils/stringUtils');
const { inferColumnsFromData, createTable, createPnuIndex, registerSourceTableMapping, truncateTable } = require('./tableManager');
const { updatePnuMaster, registerDataSource } = require('./pnuManager');
const { importDataToTable } = require('./dataImporter');

/**
 * 
datatypeUtils.js: 데이터 타입 추론 및 변환 함수
stringUtils.js: 문자열 처리, 컬럼명 정규화, PNU 컬럼 검색
tableManager.js: 테이블 생성 및 스키마 관리
pnuManager.js: PNU 데이터 처리와 소스 등록
dataImporter.js: 데이터 임포트 로직
excelService.js: 전체 워크플로우 조정
 */

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

const excelService = {
  processFile: async (filePath, originalFilename) => {
    // 초기 반환값 설정
    let result = {
      originalFilename,
      insertedCount: 0,
      updatedCount: 0, // 사용하지 않지만 반환값에 포함
      pnuCount: 0,
      columnCount: 0
    };

    const ext = path.extname(originalFilename).toLowerCase();
    const isCSV = ext === '.csv';
    let workbook; // workbook은 조건 밖에서 선언

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

    // PNU 컬럼 찾기
    const pnuColumnName = findPnuColumn(jsonData);
    console.log('Found PNU column:', pnuColumnName);

    if (!pnuColumnName) {
      throw new Error('PNU column not found in file');
    }

    // 데이터 소스 등록
    const baseFilename = path.basename(originalFilename, ext);
    const sourceType = inferSourceType(originalFilename);
    const sourceId = await registerDataSource(baseFilename, sourceType);
    result.sourceId = sourceId;

    // 테이블 이름 생성 및 컬럼 추론
    const tableName = `src_${normalizeColumnName(baseFilename)}_${sourceId}`;
    result.tableName = tableName;

    // 컬럼 추론 후 안전성 확인 - 수정된 부분
    const inferredColumns = inferColumnsFromData(jsonData);
    const safeColumns = ensureSafeColumns(inferredColumns, jsonData);
    result.columnCount = safeColumns.length;

    // 테이블 생성 및 PNU 인덱스 생성
    await createTable(tableName, safeColumns);
    await createPnuIndex(tableName, pnuColumnName);
    await registerSourceTableMapping(sourceId, tableName);

    // PNU 마스터 테이블 업데이트
    const pnuValues = jsonData.map(row => row[pnuColumnName]);
    const pnuCount = await updatePnuMaster(pnuValues);
    result.pnuCount = pnuCount;

    // 기존 데이터 삭제 후 데이터 삽입
    await truncateTable(tableName);
    const insertedCount = await importDataToTable(tableName, jsonData, safeColumns, pnuColumnName);
    result.insertedCount = insertedCount;

    return result;
  }
};

module.exports = excelService;