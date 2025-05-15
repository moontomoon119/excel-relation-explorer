/**
 * MapLayerManager.js
 * 맵 레이어 관리 모듈
 * 지도 레이어(폴리곤, 마커, 그리드 등)를 관리하는 역할을 담당합니다.
 */

import { MAP_CONFIG } from '../../core/config.js';
import MapFactory from './MapFactory.js';

// Leaflet 객체 참조 가져오기 (전역 스코프에서 가져오거나 동적으로 가져오기)
const getLeaflet = () => {
  if (typeof window !== 'undefined' && window.L) {
    return window.L;
  }
  return null;
};

export default class MapLayerManager {
  /**
   * MapLayerManager 생성자
   * @param {Object} mapProvider 맵 프로바이더 객체 (Leaflet 또는 OpenLayers 인스턴스)
   * @param {string} providerType 맵 프로바이더 타입 ('leaflet' 또는 'openlayers')
   */
  constructor(mapProvider, providerType) {
    this.mapProvider = mapProvider;
    this.providerType = providerType;
    this.analysisData = new Map(); // PNU를 키로 하는 Map 객체
    this.colorPalette = [
      '#3388ff', // 파랑
      '#ff3333', // 빨강
      '#33cc33', // 녹색
      '#ff9900', // 주황
      '#9933ff', // 보라
      '#ff33cc', // 분홍
      '#00ccff', // 하늘색
      '#ffcc00', // 노랑
      '#cc6600', // 갈색
      '#00ff99', // 민트
      '#66ccff', // 연한 파랑
      '#ff6699', // 연한 분홍
      '#339933', // 어두운 녹색
      '#9966ff', // 연한 보라
      '#ff6600'  // 주황빨강
    ];
    
    // Leaflet 레이어 그룹 초기화 (PNU별로 분석 레이어를 그룹화)
    this.analysisLayerGroups = new Map();
    
    // 모든 분석 레이어를 포함하는 그룹 초기화
    this.initLayerGroups();
  }
  
  /**
   * 레이어 그룹 초기화
   */
  initLayerGroups() {
    if (this.providerType === MapFactory.PROVIDER_TYPES.LEAFLET) {
      const L = getLeaflet();
      if (L && this.mapProvider.leafletMap) {
        // 모든 분석 레이어를 포함할 메인 그룹
        this.mainLayerGroup = L.layerGroup().addTo(this.mapProvider.leafletMap);
        console.log('분석 레이어 그룹 초기화 완료');
      }
    }
  }
  
  /**
   * 특정 PNU의 레이어 그룹 가져오기 또는 생성하기
   * @param {string} pnu PNU 코드
   * @returns {Object} Leaflet 레이어 그룹
   */
  getOrCreateLayerGroup(pnu) {
    // Leaflet 사용 시에만 해당
    if (this.providerType !== MapFactory.PROVIDER_TYPES.LEAFLET) {
      return null;
    }
    
    const L = getLeaflet();
    if (!L || !this.mapProvider.leafletMap || !this.mainLayerGroup) {
      console.warn('Leaflet 라이브러리 또는 맵이 초기화되지 않았습니다.');
      return null;
    }
    
    // 해당 PNU의 레이어 그룹이 없으면 생성
    if (!this.analysisLayerGroups.has(pnu)) {
      const layerGroup = L.layerGroup();
      this.analysisLayerGroups.set(pnu, layerGroup);
      // 메인 그룹에 추가
      this.mainLayerGroup.addLayer(layerGroup);
      console.log(`PNU ${pnu}의 레이어 그룹 생성됨`);
    }
    
    return this.analysisLayerGroups.get(pnu);
  }
  
