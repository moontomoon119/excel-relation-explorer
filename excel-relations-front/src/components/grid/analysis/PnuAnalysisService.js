/**
 * PNU 분석 서비스 모듈
 * 아이소크론맵 분석 API 호출 및 결과 처리를 담당합니다.
 */
export default class PnuAnalysisService {
  /**
   * 생성자
   * @param {Object} apiService API 서비스 인스턴스
   */
  constructor(apiService) {
    this.apiService = apiService;
    this.cache = new Map(); // 분석 결과 캐시
    this.pendingRequests = new Map(); // 진행 중인 요청
    this.maxRetries = 0; // 최대 재시도 횟수 (0: 재시도 없음)
    this.retryDelay = 1000; // 재시도 간격 (ms)
  }
  
  /**
   * 캐시 키 생성
   * @param {string} pnu PNU 코드
   * @param {number} rangeMinutes 이동시간(분)
   * @param {string} gridTable 그리드 테이블명
   * @param {string} columnName 분석할 컬럼명
   * @returns {string} 캐시 키
   */
  getCacheKey(pnu, rangeMinutes, gridTable, columnName) {
    return `${pnu}:${rangeMinutes}:${gridTable}:${columnName}`;
  }
  
  /**
   * PNU 분석 요청
   * @param {string} pnu PNU 코드
   * @param {number} rangeMinutes 이동시간(분)
   * @param {string} gridTable 그리드 테이블명
   * @param {string} columnName 분석할 컬럼명
   * @param {boolean} useCache 캐시 사용 여부 (기본값: true)
   * @returns {Promise<Object>} 분석 결과
   */
  async analyze(pnu, rangeMinutes, gridTable, columnName, useCache = true) {
    // 파라미터 유효성 검사
    if (!pnu) throw new Error('PNU 코드가 필요합니다.');
    if (!rangeMinutes) throw new Error('이동시간(분)이 필요합니다.');
    if (!gridTable) throw new Error('그리드 테이블명이 필요합니다.');
    if (!columnName) throw new Error('분석할 컬럼명이 필요합니다.');
    
    // 캐시 키 생성
    const cacheKey = this.getCacheKey(pnu, rangeMinutes, gridTable, columnName);
    
    // 캐시 확인 (캐시 사용이 활성화된 경우)
    if (useCache && this.cache.has(cacheKey)) {
      console.log(`[PnuAnalysisService] 캐시에서 결과 반환: ${cacheKey}`);
      return this.cache.get(cacheKey);
    }
    
    // 동일한 요청이 진행 중인 경우 해당 요청 결과 대기
    if (this.pendingRequests.has(cacheKey)) {
      console.log(`[PnuAnalysisService] 동일한 요청 대기 중: ${cacheKey}`);
      return this.pendingRequests.get(cacheKey);
    }
    
    // 새 요청 생성 및 등록
    const requestPromise = this.executeAnalysisRequest(pnu, rangeMinutes, gridTable, columnName, cacheKey);
    this.pendingRequests.set(cacheKey, requestPromise);
    
    try {
      // 요청 실행
      const result = await requestPromise;
      
      // 캐시 저장 (성공한 경우에만)
      if (result.success && useCache) {
        this.cache.set(cacheKey, result);
      }
      
      return result;
    } finally {
      // 요청 완료되면 pendingRequests에서 제거
      this.pendingRequests.delete(cacheKey);
    }
  }
  
  /**
   * 분석 요청 실행 (내부 함수)
   * @param {string} pnu PNU 코드
   * @param {number} rangeMinutes 이동시간(분)
   * @param {string} gridTable 그리드 테이블명
   * @param {string} columnName 분석할 컬럼명
   * @param {string} cacheKey 캐시 키
   * @param {number} retryCount 현재 재시도 횟수 (사용되지 않음)
   * @returns {Promise<Object>} 분석 결과
   */
  async executeAnalysisRequest(pnu, rangeMinutes, gridTable, columnName, cacheKey, retryCount = 0) {
    try {
      console.log(`[PnuAnalysisService] 분석 요청: PNU=${pnu}, 시간=${rangeMinutes}분, 테이블=${gridTable}, 컬럼=${columnName}`);
      
      // API 요청 파라미터 준비
      const numericRangeMinutes = Number(rangeMinutes);
      
      // API 요청
      const response = await this.apiService.analyzeIsochrone(
        pnu, 
        numericRangeMinutes, 
        gridTable, 
        columnName
      );
      
      // 응답 검증
      if (!response) {
        throw new Error('API 응답이 없습니다.');
      }
      
      // 성공 응답 처리
      if (response.success) {
        // 결과 데이터 가공
        const processedData = this.processAnalysisResult(response);
        return processedData;
      }
      
      // 에러 응답 처리
      throw new Error(response.message || '분석에 실패했습니다.');
    } catch (error) {
      // 오류 처리
      console.error(`[PnuAnalysisService] 분석 API 요청 오류:`, error);
      
      // 재시도 없이 바로 오류 반환
      throw error;
    }
  }
  
