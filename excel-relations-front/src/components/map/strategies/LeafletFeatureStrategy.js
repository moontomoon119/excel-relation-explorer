/**
 * Leaflet 맵 피처 변환 전략
 * Leaflet 맵에 사용할 수 있는 마커, 폴리곤 등의 피처로 데이터를 변환합니다.
 */

import PopupUtils from '../utils/PopupUtils.js';

export default class LeafletFeatureStrategy {
  /**
   * Leaflet 마커로 변환
   * @param {Array<Object>} dataObjects 데이터 객체 배열
   * @returns {Array<Object>} Leaflet 마커 형식 객체 배열
   */
  toMarkers(dataObjects) {
    if (!Array.isArray(dataObjects)) {
      return [];
    }
    
    return dataObjects
      .filter(item => item.latitude && item.longitude) // 좌표가 있는 항목만 필터링
      .map(item => ({
        position: [item.latitude, item.longitude],
        title: this._getTitle(item),
        popup: this._createPopupContent(item),
        options: this._getMarkerOptions(item)
      }));
  }
  
  /**
   * Leaflet 폴리곤으로 변환
   * @param {Array<Object>} dataObjects 데이터 객체 배열
   * @returns {Array<Object>} Leaflet 폴리곤 형식 객체 배열
   */
  toPolygons(dataObjects) {
    if (!Array.isArray(dataObjects)) {
      return [];
    }
    
    return dataObjects
      .filter(item => item.boundaries && Array.isArray(item.boundaries) && item.boundaries.length >= 3)
      .map(item => ({
        positions: item.boundaries,
        popup: this._createPopupContent(item),
        options: this._getPolygonOptions(item)
      }));
  }
  
  /**
   * 다양한 Leaflet 레이어 유형으로 변환
   * @param {string} layerType 레이어 유형
   * @param {Array<Object>} dataObjects 데이터 객체 배열
   * @param {Object} options 옵션
   * @returns {Object} Leaflet 레이어 설정 객체
   */
  toLayer(layerType, dataObjects, options = {}) {
    switch (layerType.toLowerCase()) {
      case 'heatmap':
        return this._createHeatmapLayerConfig(dataObjects, options);
      case 'cluster':
        return this._createClusterLayerConfig(dataObjects, options);
      case 'choropleth':
        return this._createChoroplethLayerConfig(dataObjects, options);
      default:
        throw new Error(`지원하지 않는 Leaflet 레이어 유형: ${layerType}`);
    }
  }
  
  /**
   * 히트맵 레이어 설정 생성
   * @private
   * @param {Array<Object>} dataObjects 데이터 객체 배열
   * @param {Object} options 옵션
   * @returns {Object} 히트맵 레이어 설정
   */
  _createHeatmapLayerConfig(dataObjects, options) {
    const points = dataObjects
      .filter(item => item.latitude && item.longitude)
      .map(item => {
        // 기본 형식: [lat, lng, intensity]
        const point = [
          item.latitude,
          item.longitude,
          item.intensity || options.defaultIntensity || 1
        ];
        return point;
      });
    
    return {
      type: 'heatmap',
      data: points,
      options: {
        radius: options.radius || 25,
        blur: options.blur || 15,
        maxZoom: options.maxZoom || 18,
        max: options.max || 1.0,
        gradient: options.gradient || { 0.4: 'blue', 0.65: 'lime', 1: 'red' }
      }
    };
  }
  
  /**
   * 클러스터 레이어 설정 생성
   * @private
   * @param {Array<Object>} dataObjects 데이터 객체 배열
   * @param {Object} options 옵션
   * @returns {Object} 클러스터 레이어 설정
   */
  _createClusterLayerConfig(dataObjects, options) {
    // 마커 데이터로 변환
    const markers = this.toMarkers(dataObjects);
    
    return {
      type: 'cluster',
      data: markers,
      options: {
        showCoverageOnHover: options.showCoverageOnHover !== undefined ? options.showCoverageOnHover : true,
        zoomToBoundsOnClick: options.zoomToBoundsOnClick !== undefined ? options.zoomToBoundsOnClick : true,
        maxClusterRadius: options.maxClusterRadius || 80,
        disableClusteringAtZoom: options.disableClusteringAtZoom || 16,
        spiderfyOnMaxZoom: options.spiderfyOnMaxZoom !== undefined ? options.spiderfyOnMaxZoom : true
      }
    };
  }
  
  /**
   * 단계구분도(Choropleth) 레이어 설정 생성
   * @private
   * @param {Array<Object>} dataObjects 데이터 객체 배열
   * @param {Object} options 옵션
   * @returns {Object} 단계구분도 레이어 설정
   */
  _createChoroplethLayerConfig(dataObjects, options) {
    // GeoJSON 형식 데이터가 필요함
    const geoJsonData = options.geoJson || this._createGeoJsonFromPolygons(dataObjects);
    
    return {
      type: 'choropleth',
      data: geoJsonData,
      options: {
        valueProperty: options.valueProperty || 'value',
        scale: options.scale || ['#FFEDA0', '#FEB24C', '#FC4E2A', '#E31A1C', '#BD0026'],
        steps: options.steps || 5,
        mode: options.mode || 'q', // 'q' for quantile, 'e' for equidistant
        style: options.style || {
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
        },
        onEachFeature: options.onEachFeature
      }
    };
  }
  
