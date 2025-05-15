/**
 * 맵 프로바이더 팩토리
 * 요청된 타입에 따라 적절한 맵 라이브러리 구현체를 생성합니다.
 */

import LeafletProvider from './providers/LeafletProvider.js';
import OpenLayersProvider from './providers/OpenLayersProvider.js';

export default class MapFactory {
  /**
   * 사용 가능한 맵 프로바이더 타입
   */
  static PROVIDER_TYPES = {
    LEAFLET: 'leaflet',
    OPENLAYERS: 'openlayers',
    // 추후 다른 맵 라이브러리 추가 가능
    // GOOGLE: 'google',
    // NAVER: 'naver',
    // KAKAO: 'kakao',
  };
  
  /**
   * 맵 프로바이더 생성
   * @param {string} type 맵 프로바이더 타입 (PROVIDER_TYPES 참조)
   * @param {HTMLElement} container 맵을 표시할 컨테이너 요소
   * @param {Object} config 맵 설정
   * @returns {MapProvider} 생성된 맵 프로바이더 인스턴스
   */
  static createProvider(type, container, config) {
    switch (type.toLowerCase()) {
      case this.PROVIDER_TYPES.LEAFLET:
        return new LeafletProvider(container, config);
        
      case this.PROVIDER_TYPES.OPENLAYERS:
        return new OpenLayersProvider(container, config);
        
      // 추후 다른 맵 라이브러리 지원 추가
      // case this.PROVIDER_TYPES.GOOGLE:
      //   return new GoogleMapsProvider(container, config);
      
      // case this.PROVIDER_TYPES.NAVER:
      //   return new NaverMapsProvider(container, config);
      
      // case this.PROVIDER_TYPES.KAKAO:
      //   return new KakaoMapsProvider(container, config);
        
      default:
        throw new Error(`지원하지 않는 맵 프로바이더 타입: ${type}`);
    }
  }
  
  /**
   * 사용 가능한 모든 맵 프로바이더 목록 반환
   * @returns {Array<Object>} 맵 프로바이더 정보 배열
   */
  static getAvailableProviders() {
    return [
      {
        id: this.PROVIDER_TYPES.LEAFLET,
        name: 'Leaflet',
        description: ''
      },
      {
        id: this.PROVIDER_TYPES.OPENLAYERS,
        name: 'OpenLayers',
        description: ''
      }
      // 추후 다른 맵 라이브러리 추가 가능
    ];
  }
} 