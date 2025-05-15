// src/models/numericColumnsModel.js
const db = require('../config/db');

/**
 * 모든 public 스키마의 src로 시작하는 테이블에서 숫자형 컬럼 정보를 가져옵니다.
 * @returns {Promise<Array>} 테이블명, 컬럼명, 데이터타입을 포함한 배열
 */
async function getNumericColumns() {
  try {
    const result = await db.query('SELECT * FROM get_numeric_columns()');
    return result.rows;
  } catch (error) {
    console.error('숫자형 컬럼 정보 조회 중 오류 발생:', error);
    throw error;
  }
}

/**
 * 모든 public 스키마의 src로 시작하는 테이블에서 숫자형 컬럼의 최소/최대값을 가져옵니다.
 * @returns {Promise<Array>} 테이블명, 컬럼명, 데이터타입, 최소값, 최대값을 포함한 배열
 */
async function getNumericColumnsMinMax() {
  try {
    const result = await db.query('SELECT * FROM get_numeric_columns_minmax()');
    return result.rows;
  } catch (error) {
    console.error('숫자형 컬럼 최소/최대값 조회 중 오류 발생:', error);
    throw error;
  }
}

/**
 * 모든 글자형 컬럼 조회
 */
async function getTextColumns() {
  const query = `
    SELECT 
      table_name,
      column_name,
      data_type
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND data_type IN ('text', 'character varying', 'character')
      AND table_name NOT LIKE 'pg_%'
      AND table_name NOT LIKE 'information_schema%'
    ORDER BY table_name, column_name
  `;
  
  const result = await db.query(query);
  return result.rows;
}

/**
 * 모든 날짜형 컬럼 조회
 */
async function getDateColumns() {
  const query = `
    SELECT 
      table_name,
      column_name,
      data_type
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND data_type IN ('date', 'timestamp', 'timestamp without time zone', 'timestamp with time zone')
      AND table_name NOT LIKE 'pg_%'
      AND table_name NOT LIKE 'information_schema%'
    ORDER BY table_name, column_name
  `;
  
  const result = await db.query(query);
  return result.rows;
}

module.exports = {
  getNumericColumns,
  getNumericColumnsMinMax,
  getTextColumns,
  getDateColumns
};