  /**
   * 폴리곤 데이터로부터 GeoJSON 생성
   * @private
   * @param {Array<Object>} polygonData 폴리곤 데이터 배열
   * @returns {Object} GeoJSON 객체
   */
  _createGeoJsonFromPolygons(polygonData) {
    return {
      type: 'FeatureCollection',
      features: polygonData
        .filter(item => item.boundaries && Array.isArray(item.boundaries) && item.boundaries.length >= 3)
        .map(item => ({
          type: 'Feature',
          properties: {
            ...this._extractProperties(item),
            value: item.value || 0
          },
          geometry: {
            type: 'Polygon',
            coordinates: [item.boundaries.map(point => [point[1], point[0]])] // Leaflet GeoJSON 좌표계 변환 [lng, lat]
          }
        }))
    };
  }
  
  /**
   * 항목의 속성 추출
   * @private
   * @param {Object} item 데이터 항목
   * @returns {Object} 추출된 속성 객체
   */
  _extractProperties(item) {
    const properties = { ...item };
    
    // 좌표 및 경계 데이터는 제외
    delete properties.latitude;
    delete properties.longitude;
    delete properties.boundaries;
    
    return properties;
  }
  
  /**
   * 항목 제목 생성
   * @private
   * @param {Object} item 데이터 항목
   * @returns {string} 제목
   */
  _getTitle(item) {
    return item.title || item.name || `PNU: ${item.code || item.id || ''}`;
  }
  
  /**
   * 팝업 내용 생성
   * @private
   * @param {Object} item 데이터 항목
   * @returns {string} HTML 팝업 내용
   */
  _createPopupContent(item) {
    return PopupUtils.createPopupContent(item);
  }
  
  /**
   * 마커 옵션 생성
   * @private
   * @param {Object} item 데이터 항목
   * @returns {Object} 마커 옵션
   */
  _getMarkerOptions(item) {
    // 중요도나 특성에 따라 다른 마커 스타일 적용 가능
    return {
      icon: this._getMarkerIcon(item),
      title: this._getTitle(item),
      riseOnHover: true
    };
  }
  
  /**
   * 마커 아이콘 생성
   * @private
   * @param {Object} item 데이터 항목
   * @returns {Object} 마커 아이콘 설정
   */
  _getMarkerIcon(item) {
    // 사용자 정의 아이콘 또는 기본 아이콘
    const color = this._getMarkerColorByImportance(item.importance || 1);
    
    // Leaflet 적절한 아이콘 형식으로 반환
    // LeafletProvider에서 직접 L.divIcon을 생성할 수 있도록 설정 전달
    return {
      iconUrl: null, // 내장 아이콘을 사용하지 않으므로 null
      iconSize: [10, 10],
      iconAnchor: [5, 5],
      className: 'custom-marker-container',
      html: `<div class="custom-marker" style="background-color: ${color};"></div>`,
      type: 'div' // divIcon 사용 표시
    };
  }
  
  /**
   * 중요도에 따른 마커 색상 결정
   * @private
   * @param {number} importance 중요도 (1-10)
   * @returns {string} 색상 코드
   */
  _getMarkerColorByImportance(importance) {
    // 낮은 중요도(1)는 초록색, 높은 중요도(10)는 빨간색으로 그라데이션
    const colors = [
      '#4CAF50', // 초록색 (낮은 중요도)
      '#8BC34A',
      '#CDDC39',
      '#FFEB3B',
      '#FFC107',
      '#FF9800',
      '#FF5722',
      '#F44336',
      '#E91E63',
      '#D32F2F'  // 빨간색 (높은 중요도)
    ];
    
    // 중요도 값을 0-9 범위로 맞춤
    const index = Math.max(0, Math.min(9, Math.floor(importance) - 1));
    return colors[index];
  }
  
  /**
   * 폴리곤 옵션 생성
   * @private
   * @param {Object} item 데이터 항목
   * @returns {Object} 폴리곤 옵션
   */
  _getPolygonOptions(item) {
    const color = this._getPolygonColor(item);
    
    return {
      color: color,
      fillColor: color,
      fillOpacity: 0.5,
      weight: 2
    };
  }
  
  /**
   * 데이터 항목에 따른 폴리곤 색상 결정
   * @private
   * @param {Object} item 데이터 항목
   * @returns {string} 색상 코드
   */
  _getPolygonColor(item) {
    // 유형별로 다른 색상 지정 가능
    // 예: 지목에 따라 다른 색상 지정
    const typeColors = {
      '대지': '#FF5733',
      '전': '#33FF57',
      '답': '#3357FF',
      '임야': '#57FF33',
      '도로': '#AAAAAA',
      // 기타 지목에 따른 색상...
    };
    
    return typeColors[item.type] || '#3388ff'; // 기본 색상
  }
} 