  /**
   * 분석 결과 렌더링
   * @param {Object} data 분석 결과 데이터
   */
  renderAnalysisResults(data) {
    console.log('분석 결과 맵 렌더링:', data);
    
    if (!this.mapProvider || !this.mapProvider.initialize) {
      console.warn('맵이 초기화되지 않아 분석 결과를 렌더링할 수 없습니다.');
      return;
    }
    
    // 기존 분석 결과 저장
    if (data.pnu && (data.polygon || data.gridPoints)) {
      // 기존 데이터가 있는 경우 병합
      const existingData = this.analysisData.get(data.pnu) || {};
      
      this.analysisData.set(data.pnu, {
        polygon: data.polygon || existingData.polygon,
        gridPoints: data.gridPoints || existingData.gridPoints,
        timestamp: new Date(),
        isActive: data.isActive !== undefined ? data.isActive : true // 활성화 상태 저장 (기본값: true)
      });
      
      console.log(`PNU ${data.pnu}의 분석 결과 저장됨, 총 ${this.analysisData.size}개 PNU 데이터 보유`);
      
      // 새로운 렌더링 방식: PNU별 레이어 그룹 관리
      if (this.providerType === MapFactory.PROVIDER_TYPES.LEAFLET) {
        // 해당 PNU의 레이어 그룹 초기화
        this.hidePnuLayer(data.pnu);
        
        // 활성화된 상태인 경우에만 그리기
        if (this.analysisData.get(data.pnu).isActive) {
          this.drawSingleAnalysisResult(data.pnu, this.analysisData.get(data.pnu));
        }
        
        // 모든 활성화된 PNU가 보이게 맵 뷰 조정
        this.fitMapToActiveData();
      } else {
        // 다른 프로바이더의 경우 기존 방식 유지
        this.redrawActiveAnalysisData();
      }
    } else {
      // 활성화된 분석 결과만 다시 그리기
      this.redrawActiveAnalysisData();
    }
  }
  
  /**
   * 활성화된 PNU에 맞게 맵 뷰 조정
   */
  fitMapToActiveData() {
    if (!this.mapProvider || typeof this.mapProvider.fitToData !== 'function') return;
    
    // 활성화된 PNU가 있는지 확인
    const activeCount = Array.from(this.analysisData.values()).filter(data => data.isActive).length;
    
    if (activeCount > 0) {
      this.mapProvider.fitToData();
    }
  }
  
  /**
   * 분석 결과 레이어만 삭제
   */
  clearAnalysisLayers() {
    if (!this.mapProvider) return;
    
    // 디버깅 로그 추가
    console.log('분석 레이어 초기화 시작');
    
    // 새로운 레이어 그룹 관리 방식 적용
    if (this.providerType === MapFactory.PROVIDER_TYPES.LEAFLET && this.mainLayerGroup) {
      try {
        // 메인 레이어 그룹 초기화
        this.mainLayerGroup.clearLayers();
        
        // 개별 PNU 레이어 그룹 초기화
        this.analysisLayerGroups.clear();
        
        console.log('메인 레이어 그룹 초기화 완료');
        
        // 레이어 그룹 재설정
        this.initLayerGroups();
      } catch (error) {
        console.error('레이어 그룹 초기화 중 오류 발생:', error);
      }
    } else {
      // 기존 방식 (개별 레이어 제거)
      if (this.providerType === MapFactory.PROVIDER_TYPES.LEAFLET && this.mapProvider.leafletMap) {
        let removedCount = 0;
        // 분석 폴리곤만 제거
        this.mapProvider.leafletMap.eachLayer(layer => {
          if (layer.options && 
              layer.options.className && 
              (layer.options.className.includes('analysis-polygon') || 
               layer.options.className.includes('analysis-grid-point'))
             ) {
            try {
              layer.remove();
              removedCount++;
            } catch (error) {
              console.error('레이어 제거 중 오류 발생:', error);
            }
          }
        });
        console.log(`${removedCount}개의 분석 레이어 제거됨`);
      } else if (this.providerType === MapFactory.PROVIDER_TYPES.OPENLAYERS) {
        // OpenLayers의 경우 비슷한 방식으로 처리
        if (this.mapProvider.map) {
          // OpenLayers 특화 코드 필요 시 구현
        }
      }
    }
    
    console.log('분석 레이어 초기화 완료');
  }
  
  /**
   * 모든 분석 결과 다시 그리기
   */
  redrawAllAnalysisData() {
    console.log('모든 분석 결과 다시 그리기');
    
    // 모든 분석 레이어 지우기
    this.clearAnalysisLayers();
    
    // 각 PNU의 분석 결과 렌더링
    for (const [pnu, analysisResult] of this.analysisData.entries()) {
      this.drawSingleAnalysisResult(pnu, analysisResult);
    }
    
    // 맵 뷰 조정
    this.fitMapToActiveData();
  }
  
