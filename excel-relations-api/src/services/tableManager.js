//excel-relations-api/src/services/tableManager.js

const db = require('../config/db');
const { normalizeColumnName } = require('../utils/stringUtils');
const { inferDataType, getPgType } = require('../utils/datatypeUtils');

// 테이블 생성 함수 - PNU와 그리드 모두 사용
async function createTable(tableName, columns) {
  try {
    const columnDefinitions = columns.map(col => `"${col.name}" ${col.type}`).join(', ');
    
    await db.query(`
      CREATE TABLE IF NOT EXISTS ${tableName} (
        id SERIAL PRIMARY KEY,
        ${columnDefinitions},
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `);
    
    return true;
  } catch (error) {
    console.error('Error creating table:', error);
    throw new Error(`Failed to create table: ${error.message}`);
  }
}

// PNU 인덱스 생성 - PNU 데이터에만 사용
async function createPnuIndex(tableName, pnuColumnName) {
  try {
    const normalizedColName = normalizeColumnName(pnuColumnName);
    await db.query(`CREATE INDEX IF NOT EXISTS idx_${tableName}_pnu ON ${tableName} ("${normalizedColName}")`);
    return true;
  } catch (error) {
    console.error('Error creating PNU index:', error);
    throw new Error(`Failed to create PNU index: ${error.message}`);
  }
}

// 그리드 데이터용 공간 인덱스 생성 - 그리드 데이터에만 사용
async function createSpatialIndex(tableName, xColumn, yColumn) {
  try {
    // 정규화된 컬럼명 생성
    const normalizedXColumn = normalizeColumnName(xColumn);
    const normalizedYColumn = normalizeColumnName(yColumn);
    
    // PostGIS extension이 활성화되어 있다고 가정
    // 먼저 점 지오메트리 컬럼 추가
    const addGeomColumnQuery = `
      ALTER TABLE ${tableName} 
      ADD COLUMN geom geometry(Point, 4326);
    `;
    await db.query(addGeomColumnQuery);
    
    // X, Y 값으로 지오메트리 컬럼 업데이트
    const updateGeomQuery = `
    UPDATE ${tableName}
    SET geom = ST_SetSRID(ST_MakePoint(${normalizedXColumn}::numeric, ${normalizedYColumn}::numeric), 4326)
    WHERE ${normalizedXColumn} IS NOT NULL AND ${normalizedYColumn} IS NOT NULL;
    `;
    console.log('Update geom query:', updateGeomQuery); // 여기에 추가
    await db.query(updateGeomQuery);
    
    // 공간 인덱스 생성
    const createIndexQuery = `
      CREATE INDEX idx_${tableName}_geom ON ${tableName} USING GIST(geom);
    `;
    await db.query(createIndexQuery);
    
    console.log(`Spatial index created for table ${tableName}`);
    return true;
  } catch (error) {
    console.error('Error creating spatial index:', error);
    throw new Error(`Failed to create spatial index: ${error.message}`);
  }
}

// 소스-테이블 매핑 함수 - PNU와 그리드 공통 사용
async function registerSourceTableMapping(sourceId, tableName) {
  try {
    await db.query(`
      INSERT INTO source_table_mappings(source_id, table_name)
      VALUES($1, $2)
      ON CONFLICT(source_id, table_name) DO NOTHING
    `, [sourceId, tableName]);
    return true;
  } catch (error) {
    console.error('Error registering source-table mapping:', error);
    throw new Error(`Failed to register source-table mapping: ${error.message}`);
  }
}

// 그리드 데이터 소스-테이블 매핑
async function registerGridSourceTableMapping(sourceId, tableName) {
  try {
    await db.query(`
      INSERT INTO grid_source_tables(source_id, table_name)
      VALUES($1, $2)
      ON CONFLICT(source_id, table_name) DO NOTHING
    `, [sourceId, tableName]);
    return true;
  } catch (error) {
    console.error('Error registering grid source-table mapping:', error);
    throw new Error(`Failed to register grid source-table mapping: ${error.message}`);
  }
}

function isNumericString(value) {
  if (typeof value !== 'string') return false;
  const trimmed = value.trim();
  // 정수 또는 소수점을 가진 숫자 확인
  return /^[-+]?\d+(\.\d+)?$/.test(trimmed) && !isNaN(parseFloat(trimmed));
}

