/**
 * 아이소크론 맵 관련 API 서비스
 */

import { API_CONFIG } from '../core/config.js';

export default class IsochroneApiService {
  /**
   * 아이소크론 API 서비스 생성자
   */
  constructor() {
    this.baseUrl = API_CONFIG.BASE_URL;
    this.timeout = API_CONFIG.TIMEOUT;
  }

  /**
   * API URL 생성
   * @param {string} endpoint API 엔드포인트
   * @returns {string} 완성된 API URL
   */
  getUrl(endpoint) {
    return `${this.baseUrl}${endpoint}`;
  }

  /**
   * API 요청 실행
   * @param {string} endpoint API 엔드포인트
   * @param {object} options fetch 옵션
   * @returns {Promise<object>} API 응답
   */
  async fetchApi(endpoint, options = {}) {
    const url = this.getUrl(endpoint);
    
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: this.timeout
    };
    
    const fetchOptions = { ...defaultOptions, ...options };
    
    try {
      console.log(`API 요청: ${url}`, JSON.stringify(fetchOptions.body ? JSON.parse(fetchOptions.body) : {}, null, 2));
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);
      
      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API 오류 (${response.status}): ${response.statusText}\n${errorText}`);
      }
      
      const data = await response.json();
      console.log(`API 응답: ${url}`, data);
      return data;
    } catch (error) {
      console.error(`API 요청 실패 (${url}):`, error);
      
      if (error.name === 'AbortError') {
        throw new Error(`API 요청 시간 초과: ${this.timeout}ms를 초과했습니다.`);
      }
      
      throw error;
    }
  }

  /**
   * 그리드 테이블 목록 조회
   * @returns {Promise<object>} 테이블 목록
   */
  async getGridTables() {
    return this.fetchApi('/isochrone/grid-tables');
  }

  /**
   * 테이블 컬럼 목록 조회
   * @param {string} tableName 테이블 이름
   * @returns {Promise<object>} 컬럼 목록
   */
  async getTableColumns(tableName) {
    if (!tableName) {
      throw new Error('테이블 이름이 필요합니다.');
    }
    return this.fetchApi(`/isochrone/columns/${encodeURIComponent(tableName)}`);
  }

  /**
   * 아이소크론 생성 요청
   * @param {object} params 아이소크론 생성 매개변수
   * @returns {Promise<object>} 아이소크론 데이터
   */
  async generateIsochrone(params) {
    if (!params || typeof params !== 'object') {
      throw new Error('아이소크론 생성 매개변수가 필요합니다.');
    }
    
    const requiredFields = ['pnu', 'rangeMinutes'];
    for (const field of requiredFields) {
      if (!params[field]) {
        throw new Error(`필수 매개변수가 누락되었습니다: ${field}`);
      }
    }
    
    return this.fetchApi('/isochrone/generate', {
      method: 'POST',
      body: JSON.stringify(params)
    });
  }
  
  /**
   * 아이소크론 분석 요청
   * @param {string} pnu PNU 코드
   * @param {number} rangeMinutes 이동시간(분)
   * @param {string} gridTable 그리드 테이블명
   * @param {string} columnName 분석할 컬럼명
   * @returns {Promise<object>} 분석 결과
   */
  async analyzeIsochrone(pnu, rangeMinutes, gridTable, columnName) {
    // 파라미터 유효성 검사
    if (!pnu) throw new Error('PNU 코드가 필요합니다.');
    if (!rangeMinutes) throw new Error('이동시간(분)이 필요합니다.');
    if (!gridTable) throw new Error('그리드 테이블명이 필요합니다.');
    if (!columnName) throw new Error('분석할 컬럼명이 필요합니다.');
    
    // 숫자 타입 변환 (숫자로 전달하기 위해)
    const numericRangeMinutes = Number(rangeMinutes);
    
    // 숫자 유효성 검사
    if (isNaN(numericRangeMinutes)) {
      throw new Error('이동시간(분)은 숫자여야 합니다.');
    }
    
    // 요청 데이터 구성
    const params = {
      pnu,
      rangeMinutes: numericRangeMinutes,
      gridTable,
      columnName
    };
    
    // API 엔드포인트
    const endpoint = '/isochrone/analyze';
    
    console.log(`아이소크론 분석 요청: PNU=${pnu}, 시간=${numericRangeMinutes}분, 테이블=${gridTable}, 컬럼=${columnName}`);
    
    try {
      const response = await this.fetchApi(endpoint, {
        method: 'POST',
        body: JSON.stringify(params)
      });
      
      // 응답 데이터 검증
      if (!response) {
        throw new Error('응답 데이터가 없습니다.');
      }
      
      // 성공 여부 확인
      if (!response.success) {
        console.error('아이소크론 분석 실패:', response.message || '알 수 없는 오류');
        return {
          success: false,
          message: response.message || '아이소크론 분석에 실패했습니다.'
        };
      }
      
      console.log('아이소크론 분석 완료:', response.data?.pnu);
      return response;
    } catch (error) {
      console.error('아이소크론 분석 API 요청 오류:', error);
      return {
        success: false,
        message: `API 오류: ${error.message}`,
        error: error
      };
    }
  }
}