  /**
   * 활성화된 분석 결과만 다시 그리기
   */
  redrawActiveAnalysisData() {
    console.log('활성화된 분석 결과 다시 그리기');
    
    // 활성화된 PNU 목록 로깅
    const activePnus = Array.from(this.analysisData.entries())
      .filter(([_, data]) => data.isActive)
      .map(([pnu, _]) => pnu);
    console.log('활성화된 PNU 목록:', activePnus);
    
    if (activePnus.length === 0) {
      console.log('활성화된 PNU가 없음, 그리기 중단');
      return;
    }
    
    // 모든 분석 레이어 지우기
    this.clearAnalysisLayers();
    
    // 활성화된 PNU의 분석 결과만 렌더링
    let activeCount = 0;
    for (const [pnu, analysisResult] of this.analysisData.entries()) {
      if (analysisResult.isActive) {
        console.log(`PNU ${pnu} 그리기 시작`);
        
        // 데이터 로깅
        const hasPolygon = !!(analysisResult.polygon && 
                             analysisResult.polygon.coordinates && 
                             analysisResult.polygon.coordinates.length > 0);
        
        const gridPointsCount = analysisResult.gridPoints ? analysisResult.gridPoints.length : 0;
        
        console.log(`PNU ${pnu} 데이터: polygon=${hasPolygon}, gridPoints=${gridPointsCount}개`);
        
        // 그리기 실행
        this.drawSingleAnalysisResult(pnu, analysisResult);
        activeCount++;
        
        console.log(`PNU ${pnu} 그리기 완료`);
      }
    }
    
    console.log(`${activeCount}개의 활성화된 분석 결과 렌더링 완료`);
    
    // 맵 뷰 조정
    this.fitMapToActiveData();
  }
  
  /**
   * 단일 PNU의 분석 결과 그리기
   * @param {string} pnu PNU 코드
   * @param {Object} analysisResult 분석 결과 객체
   */
  drawSingleAnalysisResult(pnu, analysisResult) {
    if (!analysisResult) {
      console.warn(`PNU ${pnu}에 대한 분석 결과 데이터가 없음`);
      return;
    }
    
    // 레이어 그룹 가져오기 또는 생성
    const layerGroup = this.getOrCreateLayerGroup(pnu);
    
    // 색상 할당 (PNU별로 일관된 색상 사용)
    const colorIndex = this.getPnuColorIndex(pnu);
    const color = this.colorPalette[colorIndex % this.colorPalette.length];
    
    // Leaflet 사용 시 레이어 그룹에 직접 추가
    if (layerGroup && this.providerType === MapFactory.PROVIDER_TYPES.LEAFLET) {
      const L = getLeaflet();
      if (!L) {
        console.warn('Leaflet 라이브러리를 찾을 수 없습니다.');
        return;
      }
      
      // 1. 폴리곤 렌더링
      if (analysisResult.polygon && analysisResult.polygon.coordinates && analysisResult.polygon.coordinates.length > 0) {
        try {
          // 폴리곤 데이터 검증
          if (!Array.isArray(analysisResult.polygon.coordinates[0])) {
            console.error(`PNU ${pnu}의 폴리곤 데이터 형식이 잘못됨`, analysisResult.polygon.coordinates);
            return;
          }
          
          // Leaflet 폴리곤 생성 및 그룹에 추가
          const coordinates = analysisResult.polygon.coordinates[0].map(coord => [coord[1], coord[0]]);
          const polygon = L.polygon(coordinates, {
            color: color,
            weight: 3,
            opacity: 0.5,
            fillColor: color,
            fillOpacity: 0.2,
            className: `analysis-polygon analysis-pnu-${pnu}`
          }).bindPopup(`<div><strong>PNU:</strong> ${pnu}</div><div><strong>아이소크론맵</strong></div>`);
          
          // 레이어 그룹에 추가
          layerGroup.addLayer(polygon);
          
          console.log(`PNU ${pnu}의 폴리곤 추가 완료`);
        } catch (error) {
          console.error(`PNU ${pnu}의 폴리곤 데이터 처리 중 오류 발생:`, error);
        }
      } else {
        console.log(`PNU ${pnu}에 유효한 폴리곤 데이터 없음`);
      }
      
      // 2. 그리드 포인트 렌더링
      if (analysisResult.gridPoints && analysisResult.gridPoints.length > 0) {
        try {
          this.renderGridPointsToGroup(pnu, analysisResult.gridPoints, color, layerGroup);
        } catch (error) {
          console.error(`PNU ${pnu}의 그리드 포인트 처리 중 오류 발생:`, error);
        }
      }
    } else {
      // 다른 프로바이더의 경우 기존 방식으로 그리기
      try {
        // 1. 폴리곤 렌더링
        if (analysisResult.polygon && analysisResult.polygon.coordinates && analysisResult.polygon.coordinates.length > 0) {
          const polygonFeature = {
            positions: analysisResult.polygon.coordinates[0].map(coord => [coord[1], coord[0]]),
            options: {
              color: color,
              weight: 3,
              opacity: 0.5,
              fillColor: color,
              fillOpacity: 0.2,
              className: `analysis-polygon analysis-pnu-${pnu}`
            },
            popup: `<div><strong>PNU:</strong> ${pnu}</div><div><strong>아이소크론맵</strong></div>`
          };
          
          this.mapProvider.addPolygons([polygonFeature]);
        }
        
        // 2. 그리드 포인트 렌더링
        this.renderGridPoints(pnu, analysisResult.gridPoints, color);
      } catch (error) {
        console.error(`PNU ${pnu} 데이터 그리기 중 오류 발생:`, error);
      }
    }
  }
  
