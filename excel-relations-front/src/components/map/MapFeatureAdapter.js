/**
 * 맵 피처 어댑터
 * 
 * 다양한 맵 공급자(Leaflet, OpenLayers 등)에 대한 맵 피처(마커, 폴리곤 등) 변환을 담당합니다.
 * 전략 패턴을 사용하여 새로운 맵 공급자 추가 시 기존 코드를 수정하지 않고 확장할 수 있도록 합니다.
 */

export default class MapFeatureAdapter {
  constructor() {
    this.strategies = new Map(); // 전략 목록 저장
  }

  /**
   * 피처 변환 전략 등록
   * @param {string} providerType 맵 공급자 유형 (예: 'leaflet', 'openlayers')
   * @param {Object} strategy 전략 객체 (변환 메서드 포함)
   */
  registerStrategy(providerType, strategy) {
    this.strategies.set(providerType.toLowerCase(), strategy);
  }

  /**
   * 데이터 객체를 특정 맵 공급자에 맞는 마커로 변환
   * @param {string} providerType 맵 공급자 유형
   * @param {Array<Object>} dataObjects 데이터 객체 배열
   * @returns {Array<Object>} 맵 공급자에 맞는 마커 객체 배열
   */
  toMarkers(providerType, dataObjects) {
    const strategy = this.getStrategy(providerType);
    if (!strategy || typeof strategy.toMarkers !== 'function') {
      throw new Error(`${providerType}에 대한 마커 변환 전략이 없습니다.`);
    }
    return strategy.toMarkers(dataObjects);
  }

  /**
   * 데이터 객체를 특정 맵 공급자에 맞는 폴리곤으로 변환
   * @param {string} providerType 맵 공급자 유형
   * @param {Array<Object>} dataObjects 데이터 객체 배열
   * @returns {Array<Object>} 맵 공급자에 맞는 폴리곤 객체 배열
   */
  toPolygons(providerType, dataObjects) {
    const strategy = this.getStrategy(providerType);
    if (!strategy || typeof strategy.toPolygons !== 'function') {
      throw new Error(`${providerType}에 대한 폴리곤 변환 전략이 없습니다.`);
    }
    return strategy.toPolygons(dataObjects);
  }

  /**
   * 데이터 객체를 특정 맵 공급자에 맞는 맵 레이어로 변환
   * @param {string} providerType 맵 공급자 유형
   * @param {string} layerType 레이어 유형 (예: 'heatmap', 'cluster', 'choropleth')
   * @param {Array<Object>} dataObjects 데이터 객체 배열
   * @param {Object} options 레이어 옵션
   * @returns {Object} 맵 공급자에 맞는 레이어 객체
   */
  toLayer(providerType, layerType, dataObjects, options = {}) {
    const strategy = this.getStrategy(providerType);
    if (!strategy || typeof strategy.toLayer !== 'function') {
      throw new Error(`${providerType}에 대한 레이어 변환 전략이 없습니다.`);
    }
    return strategy.toLayer(layerType, dataObjects, options);
  }

  /**
   * 주어진 공급자 유형에 대한 전략 반환
   * @private
   * @param {string} providerType 맵 공급자 유형
   * @returns {Object|null} 전략 객체 또는 null
   */
  getStrategy(providerType) {
    return this.strategies.get(providerType.toLowerCase()) || null;
  }
} 