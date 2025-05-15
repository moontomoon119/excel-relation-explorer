/**
 * OpenLayers 기반 맵 프로바이더 구현
 */

import MapProvider from '../MapProvider.js';
import OpenLayersLoader from '../services/OpenLayersLoader.js';

export default class OpenLayersProvider extends MapProvider {
  /**
   * OpenLayers 맵 프로바이더 생성
   * @param {HTMLElement} container 맵을 표시할 컨테이너 요소
   * @param {Object} config 맵 설정
   */
  constructor(container, config) {
    super(container, config);
    this.map = null;
    this.markerSource = null;
    this.markerLayer = null;
    this.polygonSource = null;
    this.polygonLayer = null;
    this.view = null;
    this.useGrayscale = false; // 그레이스케일 모드 기본값
    this.baseLayers = {}; // 기본 레이어 저장
  }
  
  /**
   * OpenLayers 맵 초기화
   * @returns {Promise<this>} 초기화 완료 시 해결되는 Promise
   */
  async initialize() {
    try {
      console.log('OpenLayers 맵 초기화 시작');
      
      // OpenLayers 라이브러리 동적 로드
      await OpenLayersLoader.load();
      
      if (!window.ol) {
        throw new Error('OpenLayers 라이브러리가 로드되지 않았습니다.');
      }
      
      console.log('OpenLayers 객체 확인됨, 맵 생성 시작');
      
      // 맵 뷰 생성
      this.view = new ol.View({
        center: ol.proj.fromLonLat([this.config.defaultCenter[1], this.config.defaultCenter[0]]), // [경도, 위도] -> [x, y]로 변환
        zoom: this.config.defaultZoom
      });
      
      // 마커 레이어 생성
      this.markerSource = new ol.source.Vector();
      this.markerLayer = new ol.layer.Vector({
        source: this.markerSource,
        style: new ol.style.Style({
          image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({ color: '#3388ff' }),
            stroke: new ol.style.Stroke({
              color: '#fff',
              width: 2
            })
          })
        })
      });
      
