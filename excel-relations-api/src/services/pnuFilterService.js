// src/services/pnuFilterService.js
const db = require('../config/db');
const numericColumnsModel = require('../models/numericColumnsModel');

class PnuFilterService {
  constructor() {
    this.columnData = null;
    this.textColumnData = null;  // 글자형 컬럼 데이터 추가
    this.dateColumnData = null;  // 날짜형 컬럼 데이터 추가
    this.initialized = false;
  }

  /**
   * 서비스 초기화 - 숫자형과 글자형 컬럼 정보 로드
   */
  async initialize() {
    try {
      // 숫자형 컬럼 목록 조회
      const columns = await numericColumnsModel.getNumericColumns();
      
      // 글자형 컬럼 목록 조회
      const textColumns = await numericColumnsModel.getTextColumns();
      
      // 날짜형 컬럼 목록 조회
      const dateColumns = await numericColumnsModel.getDateColumns();
      
      // 각 컬럼별 최소/최대/평균값 조회 (숫자형)
      this.columnData = await Promise.all(
        columns.map(async (column) => {
          const { table_name, column_name, data_type } = column;
          const query = `
            SELECT 
              MIN(${column_name})::numeric AS min_value,
              MAX(${column_name})::numeric AS max_value,
              AVG(${column_name})::numeric AS avg_value
            FROM ${table_name}
            WHERE ${column_name} IS NOT NULL
          `;
          
          try {
            const result = await db.query(query);
            if (result.rows.length > 0) {
              const { min_value, max_value, avg_value } = result.rows[0];
              return {
                table_name,
                column_name,
                data_type,
                min_value: min_value !== null ? Number(min_value) : null,
                max_value: max_value !== null ? Number(max_value) : null,
                avg_value: avg_value !== null ? Number(avg_value) : null
              };
            }
            return { ...column, min_value: null, max_value: null, avg_value: null };
          } catch (error) {
            console.error(`Error getting stats for ${table_name}.${column_name}:`, error.message);
            return { ...column, min_value: null, max_value: null, avg_value: null };
          }
        })
      );
      
      // 글자형 컬럼 데이터 저장
      this.textColumnData = textColumns;
      
      // 날짜형 컬럼 데이터 저장 및 최소/최대 날짜 조회
      this.dateColumnData = await Promise.all(
        dateColumns.map(async (column) => {
          const { table_name, column_name, data_type } = column;
          const query = `
            SELECT 
              MIN(${column_name}) AS min_date,
              MAX(${column_name}) AS max_date
            FROM ${table_name}
            WHERE ${column_name} IS NOT NULL
          `;
          
          try {
            const result = await db.query(query);
            if (result.rows.length > 0) {
              const { min_date, max_date } = result.rows[0];
              return {
                table_name,
                column_name,
                data_type,
                min_date,
                max_date
              };
            }
            return { ...column, min_date: null, max_date: null };
          } catch (error) {
            console.error(`Error getting date stats for ${table_name}.${column_name}:`, error.message);
            return { ...column, min_date: null, max_date: null };
          }
        })
      );
      
      this.initialized = true;
    } catch (error) {
      console.error('PNU 필터 서비스 초기화 오류:', error);
      throw error;
    }
  }

  /**
   * 초기화 상태 확인 및 필요시 초기화 수행
   */
  async ensureInitialized() {
    if (!this.initialized) {
      await this.initialize();
    }
    return this.initialized;
  }

  /**
   * 모든 숫자형 컬럼 정보 조회
   */
  async getAllNumericColumns() {
    await this.ensureInitialized();
    return this.columnData;
  }

  /**
   * 특정 테이블의 숫자형 컬럼 정보 조회
   */
  async getTableNumericColumns(tableName) {
    await this.ensureInitialized();
    return this.columnData.filter(col => col.table_name === tableName);
  }

