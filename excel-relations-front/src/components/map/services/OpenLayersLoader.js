/**
 * OpenLayers 라이브러리 동적 로딩 서비스
 * 모듈 번들링 환경에서 사용하기 위해 개선된 버전
 */

export default class OpenLayersLoader {
  /**
   * OpenLayers 라이브러리 CDN URL
   * 더 안정적인 버전인 6.9.0 사용
   */
  static OL_CSS_URL = 'https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.9.0/css/ol.css';
  
  // CDN URL 목록 (순차적으로 시도)
  static CDN_URLS = [
    'https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.9.0/build/ol.js',
    'https://cdn.jsdelivr.net/npm/ol@6.9.0/dist/ol.js',
    'https://unpkg.com/ol@6.9.0/dist/ol.js',
    'https://cdnjs.cloudflare.com/ajax/libs/ol3/6.9.0/ol.js'
  ];
  
  // 최대 재시도 횟수
  static MAX_RETRIES = 5;
  
  // 로드 상태 추적
  static isLoading = false;
  static loadPromise = null;
  
  /**
   * OpenLayers 라이브러리가 이미 로드되었는지 확인
   * @returns {boolean} 로드 여부
   */
  static isLoaded() {
    return typeof window.ol !== 'undefined';
  }
  
  /**
   * OpenLayers CSS 로드
   * @param {number} retryCount 재시도 횟수
   * @returns {Promise<void>} CSS 로드 완료 시 해결되는 Promise
   */
  static loadCSS(retryCount = 0) {
    return new Promise((resolve, reject) => {
      // 이미 CSS가 로드되어 있는지 확인
      if (document.querySelector(`link[href="${this.OL_CSS_URL}"]`)) {
        console.log('OpenLayers CSS가 이미 로드되어 있습니다');
        resolve();
        return;
      }
      
      console.log(`OpenLayers CSS 로드 시작 (시도 ${retryCount + 1}/${this.MAX_RETRIES + 1}):`, this.OL_CSS_URL);
      
      // CSS 로드
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = this.OL_CSS_URL;
      link.onload = () => {
        console.log('OpenLayers CSS 로드 완료');
        resolve();
      };
      link.onerror = (error) => {
        console.error(`OpenLayers CSS 로드 실패 (시도 ${retryCount + 1}/${this.MAX_RETRIES + 1}):`, error);
        
        // 최대 재시도 횟수 이내면 재시도
        if (retryCount < this.MAX_RETRIES) {
          console.log(`OpenLayers CSS 로드 재시도 (${retryCount + 2}/${this.MAX_RETRIES + 1})...`);
          setTimeout(() => {
            this.loadCSS(retryCount + 1)
              .then(resolve)
              .catch(reject);
          }, 1000); // 1초 후 재시도
        } else {
          reject(new Error('OpenLayers CSS 로드 실패: 최대 재시도 횟수 초과'));
        }
      };
      
      document.head.appendChild(link);
    });
  }
  
  /**
   * OpenLayers JS 로드 - 스크립트 태그 방식
   * @returns {Promise<void>} JS 로드 완료 시 해결되는 Promise
   */
  static loadJS(retryCount = 0) {
    return new Promise((resolve, reject) => {
      // 이미 로드되었는지 확인
      if (this.isLoaded()) {
        console.log('OpenLayers JS가 이미 로드되어 있습니다');
        resolve();
        return;
      }
      
      // 현재 시도할 URL 선택
      const currentUrl = this.CDN_URLS[retryCount % this.CDN_URLS.length];
      
      console.log(`OpenLayers JS 로드 시도 (${retryCount + 1}/${this.MAX_RETRIES}): ${currentUrl}`);
      
      // 스크립트 생성
      const script = document.createElement('script');
      script.src = currentUrl;
      script.async = false; // 순차적 실행 보장
      script.crossOrigin = 'anonymous';
      
      script.onload = () => {
        console.log('OpenLayers 스크립트 로드 완료, window.ol 확인 중...');
        
        // ol 객체 확인
        setTimeout(() => {
          if (window.ol) {
            console.log('window.ol 확인됨!');
            resolve();
          } else {
            console.warn('스크립트는 로드되었으나 window.ol이 정의되지 않음');
            
            if (retryCount < this.MAX_RETRIES - 1) {
              // 스크립트 제거
              script.parentNode.removeChild(script);
              // 다음 URL로 재시도
              this.loadJS(retryCount + 1)
                .then(resolve)
                .catch(reject);
            } else {
              reject(new Error('OpenLayers 객체를 찾을 수 없습니다'));
            }
          }
        }, 500);
      };
      
      script.onerror = (error) => {
        console.error(`스크립트 로드 실패 (${retryCount + 1}/${this.MAX_RETRIES}):`, error);
        
        if (retryCount < this.MAX_RETRIES - 1) {
          // 스크립트 제거
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
          // 다음 URL로 재시도
          this.loadJS(retryCount + 1)
            .then(resolve)
            .catch(reject);
        } else {
          reject(new Error('모든 CDN에서 OpenLayers 로드 실패'));
        }
      };
      
      document.body.appendChild(script);
    });
  }
  
  /**
   * OpenLayers 라이브러리 전체 로드 (CSS + JS)
   * @returns {Promise<void>} 로드 완료 시 해결되는 Promise
   */
  static async load() {
    // 이미 로드되었거나 로드 중이면 기존 Promise 반환
    if (this.isLoaded()) {
      console.log('OpenLayers 라이브러리가 이미 로드되어 있습니다');
      return Promise.resolve();
    }
    
    if (this.isLoading && this.loadPromise) {
      console.log('OpenLayers 라이브러리가 이미 로드 중입니다');
      return this.loadPromise;
    }
    
    // 로드 상태 설정
    this.isLoading = true;
    
    // 로드 Promise 생성 및 저장
    this.loadPromise = (async () => {
      try {
        console.log('OpenLayers 라이브러리 로드 시작');
        
        // CSS와 JS 순차적으로 로드
        await this.loadCSS();
        await this.loadJS();
        
        // 최종 확인
        if (!window.ol) {
          throw new Error('OpenLayers 객체를 찾을 수 없습니다');
        }
        
        console.log('OpenLayers 라이브러리 로드 완료!');
        return true;
      } catch (error) {
        console.error('OpenLayers 라이브러리 로드 실패:', error);
        this.isLoading = false;
        throw error;
      } finally {
        this.isLoading = false;
      }
    })();
    
    return this.loadPromise;
  }
} 