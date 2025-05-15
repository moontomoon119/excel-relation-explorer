/**
 * Leaflet 라이브러리 동적 로딩 서비스
 * 필요한 경우에만 Leaflet을 로드하여 초기 로드 성능을 개선합니다.
 */

export default class LeafletLoader {
  /**
   * Leaflet 라이브러리 CDN URL
   */
  static LEAFLET_CSS_URL = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
  static LEAFLET_JS_URL = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
  
  /**
   * Leaflet 라이브러리가 이미 로드되었는지 확인
   * @returns {boolean} 로드 여부
   */
  static isLoaded() {
    return typeof window.L !== 'undefined';
  }
  
  /**
   * Leaflet CSS 로드
   * @returns {Promise<void>} CSS 로드 완료 시 해결되는 Promise
   */
  static loadCSS() {
    return new Promise((resolve, reject) => {
      // 이미 CSS가 로드되어 있는지 확인
      if (document.querySelector(`link[href="${this.LEAFLET_CSS_URL}"]`)) {
        resolve();
        return;
      }
      
      // CSS 로드
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = this.LEAFLET_CSS_URL;
      link.onload = () => resolve();
      link.onerror = () => reject(new Error('Leaflet CSS 로드 실패'));
      
      document.head.appendChild(link);
    });
  }
  
  /**
   * Leaflet JS 로드
   * @returns {Promise<void>} JS 로드 완료 시 해결되는 Promise
   */
  static loadJS() {
    return new Promise((resolve, reject) => {
      // 이미 JS가 로드되어 있는지 확인
      if (this.isLoaded() || document.querySelector(`script[src="${this.LEAFLET_JS_URL}"]`)) {
        resolve();
        return;
      }
      
      // JS 로드
      const script = document.createElement('script');
      script.src = this.LEAFLET_JS_URL;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Leaflet JS 로드 실패'));
      
      document.body.appendChild(script);
    });
  }
  
  /**
   * Leaflet 라이브러리 전체 로드 (CSS + JS)
   * @returns {Promise<void>} 로드 완료 시 해결되는 Promise
   */
  static async load() {
    if (this.isLoaded()) {
      return;
    }
    
    try {
      // CSS와 JS 병렬 로드
      await Promise.all([
        this.loadCSS(),
        this.loadJS()
      ]);
      
      console.log('Leaflet 라이브러리 로드 완료');
    } catch (error) {
      console.error('Leaflet 라이브러리 로드 실패:', error);
      throw error;
    }
  }
} 