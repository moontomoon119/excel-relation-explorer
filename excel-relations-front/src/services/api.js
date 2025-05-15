/**
 * API 서비스
 * 서버와의 통신을 담당하는 모듈
 */

import { API_CONFIG } from '../core/config.js';

const API_URL = API_CONFIG.PNU_FILTER_URL;

/**
 * 기본 API 호출 함수
 * @param {string} endpoint 엔드포인트 경로
 * @param {Object} options fetch 옵션
 * @returns {Promise<any>} 응답 데이터
 */
async function fetchAPI(endpoint, options = {}) {
  try {
    const url = endpoint.startsWith('http') 
      ? endpoint 
      : `${API_URL}${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;
    
    console.log('API 요청 URL:', url);
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });
    
    if (!response.ok) {
      throw new Error(`API 오류: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (!data.success && !options.ignoreSuccess) {
      throw new Error(data.message || '데이터 로드에 실패했습니다.');
    }
    
    return data;
  } catch (error) {
    console.error('API 호출 오류:', error);
    throw error;
  }
}

/**
 * 모든 테이블과 컬럼 데이터를 로드합니다.
 * @returns {Promise<{numericData: Array, textData: Array, dateData: Array}>}
 */
export async function loadAllTablesData() {
  try {
    console.log('API: 모든 테이블 데이터 로드 시작');
    
    // 숫자형 컬럼 로드
    console.log('API: 숫자형 컬럼 데이터 요청 URL:', `${API_URL}/numeric-columns`);
    const numericData = await fetchAPI('/numeric-columns');
    console.log('API: 숫자형 컬럼 데이터 응답:', numericData);
    
    // 글자형 컬럼 로드
    console.log('API: 글자형 컬럼 데이터 요청 URL:', `${API_URL}/text-columns`);
    const textData = await fetchAPI('/text-columns');
    console.log('API: 글자형 컬럼 데이터 응답:', textData);
    
    // 날짜형 컬럼 로드
    console.log('API: 날짜형 컬럼 데이터 요청 URL:', `${API_URL}/date-columns`);
    const dateData = await fetchAPI('/date-columns');
    console.log('API: 날짜형 컬럼 데이터 응답:', dateData);
    
    const result = {
      numericData: numericData.data || [],
      textData: textData.data || [],
      dateData: dateData.data || []
    };
    
    console.log('API: 데이터 로드 완료, 결과:', result);
    return result;
  } catch (error) {
    console.error('API: 테이블 데이터 로드 오류:', error);
    throw new Error('테이블 데이터를 불러오는 데 실패했습니다.');
  }
}

/**
 * 글자형 컬럼의 고유값을 로드합니다.
 * @param {string} tableName 테이블명
 * @param {string} columnName 컬럼명
 * @returns {Promise<Object>} 컬럼 정보와 고유값 목록
 */
export async function loadTextColumnValues(tableName, columnName) {
  try {
    const data = await fetchAPI(`/text-column-info/${tableName}/${columnName}`);
    return data.data;
  } catch (error) {
    console.error('글자형 값 로드 오류:', error);
    throw error;
  }
}

/**
 * 날짜형 컬럼 정보를 로드합니다.
 * @param {string} tableName 테이블명
 * @param {string} columnName 컬럼명
 * @returns {Promise<Object>} 컬럼 정보
 */
export async function loadDateColumnInfo(tableName, columnName) {
  try {
    const data = await fetchAPI(`/date-column-info/${tableName}/${columnName}`);
    return data.data;
  } catch (error) {
    console.error('날짜형 컬럼 정보 로드 오류:', error);
    throw error;
  }
}

/**
 * 숫자형 필터를 적용합니다.
 * @param {string} tableName 테이블명
 * @param {string} columnName 컬럼명
 * @param {number} minValue 최소값
 * @param {number} maxValue 최대값
 * @returns {Promise<Object>} 필터링 결과
 */
export async function applyNumericFilter(tableName, columnName, minValue, maxValue) {
  try {
    const result = await fetchAPI('/filter-by-range', {
      method: 'POST',
      body: JSON.stringify({
        tableName,
        columnName,
        minValue: Number(minValue),
        maxValue: Number(maxValue)
      })
    });
    
    return result.data;
  } catch (error) {
    console.error('숫자형 필터 적용 오류:', error);
    throw error;
  }
}

/**
 * 글자형 필터를 적용합니다.
 * @param {string} tableName 테이블명
 * @param {string} columnName 컬럼명
 * @param {Array<string>} selectedValues 선택된 값들
 * @returns {Promise<Object>} 필터링 결과
 */
export async function applyTextFilter(tableName, columnName, selectedValues) {
  try {
    const result = await fetchAPI('/filter-by-values', {
      method: 'POST',
      body: JSON.stringify({
        tableName,
        columnName,
        selectedValues
      })
    });
    
    return result.data;
  } catch (error) {
    console.error('글자형 필터 적용 오류:', error);
    throw error;
  }
}

/**
 * 날짜형 필터를 적용합니다.
 * @param {string} tableName 테이블명
 * @param {string} columnName 컬럼명
 * @param {string} startDate 시작 날짜 (YYYY-MM-DD)
 * @param {string} endDate 종료 날짜 (YYYY-MM-DD)
 * @returns {Promise<Object>} 필터링 결과
 */
export async function applyDateFilter(tableName, columnName, startDate, endDate) {
  try {
    const result = await fetchAPI('/filter-by-date-range', {
      method: 'POST',
      body: JSON.stringify({
        tableName,
        columnName,
        startDate,
        endDate
      })
    });
    
    return result.data;
  } catch (error) {
    console.error('날짜형 필터 적용 오류:', error);
    throw error;
  }
}

/**
 * PNU 코드로 상세 정보를 조회합니다.
 * @param {string} pnuCode PNU 코드
 * @returns {Promise<Object>} PNU 상세 정보
 */
export async function loadPnuDetails(pnuCode) {
  try {
    console.log('PNU 상세 정보 요청:', pnuCode);
    // 정확한 API 경로 사용
    const result = await fetchAPI(`/pnu/${pnuCode}`);
    console.log('PNU 상세 정보 응답:', result);
    return result.data;
  } catch (error) {
    console.error('PNU 상세 정보 로드 오류:', error);
    throw error;
  }
} 