  /**
   * 그리드 포인트를 레이어 그룹에 추가
   * @param {string} pnu PNU 코드
   * @param {Array} gridPoints 그리드 포인트 데이터 배열
   * @param {string} color 색상
   * @param {Object} layerGroup Leaflet 레이어 그룹
   */
  renderGridPointsToGroup(pnu, gridPoints, color, layerGroup) {
    if (!gridPoints || gridPoints.length === 0 || !layerGroup) return;
    
    const L = getLeaflet();
    if (!L) return;
    
    // 그리드 포인트 값의 최대/최소값 계산 (스케일링용)
    const validPoints = gridPoints.filter(p => p.value !== null && p.value !== undefined);
    let minValue = Infinity;
    let maxValue = -Infinity;
    
    validPoints.forEach(point => {
      const value = parseFloat(point.value);
      if (!isNaN(value)) {
        minValue = Math.min(minValue, value);
        maxValue = Math.max(maxValue, value);
      }
    });
    
    // 최소/최대값이 동일한 경우 처리
    if (minValue === maxValue) {
      minValue = maxValue - 1; // 나눗셈 오류 방지
    }
    
    // 그리드 포인트 마커 생성
    gridPoints.forEach(point => {
      // 값이 있는 포인트만 처리
      const hasValue = point.value !== null && point.value !== undefined;
      let radius = 8; // 기본 반지름
      let fillOpacity = 0.8; // 기본 투명도
      
      // 값에 따라 반지름과 투명도 계산
      if (hasValue) {
        const value = parseFloat(point.value);
        if (!isNaN(value)) {
          // 값의 범위에 따라 8~20px 크기로 스케일링
          const normalizedValue = (value - minValue) / (maxValue - minValue);
          radius = 8 + normalizedValue * 12; // 8~20px
          fillOpacity = 0.4 + normalizedValue * 0.6; // 0.4~1.0
        }
      }
      
      // 그리드 포인트 서클 마커 생성
      const circleMarker = L.circleMarker([point.lat, point.lon], {
        radius: radius,
        color: '#000',
        weight: 1,
        opacity: 1,
        fillColor: hasValue ? color : '#aaaaaa',
        fillOpacity: fillOpacity,
        className: `analysis-grid-point analysis-pnu-${pnu}`
      }).bindPopup(`
        <div>
          <strong>PNU:</strong> ${pnu}<br>
          <strong>좌표:</strong> ${point.lat}, ${point.lon}<br>
          <strong>값:</strong> ${hasValue ? point.value : '없음'}
        </div>
      `);
      
      // 레이어 그룹에 추가
      layerGroup.addLayer(circleMarker);
    });
    
    console.log(`PNU ${pnu}의 그리드 포인트 ${gridPoints.length}개 추가 완료`);
  }
  