  /**
   * 특정 테이블의 특정 컬럼 정보 조회
   */
  async getColumnInfo(tableName, columnName) {
    await this.ensureInitialized();
    return this.columnData.find(
      col => col.table_name === tableName && col.column_name === columnName
    );
  }

  /**
   * 사용자 지정 범위에 따른 PNU 필터링
   */
  async filterPnuByRange(tableName, columnName, minValue, maxValue) {
    await this.ensureInitialized();
    
    const columnInfo = this.columnData.find(
      col => col.table_name === tableName && col.column_name === columnName
    );
    
    if (!columnInfo) {
      throw new Error(`테이블 ${tableName}의 컬럼 ${columnName}을 찾을 수 없습니다.`);
    }
    
    // 유효한 숫자로 변환
    const min = Number(minValue);
    const max = Number(maxValue);
    
    if (isNaN(min) || isNaN(max)) {
      throw new Error('유효한 숫자 범위가 아닙니다.');
    }
    
    // get_filtered_pnu 함수 호출
    const result = await db.query(
      'SELECT * FROM get_filtered_pnu($1, $2, $3, $4)',
      [tableName, columnName, min, max]
    );
    
    return {
      table_name: tableName,
      column_name: columnName,
      data_type: columnInfo.data_type,
      min_value: columnInfo.min_value,
      max_value: columnInfo.max_value,
      filter_min: min,
      filter_max: max,
      pnu_count: result.rows.length,
      pnu_list: result.rows
    };
  }

  /**
   * 백분율로 PNU 필터링
   * @param {string} tableName 테이블명
   * @param {string} columnName 컬럼명
   * @param {number} centerValue 중심값 (백분율 계산 기준)
   * @param {number} rangePercent 범위 백분율 (1-100)
   */
  async filterPnuByPercentage(tableName, columnName, centerValue = null, rangePercent = 10) {
    await this.ensureInitialized();
    
    const columnInfo = this.columnData.find(
      col => col.table_name === tableName && col.column_name === columnName
    );
    
    if (!columnInfo) {
      throw new Error(`테이블 ${tableName}의 컬럼 ${columnName}을 찾을 수 없습니다.`);
    }
    
    // 중심값이 제공되지 않으면 평균값 사용
    const center = centerValue !== null ? Number(centerValue) : columnInfo.avg_value;
    
    if (isNaN(center)) {
      throw new Error('유효한 중심값이 아닙니다.');
    }
    
    const range = (columnInfo.max_value - columnInfo.min_value) * (rangePercent / 100);
    const min = center - range;
    const max = center + range;
    
    // get_filtered_pnu 함수 호출
    const result = await db.query(
      'SELECT * FROM get_filtered_pnu($1, $2, $3, $4)',
      [tableName, columnName, min, max]
    );
    
    return {
      table_name: tableName,
      column_name: columnName,
      data_type: columnInfo.data_type,
      min_value: columnInfo.min_value,
      max_value: columnInfo.max_value,
      center_value: center,
      range_percent: rangePercent,
      filter_min: min,
      filter_max: max,
      pnu_count: result.rows.length,
      pnu_list: result.rows
    };
  }

  /**
   * 모든 글자형 컬럼 정보 조회
   */
  async getAllTextColumns() {
    await this.ensureInitialized();
    return this.textColumnData;
  }

  /**
   * 특정 테이블의 글자형 컬럼 정보 조회
   */
  async getTableTextColumns(tableName) {
    await this.ensureInitialized();
    return this.textColumnData.filter(col => col.table_name === tableName);
  }

  /**
   * 특정 테이블의 특정 글자형 컬럼 정보 조회
   */
  async getTextColumnInfo(tableName, columnName) {
    await this.ensureInitialized();
    
    const columnInfo = this.textColumnData.find(
      col => col.table_name === tableName && col.column_name === columnName
    );
    
    if (!columnInfo) {
      return null;
    }
    
    // 고유값 통계 조회
    try {
      const query = `
        SELECT 
          ${columnName} as value,
          COUNT(*) as frequency
        FROM ${tableName}
        WHERE ${columnName} IS NOT NULL
        GROUP BY ${columnName}
        ORDER BY frequency DESC
        LIMIT 1000
      `;
      
      const result = await db.query(query);
      
      return {
        ...columnInfo,
        value_stats: result.rows
      };
    } catch (error) {
      console.error(`Error getting text stats for ${tableName}.${columnName}:`, error.message);
      return {
        ...columnInfo,
        value_stats: []
      };
    }
  }

