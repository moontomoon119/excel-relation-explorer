/**
 * OpenLayers 맵 피처 변환 전략
 * OpenLayers 맵에 사용할 수 있는 마커, 폴리곤 등의 피처로 데이터를 변환합니다.
 */

import PopupUtils from '../utils/PopupUtils.js';

export default class OpenLayersFeatureStrategy {
  /**
   * OpenLayers 마커로 변환
   * @param {Array<Object>} dataObjects 데이터 객체 배열
   * @returns {Array<Object>} OpenLayers 마커 형식 객체 배열
   */
  toMarkers(dataObjects) {
    if (!Array.isArray(dataObjects)) {
      return [];
    }
    
    const result = dataObjects
      .filter(item => item.latitude && item.longitude)
      .map(item => ({
        position: [item.latitude, item.longitude], // 위도, 경도 순서로 저장 (나중에 OpenLayersProvider에서 바로 사용할 수 있도록)
        projection: 'EPSG:4326',
        title: this._getTitle(item),
        popup: this._createPopupContent(item),
        options: this._getMarkerOptions(item)
      }));
    
    // 디버깅을 위한 로그
    console.log(`OpenLayers 마커 변환: ${dataObjects.length}개 중 ${result.length}개 생성됨`);
    if (result.length > 0) {
      console.log('첫 번째 마커 샘플:', result[0]);
    }
    
    return result;
  }
  
  /**
   * OpenLayers 폴리곤으로 변환
   * @param {Array<Object>} dataObjects 데이터 객체 배열
   * @returns {Array<Object>} OpenLayers 폴리곤 형식 객체 배열
   */
  toPolygons(dataObjects) {
    if (!Array.isArray(dataObjects)) {
      return [];
    }
    
    return dataObjects
      .filter(item => item.boundaries && Array.isArray(item.boundaries) && item.boundaries.length >= 3)
      .map(item => ({
        // OpenLayers에서는 경도, 위도 순서로 좌표 지정
        positions: item.boundaries.map(point => [point[1], point[0]]),
        projection: 'EPSG:4326',
        popup: this._createPopupContent(item),
        options: this._getPolygonOptions(item)
      }));
  }
  
  /**
   * 다양한 OpenLayers 레이어 유형으로 변환
   * @param {string} layerType 레이어 유형
   * @param {Array<Object>} dataObjects 데이터 객체 배열
   * @param {Object} options 옵션
   * @returns {Object} OpenLayers 레이어 설정 객체
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
        throw new Error(`지원하지 않는 OpenLayers 레이어 유형: ${layerType}`);
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
    // OpenLayers 히트맵 레이어는 Vector 소스의 피처로 표현됨
    const features = dataObjects
      .filter(item => item.latitude && item.longitude)
      .map(item => {
        return {
          type: 'Point',
          coordinates: [item.longitude, item.latitude],
          weight: item.intensity || options.defaultIntensity || 1
        };
      });
    
    return {
      type: 'heatmap',
      features: features,
      options: {
        blur: options.blur || 15,
        radius: options.radius || 10,
        gradient: options.gradient || ['rgba(0, 0, 255, 0)', 'rgba(0, 0, 255, 1)']
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
        distance: options.distance || 40,
        minDistance: options.minDistance || 20,
        // OpenLayers 클러스터 스타일링 옵션
        style: options.style || this._getDefaultClusterStyle()
      }
    };
  }
  
  /**
   * 기본 클러스터 스타일 구성
   * @private
   * @returns {Function} 스타일 함수
   */
  _getDefaultClusterStyle() {
    return (feature) => {
      const size = feature.get('features').length;
      
      // 크기에 따른 반경 설정
      let radius = 10;
      if (size > 10) radius = 15;
      if (size > 100) radius = 20;
      
      // 색상 설정
      let fillColor = 'rgba(51, 153, 204, 0.8)';
      if (size > 10) fillColor = 'rgba(255, 153, 0, 0.8)';
      if (size > 100) fillColor = 'rgba(204, 51, 0, 0.8)';
      
      return {
        image: {
          type: 'Circle',
          radius: radius,
          fill: {
            color: fillColor
          },
          stroke: {
            color: '#fff',
            width: 2
          }
        },
        text: {
          text: size.toString(),
          fill: {
            color: '#fff'
          },
          font: 'bold 12px Arial'
        }
      };
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
        valueFunction: options.valueFunction,
        colors: options.colors || ['#FFEDA0', '#FEB24C', '#FC4E2A', '#E31A1C', '#BD0026'],
        style: options.style || this._getDefaultChoroplethStyle(options)
      }
    };
  }
  
  /**
   * 기본 단계구분도 스타일 구성
   * @private
   * @param {Object} options 옵션
   * @returns {Function} 스타일 함수
   */
  _getDefaultChoroplethStyle(options) {
    const valueProperty = options.valueProperty || 'value';
    const colors = options.colors || ['#FFEDA0', '#FEB24C', '#FC4E2A', '#E31A1C', '#BD0026'];
    
    return (feature) => {
      // 값 범위에 따른 색상 결정
      const value = feature.get(valueProperty) || 0;
      
      // 범례 단계를 기준으로 색상 인덱스 계산
      // 이 부분은 데이터의 특성에 맞게 조정 필요
      const index = Math.min(colors.length - 1, Math.floor(value / 20));
      
      return {
        fill: {
          color: colors[index]
        },
        stroke: {
          color: '#fff',
          width: 1
        }
      };
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
            coordinates: [item.boundaries.map(point => [point[1], point[0]])] // OpenLayers GeoJSON 좌표계 [lng, lat]
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
    // OpenLayers 마커 스타일 옵션
    return {
      image: this._getMarkerStyle(item)
    };
  }
  
  /**
   * 마커 스타일 생성
   * @private
   * @param {Object} item 데이터 항목
   * @returns {Object} OpenLayers 마커 스타일
   */
  _getMarkerStyle(item) {
    const color = this._getMarkerColorByImportance(item.importance || 1);
    
    return {
      type: 'Circle',
      radius: 7,
      fill: {
        color: color
      },
      stroke: {
        color: '#fff',
        width: 2
      }
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
   * @returns {Object} OpenLayers 폴리곤 스타일 옵션
   */
  _getPolygonOptions(item) {
    const color = this._getPolygonColor(item);
    
    return {
      stroke: {
        color: color,
        width: 2
      },
      fill: {
        color: this._hexToRgba(color, 0.5) // 투명도 50%
      }
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
  
  /**
   * HEX 색상을 RGBA로 변환
   * @private
   * @param {string} hex HEX 색상 코드
   * @param {number} alpha 투명도 (0-1)
   * @returns {string} RGBA 색상 문자열
   */
  _hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
} 