  /**
   * 그리드 포인트 렌더링 (기존 방식)
   * @param {string} pnu PNU 코드
   * @param {Array} gridPoints 그리드 포인트 데이터 배열
   * @param {string} color 색상
   */
  renderGridPoints(pnu, gridPoints, color) {
    if (!gridPoints || gridPoints.length === 0) return;
    
    // 그리드 포인트 값의 최대/최소값 계산 (스케일링용)
    const validPoints = gridPoints.filter(p => p.value !== null && p.value !== undefined);
    let minValue = Infinity;
    let maxValue = -Infinity;
    
    validPoints.forEach(point => {
      const value = parseFloat(point.value);
      if (!isNaN(value)) {
        minValue = Math.min(minValue, value);
        maxValue = Math.max(maxValue, value);
      }
    });
    
    // 최소/최대값이 동일한 경우 처리
    if (minValue === maxValue) {
      minValue = maxValue - 1; // 나눗셈 오류 방지
    }
    
    // 그리드 포인트 마커 생성
    const markers = gridPoints.map(point => {
      // 값이 있는 포인트만 처리
      const hasValue = point.value !== null && point.value !== undefined;
      let radius = 8; // 기본 반지름
      let fillOpacity = 0.8; // 기본 투명도
      
      // 값에 따라 반지름과 투명도 계산
      if (hasValue) {
        const value = parseFloat(point.value);
        if (!isNaN(value)) {
          // 값의 범위에 따라 8~20px 크기로 스케일링
          const normalizedValue = (value - minValue) / (maxValue - minValue);
          radius = 8 + normalizedValue * 12; // 8~20px
          fillOpacity = 0.4 + normalizedValue * 0.6; // 0.4~1.0
        }
      }
      
      return {
        position: [point.lat, point.lon], // [lat, lng] 형식
        options: {
          radius: radius,
          color: '#000',
          weight: 1,
          opacity: 1,
          fillColor: hasValue ? color : '#aaaaaa',
          fillOpacity: fillOpacity,
          className: `analysis-grid-point analysis-pnu-${pnu}` // CSS 클래스 추가
        },
        popup: `
          <div>
            <strong>PNU:</strong> ${pnu}<br>
            <strong>좌표:</strong> ${point.lat}, ${point.lon}<br>
            <strong>값:</strong> ${hasValue ? point.value : '없음'}
          </div>
        `
      };
    });
    
    this.mapProvider.addMarkers(markers);
  }
  
  /**
   * 특정 PNU의 분석 결과 제거
   * @param {string} pnu 제거할 PNU 코드
   */
  removeAnalysisData(pnu) {
    if (!pnu || !this.analysisData.has(pnu)) return;
    
    // 데이터에서 제거
    this.analysisData.delete(pnu);
    
    // 맵에서 해당 PNU 레이어만 제거
    this.hidePnuLayer(pnu);
    
    console.log(`PNU ${pnu}의 분석 결과 삭제됨, 남은 데이터: ${this.analysisData.size}개`);
    
    // 맵 뷰 조정 (남은 레이어에 맞게)
    this.fitMapToActiveData();
  }
  
  /**
   * 특정 PNU의 분석 레이어 숨기기
   * @param {string} pnu 숨길 PNU 코드
   */
  hidePnuLayer(pnu) {
    // 레이어 그룹 방식으로 처리
    if (this.analysisLayerGroups && this.analysisLayerGroups.has(pnu)) {
      try {
        const layerGroup = this.analysisLayerGroups.get(pnu);
        
        // 메인 그룹에서 제거
        if (this.mainLayerGroup) {
          this.mainLayerGroup.removeLayer(layerGroup);
        }
        
        // 저장된 그룹 제거
        this.analysisLayerGroups.delete(pnu);
        
        console.log(`PNU ${pnu}의 레이어 그룹 제거됨`);
      } catch (error) {
        console.error(`PNU ${pnu}의 레이어 그룹 제거 중 오류 발생:`, error);
      }
    } else {
      // 기존 방식 (개별 레이어 제거)
      if (this.providerType === MapFactory.PROVIDER_TYPES.LEAFLET && this.mapProvider.leafletMap) {
        let removedCount = 0;
        this.mapProvider.leafletMap.eachLayer(layer => {
          if (layer.options && layer.options.className && 
              layer.options.className.includes(`analysis-pnu-${pnu}`)) {
            try {
              layer.remove();
              removedCount++;
            } catch (error) {
              console.error(`PNU ${pnu} 레이어 제거 중 오류:`, error);
            }
          }
        });
        console.log(`PNU ${pnu}의 레이어 ${removedCount}개 제거됨`);
      }
    }
  }
  
  /**
   * 특정 PNU의 분석 레이어 숨기기 (인터페이스용 함수 이름)
   * @param {string} pnu 숨길 PNU 코드
   */
  hideAnalysisLayer(pnu) {
    this.hidePnuLayer(pnu);
  }
  