  /**
   * 분석 결과 검증
   * @param {Object} data 분석 결과 데이터
   * @returns {boolean} 검증 결과
   */
  validateAnalysisResult(data) {
    // 결과 데이터 유효성 검사
    if (!data) return false;
    
    // data 객체 자체 검증
    if (!data.success) return false;
    
    // 응답 데이터 검증
    if (!data.data) return false;
    
    // 필수 필드 확인
    if (!data.data.pnu) return false;
    
    // 통계 정보 확인
    if (data.data.statistics) {
      const stats = data.data.statistics;
      // 최소 필요 필드 확인
      return stats.hasOwnProperty('sum') && 
             (stats.hasOwnProperty('avg') || stats.hasOwnProperty('average')) &&
             stats.hasOwnProperty('min') && 
             stats.hasOwnProperty('max');
    }
    
    return true;
  }
  
  /**
   * 분석 결과 가공
   * @param {Object} rawData 원본 분석 결과
   * @returns {Object} 가공된 분석 결과
   */
  processAnalysisResult(rawData) {
    // 원본 데이터가 없는 경우 빈 객체 반환
    if (!rawData) return { success: false, message: '응답 데이터가 없습니다.' };
    
    try {
      // 검증
      if (!this.validateAnalysisResult(rawData)) {
        return {
          success: false,
          message: '분석 결과 데이터 형식이 유효하지 않습니다.',
          originalData: rawData
        };
      }
      
      // 얕은 복사
      const processedData = { ...rawData };
      
      // 데이터 객체가 있는 경우에만 데이터 가공 수행
      if (processedData.data) {
        // data 객체 복사
        processedData.data = { ...processedData.data };
        
        // 통계 정보 표준화
        if (processedData.data.statistics) {
          // 통계 객체 복사
          processedData.data.statistics = { ...processedData.data.statistics };
          
          const stats = processedData.data.statistics;
          
          // avg 필드가 없고 average 필드가 있는 경우 avg 필드 추가
          if (!stats.avg && stats.average) {
            stats.avg = stats.average;
          }
          
          // average 필드가 없고 avg 필드가 있는 경우 average 필드 추가
          if (!stats.average && stats.avg) {
            stats.average = stats.avg;
          }
          
          // 면적 단위 변환 (필요한 경우)
          if (stats.area) {
            // 단위가 m²인 경우 km²로 변환
            if (stats.areaUnit === 'm²') {
              stats.area = stats.area / 1000000;
              stats.areaUnit = 'km²';
            }
          }
          
          // 값이 문자열이면 숫자로 변환
          ['sum', 'avg', 'average', 'min', 'max', 'count', 'area'].forEach(key => {
            if (typeof stats[key] === 'string' && !isNaN(stats[key])) {
              stats[key] = parseFloat(stats[key]);
            }
          });
        }
        
        // 값이 문자열이면 숫자로 변환
        if (typeof processedData.data.value === 'string' && !isNaN(processedData.data.value)) {
          processedData.data.value = parseFloat(processedData.data.value);
        }
      }
      
      return processedData;
    } catch (error) {
      console.error('[PnuAnalysisService] 결과 가공 중 오류:', error);
      return {
        success: false,
        message: '결과 가공 중 오류가 발생했습니다.',
        error: error.message,
        originalData: rawData
      };
    }
  }
  
  /**
   * 캐시 비우기
   * @param {string} pnu 특정 PNU에 대한 캐시만 비울 경우 PNU 코드 (선택사항)
   */
  clearCache(pnu = null) {
    if (pnu) {
      // 특정 PNU 관련 캐시만 비우기
      const keysToDelete = [];
      
      for (const key of this.cache.keys()) {
        if (key.startsWith(`${pnu}:`)) {
          keysToDelete.push(key);
        }
      }
      
      keysToDelete.forEach(key => this.cache.delete(key));
      console.log(`[PnuAnalysisService] PNU(${pnu}) 관련 캐시 삭제: ${keysToDelete.length}개`);
    } else {
      // 전체 캐시 비우기
      const cacheSize = this.cache.size;
      this.cache.clear();
      console.log(`[PnuAnalysisService] 전체 캐시 삭제: ${cacheSize}개`);
    }
  }
} 