      // 폴리곤 레이어 생성
      this.polygonSource = new ol.source.Vector();
      this.polygonLayer = new ol.layer.Vector({
        source: this.polygonSource,
        style: new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: '#3388ff',
            width: 2
          }),
          fill: new ol.style.Fill({
            color: 'rgba(51, 136, 255, 0.2)'
          })
        })
      });
      
      // 기본 타일 레이어 생성 (CartoDB Voyager)
      this.baseLayers = {};
      
      // CartoDB 기본 컬러 레이어 (Voyager)
      this.baseLayers.standard = new ol.layer.Tile({
        source: new ol.source.XYZ({
          url: this.config.cartoDBOL?.voyager || 'https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
          attributions: this.config.attribution
        })
      });
      
      // CartoDB 라이트 레이어 (Positron)
      this.baseLayers.light = new ol.layer.Tile({
        visible: false,
        source: new ol.source.XYZ({
          url: this.config.cartoDBOL?.positron || 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
          attributions: this.config.attribution
        })
      });
      
      // CartoDB 다크 레이어
      this.baseLayers.dark = new ol.layer.Tile({
        visible: false,
        source: new ol.source.XYZ({
          url: this.config.cartoDBOL?.dark || 'https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
          attributions: this.config.attribution
        })
      });
      
      // CartoDB 라이트 (노 라벨)
      this.baseLayers.lightNoLabels = new ol.layer.Tile({
        visible: false,
        source: new ol.source.XYZ({
          url: this.config.cartoDBOL?.positronNoLabels || 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png',
          attributions: this.config.attribution
        })
      });
      
      // CartoDB 다크 (노 라벨)
      this.baseLayers.darkNoLabels = new ol.layer.Tile({
        visible: false,
        source: new ol.source.XYZ({
          url: this.config.cartoDBOL?.darkNoLabels || 'https://cartodb-basemaps-a.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png',
          attributions: this.config.attribution
        })
      });
      
      // 그레이스케일 필터용 CSS 스타일 추가
      const styleElement = document.createElement('style');
      styleElement.textContent = `
        .ol-grayscale-layer {
          filter: grayscale(100%);
          -webkit-filter: grayscale(100%);
        }
      `;
      document.head.appendChild(styleElement);
      
      // OSM 레이어 + 그레이스케일 필터
      this.baseLayers.grayscaleFilter = new ol.layer.Tile({
        visible: false,
        source: new ol.source.OSM({
          url: this.config.openlayersTileProvider || undefined,
          attributions: this.config.attribution
        }),
        className: 'ol-grayscale-layer'
      });
      
      // 맵 생성
      this.map = new ol.Map({
        target: this.container,
        layers: [
          this.baseLayers.standard,
          this.baseLayers.light,
          this.baseLayers.dark,
          this.baseLayers.lightNoLabels,
          this.baseLayers.darkNoLabels,
          this.baseLayers.grayscaleFilter,
          this.markerLayer,
          this.polygonLayer
        ],
        view: this.view,
        controls: this._createControls()
      });
      
      // 이벤트 리스너 설정 (필요한 경우)
      this._setupEventListeners();
      
      console.log('OpenLayers 맵 초기화 완료');
      return this;
    } catch (error) {
      console.error('OpenLayers 맵 초기화 실패:', error);
      throw error;
    }
  }
  
  /**
   * 레이어 전환 컨트롤 추가
   * @private
   * @returns {HTMLElement|null} 생성된 컨트롤 컨테이너 요소 또는 오류 시 null
   */
  _addLayerSwitchControl() {
    try {
      // 스타일 메뉴 컨테이너 생성
      const container = document.createElement('div');
      container.className = 'map-style-control-container';
      
      // 메인 버튼 생성
      const button = document.createElement('button');
      button.innerHTML = '지도 스타일';
      button.className = 'btn btn-sm btn-outline-secondary ol-style-toggle';
      button.title = '지도 스타일 변경';
      
      // 드롭다운 메뉴 생성
      const menu = document.createElement('div');
      menu.className = 'ol-style-menu';
      
      // 스타일 옵션들
      const options = [
        { id: 'standard', name: '벡터 지도 (기본)' },
        { id: 'light', name: '밝은 테마' },
        { id: 'dark', name: '어두운 테마' },
        { id: 'lightNoLabels', name: '밝은 배경 (라벨 없음)' },
        { id: 'darkNoLabels', name: '어두운 배경 (라벨 없음)' },
        { id: 'grayscaleFilter', name: '흑백 모드' }
      ];
      
      // 스타일 메뉴 옵션 생성
      options.forEach(option => {
        const item = document.createElement('a');
        item.className = 'ol-style-item';
        item.innerHTML = option.name;
        item.href = '#';
        item.setAttribute('data-style', option.id);
        
        // 현재 스타일이면 활성화
        if (option.id === 'standard') {
          item.classList.add('active');
        }
        
        // 클릭 이벤트
        item.addEventListener('click', (e) => {
          e.preventDefault();
          
          // 이전 활성 항목 비활성화
          menu.querySelectorAll('.ol-style-item').forEach(el => {
            el.classList.remove('active');
          });
          
          // 현재 항목 활성화
          item.classList.add('active');
          
          // 스타일 전환
          this.setMapStyle(option.id);
          
          // 토글 메뉴 버튼 텍스트 업데이트 (변경하지 않음)
          // button.innerHTML = `스타일: ${option.name}`;
          
          // 메뉴 닫기
          menu.classList.remove('open');
        });
        
        menu.appendChild(item);
      });
      
      // 버튼 클릭 시 메뉴 토글
      button.addEventListener('click', () => {
        menu.classList.toggle('open');
      });
      
      // 메뉴 외부 클릭 시 닫기
      document.addEventListener('click', (event) => {
        if (!container.contains(event.target)) {
          menu.classList.remove('open');
        }
      });
      
      // 스타일 추가
      const style = document.createElement('style');
      style.textContent = `
        .map-style-control-container {
          position: relative;
          display: inline-block;
        }
        .ol-style-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 85px;
          white-space: nowrap;
        }
        .ol-style-menu {
          display: none;
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 5px;
          background-color: white;
          border-radius: 4px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          overflow: hidden;
          min-width: max-content;
          width: auto;
          z-index: 1000;
        }
        .ol-style-menu.open {
          display: block;
        }
        .ol-style-item {
          display: block;
          padding: 8px 12px;
          cursor: pointer;
          font-size: 12px;
          text-decoration: none;
          color: #333;
          transition: background-color 0.2s;
          border-bottom: 1px solid #f0f0f0;
          white-space: nowrap;
        }
        .ol-style-item:hover {
          background-color: #f0f0f0;
        }
        .ol-style-item.active {
          background-color: #e6e6e6;
          font-weight: bold;
        }
      `;
      document.head.appendChild(style);
      
      // 구성 요소 조립
      container.appendChild(button);
      container.appendChild(menu);
      
      // 맵 컨테이너에 직접 추가하지 않고 반환
      return container;
    } catch (error) {
      console.error('스타일 컨트롤 추가 실패:', error);
      return null;
    }
  }
  
  /**
   * OpenLayers 컨트롤 생성
   * @private
   * @returns {Array} 생성된 컨트롤 배열
   */
  _createControls() {
    // OpenLayers 6.x 버전 구조 확인
    try {
      if (ol.control.defaults && typeof ol.control.defaults === 'function') {
        // 기본 형식 (6.x 초기 버전)
        return ol.control.defaults({ zoom: false });
      } else if (ol.control.defaults && ol.control.defaults.defaults && typeof ol.control.defaults.defaults === 'function') {
        // 수정된 형식 (6.9.0+)
        return ol.control.defaults.defaults({ zoom: false });
      } else {
        // 폴백: 빈 컨트롤 배열
        console.warn('ol.control.defaults를 찾을 수 없습니다. 빈 컨트롤 배열 사용');
        return [];
      }
    } catch (error) {
      console.error('컨트롤 생성 오류:', error);
      return []; // 안전한 폴백
    }
  }
  
  /**
   * 맵 스타일 설정 및 로컬 스토리지에 저장
   * @param {string} styleId 스타일 ID
   */
  setMapStyle(styleId) {
    // 모든 기본 레이어 숨기기
    Object.keys(this.baseLayers).forEach(key => {
      this.baseLayers[key].setVisible(false);
    });
    
    // 선택된 스타일 표시
    if (this.baseLayers[styleId]) {
      this.baseLayers[styleId].setVisible(true);
      this.useGrayscale = styleId !== 'standard';
      console.log(`맵 스타일 변경: ${styleId}`);
      
      // 로컬 스토리지에 스타일 저장
      try {
        if (window.localStorage && this.config.STORAGE_KEYS?.MAP_STYLE) {
          localStorage.setItem(this.config.STORAGE_KEYS.MAP_STYLE, styleId);
        }
      } catch (e) {
        console.warn('로컬 스토리지에 맵 스타일 저장 실패:', e);
      }
    } else {
      console.warn(`알 수 없는 스타일 ID: ${styleId}, 기본 스타일로 돌아갑니다.`);
      this.baseLayers.standard.setVisible(true);
      this.useGrayscale = false;
    }
  }
  
  /**
   * 그레이스케일 모드 전환
   * @deprecated 대신 setMapStyle() 사용
   */
  toggleGrayscale() {
    if (this.useGrayscale) {
      this.setMapStyle('standard');
    } else {
      this.setMapStyle('grayscaleFilter');
    }
  }
  
  /**
   * 맵 확대
   */
  zoomIn() {
    if (this.view) {
      const currentZoom = this.view.getZoom();
      this.view.animate({
        zoom: currentZoom + 1,
        duration: 250
      });
    }
  }
  
  /**
   * 맵 축소
   */
  zoomOut() {
    if (this.view) {
      const currentZoom = this.view.getZoom();
      this.view.animate({
        zoom: currentZoom - 1,
        duration: 250
      });
    }
  }
  
  /**
   * 맵 초기화 (원래 위치와 줌 레벨로 복귀)
   */
  resetView() {
    if (this.view) {
      this.view.animate({
        center: ol.proj.fromLonLat([this.config.defaultCenter[1], this.config.defaultCenter[0]]),
        zoom: this.config.defaultZoom,
        duration: 500
      });
    }
  }
  
  /**
   * 마커 추가
   * @param {Array<Object>} markers 표시할 마커 정보 배열
   */
  addMarkers(markers) {
    if (!this.map || !this.markerSource) return;
    
    this.clearMarkers();
    
    console.log(`OpenLayers 마커 추가: ${markers.length}개`);
    if (markers.length > 0) {
      console.log('첫 번째 마커 데이터:', markers[0]);
    }
    
    markers.forEach(markerData => {
      // 위도/경도 데이터 검증
      if (!markerData.position || markerData.position.length < 2) {
        console.warn('마커 위치 데이터 오류:', markerData);
        return;
      }
      
      // OpenLayers에서는 경도,위도 순서로 좌표 지정 (Leaflet과 반대)
      // fromLonLat 함수는 [경도, 위도] 순서로 입력해야 함
      const longitude = markerData.position[1];
      const latitude = markerData.position[0];
      
      if (isNaN(longitude) || isNaN(latitude)) {
        console.warn('마커 좌표가 숫자가 아님:', { longitude, latitude });
        return;
      }
      
      const coordinates = ol.proj.fromLonLat([longitude, latitude]);
      
      console.log('마커 좌표 변환:', [latitude, longitude], '->', coordinates);
      
      const feature = new ol.Feature({
        geometry: new ol.geom.Point(coordinates),
        name: markerData.title,
        data: markerData
      });
      
      // 개별 마커 스타일 지정 (옵션이 있는 경우)
      if (markerData.options && Object.keys(markerData.options).length > 0) {
        const style = this._createMarkerStyle(markerData.options);
        feature.setStyle(style);
      }
      
      this.markerSource.addFeature(feature);
    });
    
    // 팝업 기능 설정
    if (markers.length > 0 && markers.some(m => m.popup)) {
      this._setupPopups();
    }
  }
  
  /**
   * 마커 스타일 생성
   * @private
   * @param {Object} options 마커 옵션
   * @returns {ol.style.Style} OpenLayers 스타일 객체
   */
  _createMarkerStyle(options) {
    return new ol.style.Style({
      image: new ol.style.Circle({
        radius: options.radius || 7,
        fill: new ol.style.Fill({
          color: options.fillColor || '#3388ff'
        }),
        stroke: new ol.style.Stroke({
          color: options.strokeColor || '#fff',
          width: options.strokeWidth || 2
        })
      })
    });
  }
  
  /**
   * 팝업 기능 설정
   * @private
   */
  _setupPopups() {
    // 이미 팝업 설정이 되어있으면 중복 설정 방지
    if (this.popup) return;
    
    // 팝업 오버레이 생성
    this.popup = new ol.Overlay({
      element: document.createElement('div'),
      positioning: 'bottom-center',
      stopEvent: false,
      offset: [0, -10]
    });
    
    this.popup.getElement().className = 'ol-popup';
    this.map.addOverlay(this.popup);
    
    // 클릭 이벤트 핸들러 등록
    this.map.on('click', (evt) => {
      const feature = this.map.forEachFeatureAtPixel(evt.pixel, (feature) => feature);
      
      if (feature && feature.get('data') && feature.get('data').popup) {
        const coordinates = feature.getGeometry().getCoordinates();
        this.popup.getElement().innerHTML = feature.get('data').popup;
        this.popup.setPosition(coordinates);
      } else {
        this.popup.setPosition(undefined);
      }
    });
  }
  
  /**
   * 마커 제거
   */
  clearMarkers() {
    if (this.markerSource) {
      this.markerSource.clear();
    }
  }
  
  /**
   * 폴리곤 추가
   * @param {Array<Object>} polygons 표시할 폴리곤 정보 배열
   */
  addPolygons(polygons) {
    if (!this.map || !this.polygonSource) return;
    
    this.clearPolygons();
    
    polygons.forEach(polygonData => {
      // OpenLayers에서는 경도,위도 순서로 좌표 지정 (Leaflet과 반대)
      const coordinates = polygonData.positions.map(pos => 
        ol.proj.fromLonLat([pos[1], pos[0]])
      );
      
      const feature = new ol.Feature({
        geometry: new ol.geom.Polygon([coordinates]),
        name: polygonData.title,
        data: polygonData
      });
      
      // 개별 폴리곤 스타일 지정
      if (polygonData.options) {
        const style = this._createPolygonStyle(polygonData.options);
        feature.setStyle(style);
      }
      
      this.polygonSource.addFeature(feature);
    });
    
    // 팝업 기능 설정
    if (polygons.length > 0 && polygons.some(p => p.popup)) {
      this._setupPopups();
    }
  }
  
  /**
   * 폴리곤 스타일 생성
   * @private
   * @param {Object} options 폴리곤 옵션
   * @returns {ol.style.Style} OpenLayers 스타일 객체
   */
  _createPolygonStyle(options) {
    return new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: options.color || '#3388ff',
        width: options.weight || 2
      }),
      fill: new ol.style.Fill({
        color: options.fillColor 
          ? options.fillColor.replace(/rgb\(([^)]+)\)/, 'rgba($1,' + (options.fillOpacity || 0.2) + ')')
          : 'rgba(51, 136, 255, 0.2)'
      })
    });
  }
  
  /**
   * 폴리곤 제거
   */
  clearPolygons() {
    if (this.polygonSource) {
      this.polygonSource.clear();
    }
  }
  
  /**
   * 이벤트 리스너 설정
   * @private
   */
  _setupEventListeners() {
    // 이벤트 핸들러를 저장할 맵
    this.eventHandlers = new Map();
  }
  
  /**
   * 맵 이벤트 리스너 등록
   * @param {string} event 이벤트 이름
   * @param {Function} callback 콜백 함수
   */
  on(event, callback) {
    if (!this.map) return;
    
    // OpenLayers에서 사용하는 이벤트 이름으로 변환
    const olEvent = this._mapEventName(event);
    
    // 이벤트 핸들러 등록 및 저장
    const handler = this.map.on(olEvent, callback);
    
    // 이벤트 핸들러 저장
    if (!this.eventHandlers.has(event)) {
      this.eventHandlers.set(event, []);
    }
    this.eventHandlers.get(event).push(handler);
  }
  
  /**
   * 이벤트 이름 매핑 (Leaflet -> OpenLayers)
   * @private
   * @param {string} event Leaflet 스타일 이벤트 이름
   * @returns {string} OpenLayers 이벤트 이름
   */
  _mapEventName(event) {
    const eventMap = {
      'click': 'click',
      'dblclick': 'dblclick',
      'mousedown': 'pointerdown',
      'mouseup': 'pointerup',
      'mousemove': 'pointermove',
      'moveend': 'moveend',
      'zoomend': 'moveend' // OpenLayers에서는 moveend로 통합
    };
    
    return eventMap[event] || event;
  }
  
  /**
   * 맵 이벤트 리스너 제거
   * @param {string} event 이벤트 이름
   * @param {Function} callback 콜백 함수 (생략 시 해당 이벤트의 모든 핸들러 제거)
   */
  off(event, callback) {
    if (!this.map || !this.eventHandlers.has(event)) return;
    
    if (callback) {
      // 특정 콜백만 제거 (미구현 - OpenLayers에서는 복잡함)
      console.warn('OpenLayers에서 특정 콜백 제거는 아직 구현되지 않았습니다.');
    } else {
      // 해당 이벤트의 모든 핸들러 제거
      const handlers = this.eventHandlers.get(event);
      handlers.forEach(handler => {
        ol.Observable.unByKey(handler);
      });
      this.eventHandlers.delete(event);
    }
  }
  
  /**
   * 맵 뷰를 모든 데이터가 보이도록 조정
   */
  fitToData() {
    // 마커/폴리곤 피처 수집
    const features = [
      ...this.markerSource.getFeatures(),
      ...this.polygonSource.getFeatures()
    ];
    
    // 데이터가 없으면 종료
    if (features.length === 0) {
      return;
    }
    
    // 모든 피처의 범위 계산
    const extent = ol.extent.createEmpty();
    features.forEach(feature => {
      ol.extent.extend(extent, feature.getGeometry().getExtent());
    });
    
    // 범위가 유효하면 맵 뷰 조정
    if (!ol.extent.isEmpty(extent)) {
      // 여백 추가
      const padding = [50, 50, 50, 50]; // [top, right, bottom, left]
      const paddedExtent = ol.extent.buffer(extent, 
        Math.max(ol.extent.getWidth(extent), ol.extent.getHeight(extent)) * 0.1);
      
      // 맵 뷰 조정 (애니메이션 적용)
      this.view.fit(paddedExtent, {
        duration: 1000, // 애니메이션 지속 시간 (ms)
        maxZoom: 18     // 최대 줌 레벨 제한
      });
    }
  }
} 