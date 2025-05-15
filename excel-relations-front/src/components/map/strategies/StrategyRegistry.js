/**
 * 전략 레지스트리
 * 맵 피처 전략을 등록하고 관리합니다.
 */

import MapFeatureAdapter from '../MapFeatureAdapter.js';
import LeafletFeatureStrategy from './LeafletFeatureStrategy.js';
import OpenLayersFeatureStrategy from './OpenLayersFeatureStrategy.js';

// 전역 인스턴스 생성
const mapFeatureAdapter = new MapFeatureAdapter();

// 기본 전략 등록
mapFeatureAdapter.registerStrategy('leaflet', new LeafletFeatureStrategy());
mapFeatureAdapter.registerStrategy('openlayers', new OpenLayersFeatureStrategy());

export default {
  /**
   * 맵 피처 어댑터 인스턴스 반환
   * @returns {MapFeatureAdapter} 맵 피처 어댑터 인스턴스
   */
  getAdapter() {
    return mapFeatureAdapter;
  },
  
  /**
   * 새 전략 등록
   * @param {string} providerType 맵 공급자 유형
   * @param {Object} strategy 전략 객체
   */
  registerStrategy(providerType, strategy) {
    mapFeatureAdapter.registerStrategy(providerType, strategy);
  },
  
  /**
   * 데이터 배열을 특정 맵 공급자의 마커로 변환
   * @param {string} providerType 맵 공급자 유형
   * @param {Array<Object>} dataObjects 데이터 객체 배열
   * @returns {Array<Object>} 변환된 마커 객체 배열
   */
  toMarkers(providerType, dataObjects) {
    return mapFeatureAdapter.toMarkers(providerType, dataObjects);
  },
  
  /**
   * 데이터 배열을 특정 맵 공급자의 폴리곤으로 변환
   * @param {string} providerType 맵 공급자 유형
   * @param {Array<Object>} dataObjects 데이터 객체 배열
   * @returns {Array<Object>} 변환된 폴리곤 객체 배열
   */
  toPolygons(providerType, dataObjects) {
    return mapFeatureAdapter.toPolygons(providerType, dataObjects);
  },
  
  /**
   * 데이터 배열을 특정 맵 공급자의 레이어로 변환
   * @param {string} providerType 맵 공급자 유형
   * @param {string} layerType 레이어 유형
   * @param {Array<Object>} dataObjects 데이터 객체 배열
   * @param {Object} options 레이어 옵션
   * @returns {Object} 레이어 설정 객체
   */
  toLayer(providerType, layerType, dataObjects, options = {}) {
    return mapFeatureAdapter.toLayer(providerType, layerType, dataObjects, options);
  }
}; 