// 컬럼 추론 함수 - PNU와 그리드 공통 사용
function inferColumnsFromData(jsonData) {
  if (!jsonData || jsonData.length === 0) {
    throw new Error('Cannot infer columns from empty data');
  }

  const firstRow = jsonData[0];
  const columns = [];

  for (const key in firstRow) {
    const normalizedKey = normalizeColumnName(key);
    const lowerKey = normalizedKey.toLowerCase();

    // 무조건 TEXT로 처리할 컬럼 목록
    const forceTextFields = ['pnu', 'bldg_id', 'buildingid', '법정동코드', 'code', 'cd', '코드'];
    if (forceTextFields.some(field => lowerKey.includes(field))) {
      columns.push({
        name: normalizedKey,
        originalName: key,
        type: 'TEXT'
      });
      continue;
    }
    
    let value = firstRow[key];
    
    // 소수점 형태의 문자열이면 NUMERIC으로 처리 (길이 제한 없음)
    if (typeof value === 'string' && /^-?\d+\.\d+$/.test(value.trim())) {
      columns.push({
        name: normalizedKey,
        originalName: key,
        type: 'NUMERIC'
      });
      continue;
    }
    
    // 나머지는 일반 추론 사용
    let dataType = inferDataType(value);

    // 문자가 포함된 경우 확인
    if (typeof value === 'string' && /[^-\d.]/.test(value.trim())) {
      dataType = 'TEXT';
    }
    else if (isNumericString(value)) {
      if (value.includes('.')) {
        dataType = 'NUMERIC'; // 모든 소수점 값은 NUMERIC
      } else if (typeof value === 'string' && value.trim().length >= 10) {
        dataType = 'TEXT'; // 긴 정수는 TEXT
      } else {
        dataType = 'INTEGER'; // 일반 정수
      }
    }

    // 여러 샘플 확인 (소수점 값이 하나라도 있으면 NUMERIC으로 변환)
    const sampleLimit = Math.min(jsonData.length, 100);
    let hasDecimal = value.toString().includes('.');
    let invalidCount = 0;
    let totalCount = 0;
    
    for (let i = 1; i < sampleLimit; i++) {
      if (!jsonData[i] || jsonData[i][key] === undefined) continue;
      
      const sampleValue = jsonData[i][key];
      totalCount++;
      
      // 문자가 포함된 경우 카운트 (Z3000 등)
      if (typeof sampleValue === 'string' && /[^-\d.]/.test(sampleValue.trim())) {
        invalidCount++;
        continue;
      }
      
      // 소수점이 하나라도 있으면 NUMERIC으로 설정
      if (sampleValue.toString().includes('.')) {
        hasDecimal = true;
      }
    }

    // 샘플의 30% 이상이 유효하지 않으면 TEXT로, 
    // 소수점이 있으면 NUMERIC으로, 아니면 원래 타입 유지
    if (totalCount > 0 && invalidCount / totalCount > 0.3) {
      dataType = 'TEXT';
    } else if (hasDecimal) {
      dataType = 'NUMERIC';
    }

    if (!dataType) dataType = 'TEXT';

    columns.push({
      name: normalizedKey,
      originalName: key,
      type: getPgType(dataType)
    });
  }

  return columns;
}

// 테이블 비우기 함수 - PNU와 그리드 공통 사용
async function truncateTable(tableName) {
  try {
    await db.query(`TRUNCATE TABLE ${tableName}`);
    console.log(`Truncated table ${tableName}`);
    return true;
  } catch (error) {
    console.error(`Error truncating table ${tableName}:`, error);
    throw new Error(`Failed to truncate table: ${error.message}`);
  }
}

// 테이블 메타데이터 등록 - PNU와 그리드 공통 사용
async function registerTableMetadata(tableName, tableType, metadata) {
  try {
    const query = `
      INSERT INTO table_metadata (table_name, table_type, metadata, created_at)
      VALUES ($1, $2, $3, NOW())
    `;
    
    await db.query(query, [tableName, tableType, JSON.stringify(metadata)]);
    console.log(`Metadata registered for table ${tableName}`);
    return true;
  } catch (error) {
    console.error('Error registering table metadata:', error);
    throw new Error(`Failed to register table metadata: ${error.message}`);
  }
}

module.exports = {
  createTable,
  createPnuIndex,
  createSpatialIndex,
  registerSourceTableMapping,
  registerGridSourceTableMapping,
  inferColumnsFromData,
  truncateTable,
  registerTableMetadata
};