  /**
   * 특정 PNU의 분석 레이어 표시하기
   * @param {string} pnu 표시할 PNU 코드
   */
  showAnalysisLayer(pnu) {
    if (!pnu || !this.analysisData.has(pnu)) return;
    
    // 데이터 가져오기
    const analysisResult = this.analysisData.get(pnu);
    
    // 레이어 그리기
    this.drawSingleAnalysisResult(pnu, analysisResult);
    
    console.log(`PNU ${pnu}의 레이어 표시됨`);
  }
  
  /**
   * PNU 활성화 상태 업데이트
   * @param {string} pnu PNU 코드
   * @param {boolean} isActive 활성화 상태
   */
  updateAnalysisDataActiveState(pnu, isActive) {
    if (!pnu || !this.analysisData.has(pnu)) return;
    
    // 분석 데이터 가져오기
    const analysisData = this.analysisData.get(pnu);
    
    // 활성화 상태 업데이트
    analysisData.isActive = isActive;
    
    // 데이터 업데이트
    this.analysisData.set(pnu, analysisData);
    
    console.log(`PNU ${pnu} 활성화 상태 변경: ${isActive}`);
  }
  
  /**
   * 특정 PNU에 대한 분석 데이터 존재 여부 확인
   * @param {string} pnu 확인할 PNU 코드
   * @returns {boolean} 데이터 존재 여부
   */
  hasAnalysisData(pnu) {
    return this.analysisData.has(pnu);
  }
  
  /**
   * 이전 PNU 데이터 마커와 폴리곤 제거 (분석 결과는 유지)
   */
  clearPnuLayers() {
    if (!this.mapProvider) return;
    
    console.log('기본 PNU 레이어 제거 (분석 레이어는 유지)');
    
    // 모든 마커와 폴리곤 제거 (분석 레이어 제외)
    if (this.providerType === MapFactory.PROVIDER_TYPES.LEAFLET && this.mapProvider.leafletMap) {
      const L = getLeaflet();
      if (!L) {
        console.warn('Leaflet 라이브러리를 찾을 수 없습니다.');
        this.mapProvider.clearMarkers();
        this.mapProvider.clearPolygons();
        return;
      }
      
      this.mapProvider.leafletMap.eachLayer(layer => {
        // 분석 레이어가 아닌 경우만 제거
        if (!(layer.options && 
            layer.options.className && 
            (layer.options.className.includes('analysis-polygon') || 
             layer.options.className.includes('analysis-grid-point'))
           )) {
          // 기본 마커 또는 폴리곤인 경우만 제거
          if (layer instanceof L.Marker || layer instanceof L.Polygon) {
            try {
              layer.remove();
            } catch (error) {
              console.error('레이어 제거 중 오류 발생:', error);
            }
          }
        }
      });
    } else {
      // 다른 프로바이더의 경우 기존 메서드 사용
      this.mapProvider.clearMarkers();
      this.mapProvider.clearPolygons();
    }
  }
  
  /**
   * 맵 뷰 조정 (데이터가 모두 보이도록)
   */
  fitMapToData() {
    if (this.mapProvider && typeof this.mapProvider.fitToData === 'function') {
      this.mapProvider.fitToData();
    }
  }
  
  /**
   * 모든 분석 결과 데이터 가져오기
   * @returns {Map} PNU를 키로 하는 분석 결과 데이터 맵
   */
  getAllAnalysisData() {
    return this.analysisData;
  }
  
  /**
   * 맵 프로바이더 변경 시 인스턴스 업데이트
   * @param {Object} mapProvider 새 맵 프로바이더 객체
   * @param {string} providerType 새 맵 프로바이더 타입
   */
  updateMapProvider(mapProvider, providerType) {
    this.mapProvider = mapProvider;
    this.providerType = providerType;
    
    // 레이어 그룹 초기화
    this.initLayerGroups();
  }
  
  /**
   * PNU별로 일관된 색상 인덱스를 생성하는 헬퍼 메서드
   * @param {string} pnu PNU 코드
   * @returns {number} 색상 인덱스
   */
  getPnuColorIndex(pnu) {
    // PNU 문자열을 숫자 해시로 변환
    let hash = 0;
    for (let i = 0; i < pnu.length; i++) {
      hash = ((hash << 5) - hash) + pnu.charCodeAt(i);
      hash |= 0; // 32비트 정수로 변환
    }
    
    // 음수가 나올 수 있으므로 항상 양수로 변환
    hash = Math.abs(hash);
    
    // 색상 팔레트 크기로 나눈 나머지 반환
    return hash % this.colorPalette.length;
  }
} 