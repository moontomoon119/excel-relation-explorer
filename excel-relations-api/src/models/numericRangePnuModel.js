// src/models/numericRangePnuModel.js
const db = require('../config/db');

/**
 * 특정 테이블의 컬럼에서 최소/최대 범위에 해당하는 PNU 목록을 조회합니다.
 * @param {string} tableName - 대상 테이블명
 * @param {string} columnName - 대상 컬럼명
 * @param {number} minValue - 최소값
 * @param {number} maxValue - 최대값
 * @returns {Promise<Array>} PNU 목록
 */
async function getFilteredPnu(tableName, columnName, minValue, maxValue) {
  try {
    const query = 'SELECT * FROM get_filtered_pnu($1, $2, $3, $4)';
    const params = [tableName, columnName, minValue, maxValue];
    const result = await db.query(query, params);
    return result.rows;
  } catch (error) {
    console.error('PNU 필터링 조회 중 오류 발생:', error);
    throw error;
  }
}

/**
 * 숫자형 컬럼 정보를 가져와 사용자 지정 범위로 필터링된 PNU 목록을 조회합니다.
 * @param {string} tableName - 대상 테이블명
 * @param {string} columnName - 대상 컬럼명
 * @param {number} rangePercent - 중앙값 기준 범위 비율 (0-100)
 * @returns {Promise<Object>} 필터링 정보와 PNU 목록
 */
async function getFilteredPnuByPercentage(tableName, columnName, rangePercent = 10) {
  try {
    // 1. 숫자형 컬럼의 최소/최대값 조회
    const minMaxQuery = `
      SELECT MIN(${columnName})::numeric AS min_value, 
             MAX(${columnName})::numeric AS max_value,
             AVG(${columnName})::numeric AS avg_value
      FROM ${tableName}
      WHERE ${columnName} IS NOT NULL
    `;
    const minMaxResult = await db.query(minMaxQuery);
    
    if (minMaxResult.rows.length === 0) {
      throw new Error('데이터를 찾을 수 없습니다.');
    }
    
    const { min_value, max_value, avg_value } = minMaxResult.rows[0];
    
    // 2. 범위 계산 (중앙값 기준으로 +/- rangePercent%)
    const range = (max_value - min_value) * (rangePercent / 100);
    const filterMin = avg_value - range;
    const filterMax = avg_value + range;
    
    // 3. 범위 내 PNU 조회
    const pnuList = await getFilteredPnu(tableName, columnName, filterMin, filterMax);
    
    return {
      table_name: tableName,
      column_name: columnName,
      min_value,
      max_value,
      avg_value,
      filter_min: filterMin,
      filter_max: filterMax,
      range_percent: rangePercent,
      pnu_count: pnuList.length,
      pnu_list: pnuList
    };
  } catch (error) {
    console.error('범위 기반 PNU 필터링 중 오류 발생:', error);
    throw error;
  }
}

module.exports = {
  getFilteredPnu,
  getFilteredPnuByPercentage
};