  /**
   * 선택된 값들로 PNU 필터링
   */
  async filterPnuByValues(tableName, columnName, selectedValues) {
    await this.ensureInitialized();
    
    const columnInfo = this.textColumnData.find(
      col => col.table_name === tableName && col.column_name === columnName
    );
    
    if (!columnInfo) {
      throw new Error(`테이블 ${tableName}의 컬럼 ${columnName}을 찾을 수 없습니다.`);
    }
    
    if (!Array.isArray(selectedValues) || selectedValues.length === 0) {
      throw new Error('선택된 값이 없습니다.');
    }
    
    // get_filtered_pnu_by_values 함수 호출
    const result = await db.query(
      'SELECT * FROM get_filtered_pnu_by_values($1, $2, $3)',
      [tableName, columnName, selectedValues]
    );
    
    return {
      table_name: tableName,
      column_name: columnName,
      data_type: columnInfo.data_type,
      selected_values: selectedValues,
      pnu_count: result.rows.length,
      pnu_list: result.rows
    };
  }

  /**
   * 모든 날짜형 컬럼 조회
   */
  async getAllDateColumns() {
    await this.ensureInitialized();
    return this.dateColumnData;
  }

  /**
   * 특정 테이블의 날짜형 컬럼 정보 조회
   */
  async getTableDateColumns(tableName) {
    await this.ensureInitialized();
    return this.dateColumnData.filter(col => col.table_name === tableName);
  }

  /**
   * 특정 날짜형 컬럼 정보 조회
   */
  async getDateColumnInfo(tableName, columnName) {
    await this.ensureInitialized();
    return this.dateColumnData.find(
      col => col.table_name === tableName && col.column_name === columnName
    );
  }

  /**
   * 날짜 범위로 PNU 필터링
   */
  async filterPnuByDateRange(tableName, columnName, startDate, endDate) {
    await this.ensureInitialized();
    
    const columnInfo = this.dateColumnData.find(
      col => col.table_name === tableName && col.column_name === columnName
    );
    
    if (!columnInfo) {
      throw new Error(`테이블 ${tableName}의 컬럼 ${columnName}을 찾을 수 없습니다.`);
    }
    
    // 날짜 형식 검증
    if (!this.isValidDateFormat(startDate) || !this.isValidDateFormat(endDate)) {
      throw new Error('유효한 날짜 형식이 아닙니다. YYYY-MM-DD 형식을 사용하세요.');
    }
    
    // 날짜 범위로 PNU 필터링 쿼리
    const query = `
      SELECT DISTINCT pnu
      FROM ${tableName}
      WHERE ${columnName} >= $1::date
        AND ${columnName} <= $2::date
      ORDER BY pnu
    `;
    
    const result = await db.query(query, [startDate, endDate]);
    
    return {
      table_name: tableName,
      column_name: columnName,
      data_type: columnInfo.data_type,
      min_date: columnInfo.min_date,
      max_date: columnInfo.max_date,
      filter_start_date: startDate,
      filter_end_date: endDate,
      pnu_count: result.rows.length,
      pnu_list: result.rows
    };
  }
  
  /**
   * 날짜 형식 검증 (YYYY-MM-DD)
   */
  isValidDateFormat(dateString) {
    // ISO 형식 날짜 검증 (YYYY-MM-DD)
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) return false;
    
    // 유효한 날짜인지 확인
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date);
  }
}

// 싱글톤 인스턴스 생성
const pnuFilterService = new PnuFilterService();

module.exports = pnuFilterService;