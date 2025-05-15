//excel-relations-api/src/services/dbService.js

/**
 * 데이터베이스 작업 관련 서비스
 */
const db = require('../config/db');
const { normalizeColumnName } = require('../utils/stringUtils');
const { getPgType } = require('../utils/dataTypeUtils');

/**
 * 데이터 소스를 등록합니다.
 * 
 * @param {string} sourceName - 소스 이름
 * @param {string} sourceType - 소스 타입
 * @returns {Promise<number>} - 등록된 소스 ID
 */
async function registerDataSource(sourceName, sourceType) {
  const sourceResult = await db.query(
    'INSERT INTO data_sources(source_name, source_type) VALUES($1, $2) ON CONFLICT(source_name) DO UPDATE SET source_type = $2 RETURNING id',
    [sourceName, sourceType]
  );
  return sourceResult.rows[0].id;
}

/**
 * 테이블을 생성합니다.
 * 
 * @param {string} tableName - 생성할 테이블 이름
 * @param {Array} columns - 컬럼 정의 배열
 * @param {string} pnuColumnName - PNU 컬럼명
 * @returns {Promise<void>}
 */
async function createTable(tableName, columns, pnuColumnName) {
  const columnDefinitions = columns.map(col => `"${col.name}" ${col.type}`).join(', ');
  
  await db.query(`
    CREATE TABLE IF NOT EXISTS ${tableName} (
      id SERIAL PRIMARY KEY,
      ${columnDefinitions},
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `);
  
  // PNU 인덱스 생성 (IF NOT EXISTS 추가)
  const pnuColName = normalizeColumnName(pnuColumnName);
  await db.query(`CREATE INDEX IF NOT EXISTS idx_${tableName}_pnu ON ${tableName} ("${pnuColName}")`);
}

/**
 * 테이블 매핑을 등록합니다.
 * 
 * @param {number} sourceId - 소스 ID
 * @param {string} tableName - 테이블 이름
 * @returns {Promise<void>}
 */
async function registerTableMapping(sourceId, tableName) {
  await db.query(`
    INSERT INTO source_table_mappings(source_id, table_name)
    VALUES($1, $2)
    ON CONFLICT(source_id, table_name) DO NOTHING
  `, [sourceId, tableName]);
}

/**
 * PNU 마스터 테이블을 업데이트합니다.
 * 
 * @param {Array<string>} pnuValues - PNU 값 배열
 * @returns {Promise<number>} - 업데이트된 PNU 개수
 */
async function updatePnuMaster(pnuValues) {
  if (pnuValues.length === 0) return 0;
  
  try {
    // 각 PNU에 대해 개별적으로 삽입 (SQL 인젝션 방지 및 오류 처리 향상)
    for (const pnu of pnuValues) {
      await db.query(`
        INSERT INTO pnu_master(pnu) 
        VALUES($1)
        ON CONFLICT(pnu) DO UPDATE SET updated_at = NOW()
      `, [pnu]);
    }
    return pnuValues.length;
  } catch (error) {
    console.error('Error updating PNU master:', error);
    throw error;
  }
}

/**
 * 테이블의 모든 데이터를 삭제하고 새 데이터를 삽입합니다.
 * 
 * @param {string} tableName - 테이블 이름
 * @param {Array} jsonData - 삽입할 JSON 데이터
 * @param {Array} columns - 컬럼 정의 배열
 * @param {string} pnuColumnName - PNU 컬럼명
 * @returns {Promise<number>} - 삽입된 행 수
 */
async function truncateAndInsertData(tableName, jsonData, columns, pnuColumnName) {
  let insertedCount = 0;
  
  try {
    // 기존 데이터 모두 삭제
    await db.query(`TRUNCATE TABLE ${tableName}`);
    console.log(`Truncated table ${tableName}`);
    
    // 새 데이터 삽입
    const allColumns = columns.map(col => `"${col.name}"`).join(', ');
    
    for (const row of jsonData) {
      try {
        const pnu = row[pnuColumnName];
        if (!pnu) {
          console.log('Skipping row without PNU');
          continue;
        }
        
        // 단순 INSERT 수행
        let placeholders = [];
        let values = [];
        
        for (let i = 0; i < columns.length; i++) {
          const col = columns[i];
          const val = row[col.originalName] ?? null;
          placeholders.push(`$${i+1}`);
          values.push(val);
        }
        
        const insertQuery = `
          INSERT INTO ${tableName} (${allColumns}) 
          VALUES (${placeholders.join(', ')})
        `;
        await db.query(insertQuery, values);
        insertedCount++;
        
      } catch (error) {
        console.error(`Error inserting row:`, error);
      }
    }
    
    return insertedCount;
  } catch (error) {
    console.error('Error in truncate-insert operation:', error);
    throw error;
  }
}

/**
 * 컬럼 타입을 추론합니다.
 * 
 * @param {Array} jsonData - 분석할 JSON 데이터
 * @returns {Array} - 컬럼 정의 배열
 */
function inferColumnTypes(jsonData) {
  if (jsonData.length === 0) return [];
  
  const firstRow = jsonData[0];
  const columns = [];
  
  for (const key in firstRow) {
    let dataType = null;
    
    // 샘플링하여 타입 확인 (일관성)
    const sampleLimit = Math.min(jsonData.length, 100);
    for (let i = 0; i < sampleLimit; i++) {
      const sampleValue = jsonData[i][key];
      const currentType = require('../utils/dataTypeUtils').inferDataType(sampleValue);
      if (currentType && dataType && currentType !== dataType) {
        dataType = 'TEXT';
        break;
      }
      if (!dataType && currentType) {
        dataType = currentType;
      }
    }
    
    if (!dataType) dataType = 'TEXT';
    
    columns.push({
      name: normalizeColumnName(key),
      originalName: key,
      type: getPgType(dataType)
    });
  }
  
  return columns;
}

module.exports = {
  registerDataSource,
  createTable,
  registerTableMapping,
  updatePnuMaster,
  truncateAndInsertData,
  inferColumnTypes
};