/**
 * Leaflet 기반 맵 프로바이더 구현
 */

import MapProvider from '../MapProvider.js';
import LeafletLoader from '../services/LeafletLoader.js';

export default class LeafletProvider extends MapProvider {
  /**
   * Leaflet 맵 프로바이더 생성
   * @param {HTMLElement} container 맵을 표시할 컨테이너 요소
   * @param {Object} config 맵 설정
   */
  constructor(container, config) {
    super(container, config);
    this.leafletMap = null;
    this.markerLayer = null;
    this.polygonLayer = null;
    this.baseLayers = {}; // 기본 타일 레이어 저장
    this.currentStyle = 'standard'; // 현재 스타일
  }
  
  /**
   * Leaflet 맵 초기화
   * @returns {Promise<this>} 초기화 완료 시 해결되는 Promise
   */
  async initialize() {
    try {
      // Leaflet 라이브러리 동적 로드
      await LeafletLoader.load();
      
      if (!window.L) {
        throw new Error('Leaflet 라이브러리가 로드되지 않았습니다.');
      }
      
      console.log('Leaflet 맵 초기화 시작');
      
      // 커스텀 마커 스타일 추가
      const markerStyle = document.createElement('style');
      markerStyle.textContent = `
        .custom-marker-container {
          background: transparent;
          border: none;
        }
        .custom-marker {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          box-shadow: 0 0 0 2px white;
        }
      `;
      document.head.appendChild(markerStyle);
      
      // Leaflet 맵 생성
      this.leafletMap = L.map(this.container, {
        center: this.config.defaultCenter,
        zoom: this.config.defaultZoom,
        zoomControl: false // 기본 줌 컨트롤 비활성화 (커스텀 컨트롤 사용)
      });
      
      // 타일 레이어 초기화
      this._initTileLayers();
      
      // 저장된 스타일 적용
      this._loadSavedStyle();
      
      // 스타일 컨트롤 추가
      this._addStyleControl();
      
      // 레이어 그룹 초기화
      this.markerLayer = L.layerGroup().addTo(this.leafletMap);
      this.polygonLayer = L.layerGroup().addTo(this.leafletMap);
      
      console.log('Leaflet 맵 초기화 완료');
      return this;
    } catch (error) {
      console.error('Leaflet 맵 초기화 실패:', error);
      throw error;
    }
  }
  
  /**
   * 타일 레이어 초기화
   * @private
   */
  _initTileLayers() {
    // 기본 OSM 타일
    this.baseLayers.standard = L.tileLayer(this.config.tileProvider, {
      attribution: this.config.attribution
    });
    
    // CartoDB Voyager (컬러)
    this.baseLayers.voyager = L.tileLayer(this.config.cartoDB?.voyager || 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: this.config.attribution,
      subdomains: 'abcd',
      maxZoom: 19
    });
    
    // CartoDB Positron (라이트 스타일)
    this.baseLayers.light = L.tileLayer(this.config.cartoDB?.positron || 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: this.config.attribution,
      subdomains: 'abcd',
      maxZoom: 19
    });
    
    // CartoDB Dark Matter (다크 스타일)
    this.baseLayers.dark = L.tileLayer(this.config.cartoDB?.dark || 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: this.config.attribution,
      subdomains: 'abcd',
      maxZoom: 19
    });
    
    // CartoDB Positron No Labels (라이트 스타일, 라벨 없음)
    this.baseLayers.lightNoLabels = L.tileLayer(this.config.cartoDB?.positronNoLabels || 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
      attribution: this.config.attribution,
      subdomains: 'abcd',
      maxZoom: 19
    });
    
    // CartoDB Dark Matter No Labels (다크 스타일, 라벨 없음)
    this.baseLayers.darkNoLabels = L.tileLayer(this.config.cartoDB?.darkNoLabels || 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
      attribution: this.config.attribution,
      subdomains: 'abcd',
      maxZoom: 19
    });
    
    // 그레이스케일 OSM
    this.baseLayers.grayscaleFilter = L.tileLayer(this.config.tileProvider, {
      attribution: this.config.attribution,
      className: 'leaflet-grayscale-filter'
    });
    
    // 그레이스케일 스타일 추가
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      .leaflet-grayscale-filter {
        filter: grayscale(100%) !important;
        -webkit-filter: grayscale(100%) !important;
      }
    `;
    document.head.appendChild(styleEl);
    
    // 기본 레이어 추가 (Voyager)
    this.baseLayers.voyager.addTo(this.leafletMap);
    this.currentStyle = 'voyager';
  }
  
  /**
   * 저장된 스타일 불러오기
   * @private
   */
  _loadSavedStyle() {
    try {
      if (window.localStorage && this.config.STORAGE_KEYS?.MAP_STYLE) {
        const savedStyle = localStorage.getItem(this.config.STORAGE_KEYS.MAP_STYLE);
        if (savedStyle && this.baseLayers[savedStyle]) {
          this.setMapStyle(savedStyle);
        }
      }
    } catch (e) {
      console.warn('로컬 스토리지에서 맵 스타일 불러오기 실패:', e);
    }
  }
  
  /**
   * 스타일 컨트롤 추가
   * @private
   */
  _addStyleControl() {
    try {
      // 스타일 메뉴 컨테이너 생성
      const container = document.createElement('div');
      container.className = 'map-style-control-container';
      
      // 메인 버튼 생성
      const button = document.createElement('button');
      button.innerHTML = '지도 스타일';
      button.className = 'btn btn-sm btn-outline-secondary leaflet-style-toggle';
      button.title = '지도 스타일 변경';
      
      // 드롭다운 메뉴 생성
      const menu = document.createElement('div');
      menu.className = 'leaflet-style-menu';
      
      // 스타일 옵션들
      const options = [
        { id: 'voyager', name: 'Voyager 지도' },
        { id: 'light', name: 'Positron 라이트' },
        { id: 'dark', name: 'Dark Matter 테마' },
        { id: 'lightNoLabels', name: '라이트 심플' },
        { id: 'darkNoLabels', name: '다크 심플' },
        { id: 'grayscaleFilter', name: '모노크롬' }
      ];
      
      // 스타일 메뉴 옵션 생성
      options.forEach(option => {
        const item = document.createElement('a');
        item.className = 'leaflet-style-item';
        item.innerHTML = option.name;
        item.href = '#';
        item.setAttribute('data-style', option.id);
        
        // 현재 스타일이면 활성화
        if (option.id === this.currentStyle) {
          item.classList.add('active');
        }
        
        // 클릭 이벤트
        item.addEventListener('click', (e) => {
          e.preventDefault();
          
          // 이전 활성 항목 비활성화
          menu.querySelectorAll('.leaflet-style-item').forEach(el => {
            el.classList.remove('active');
          });
          
          // 현재 항목 활성화
          item.classList.add('active');
          
          // 스타일 전환
          this.setMapStyle(option.id);
          
          // 토글 메뉴 버튼 텍스트 업데이트
          button.innerHTML = '지도 스타일';
          
          // 메뉴 닫기
          menu.classList.remove('open');
        });
        
        menu.appendChild(item);
      });
      
      // 버튼 클릭 시 메뉴 토글
      button.addEventListener('click', (e) => {
        e.preventDefault();
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
        .leaflet-style-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 85px;
          white-space: nowrap;
        }
        .leaflet-style-menu {
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
        .leaflet-style-menu.open {
          display: block;
        }
        .leaflet-style-item {
          display: block;
          padding: 8px 12px;
          color: #333;
          text-decoration: none;
          font-size: 12px;
          transition: background-color 0.2s;
          border-bottom: 1px solid #f0f0f0;
          white-space: nowrap;
        }
        .leaflet-style-item:hover {
          background-color: #f0f0f0;
        }
        .leaflet-style-item.active {
          background-color: #e6e6e6;
          font-weight: bold;
        }
      `;
      document.head.appendChild(style);
      
      // 구성 요소 조립
      container.appendChild(button);
      container.appendChild(menu);
      
      // 맵에 컨트롤 추가 (우측 상단)
      // const controlContainer = L.control({ position: 'topright' });
      // controlContainer.onAdd = () => {
      //   return container;
      // };
      // controlContainer.addTo(this.leafletMap);
      return container; // 생성된 컨트롤 컨테이너 반환
    } catch (error) {
      console.error('스타일 컨트롤 추가 실패:', error);
      return null; // 오류 발생 시 null 반환
    }
  }
  
  /**
   * 맵 스타일 설정
   * @param {string} styleId 스타일 ID
   */
  setMapStyle(styleId) {
    if (!this.baseLayers[styleId]) {
      console.warn(`알 수 없는 스타일 ID: ${styleId}`);
      return;
    }
    
    // 현재 레이어 제거
    if (this.currentStyle && this.baseLayers[this.currentStyle]) {
      this.leafletMap.removeLayer(this.baseLayers[this.currentStyle]);
    }
    
    // 새 레이어 추가
    this.baseLayers[styleId].addTo(this.leafletMap);
    this.currentStyle = styleId;
    
    console.log(`맵 스타일 변경: ${styleId}`);
    
    // 로컬 스토리지에 스타일 저장
    try {
      if (window.localStorage && this.config.STORAGE_KEYS?.MAP_STYLE) {
        localStorage.setItem(this.config.STORAGE_KEYS.MAP_STYLE, styleId);
      }
    } catch (e) {
      console.warn('로컬 스토리지에 맵 스타일 저장 실패:', e);
    }
  }
  
  /**
   * 맵 확대
   */
  zoomIn() {
    if (this.leafletMap) {
      this.leafletMap.zoomIn();
    }
  }
  
  /**
   * 맵 축소
   */
  zoomOut() {
    if (this.leafletMap) {
      this.leafletMap.zoomOut();
    }
  }
  
  /**
   * 맵 초기화 (원래 위치와 줌 레벨로 복귀)
   */
  resetView() {
    if (this.leafletMap) {
      this.leafletMap.setView(
        this.config.defaultCenter, 
        this.config.defaultZoom
      );
    }
  }
  
  /**
   * 마커 추가
   * @param {Array<Object>} markers 표시할 마커 정보 배열
   * @param {Array} markers[].position 위치 좌표 [위도, 경도]
   * @param {string} [markers[].title] 마커 제목
   * @param {Object} [markers[].options] 추가 마커 옵션
   */
  addMarkers(markers) {
    if (!this.leafletMap || !this.markerLayer) return;
    
    this.clearMarkers();
    
    console.log(`Leaflet 마커 추가: ${markers.length}개`);
    if (markers.length > 0) {
      console.log('첫 번째 마커 샘플:', markers[0]);
    }
    
    markers.forEach(markerData => {
      // 마커 옵션 처리
      const options = { ...markerData.options };
      
      // 아이콘 처리
      if (options.icon) {
        const iconConfig = options.icon;
        
        // div 아이콘인 경우
        if (iconConfig.type === 'div') {
          options.icon = L.divIcon({
            html: iconConfig.html,
            className: iconConfig.className || '',
            iconSize: iconConfig.iconSize || [20, 20],
            iconAnchor: iconConfig.iconAnchor || [10, 10]
          });
        }
        // 일반 아이콘인 경우
        else if (iconConfig.iconUrl) {
          options.icon = L.icon({
            iconUrl: iconConfig.iconUrl,
            iconSize: iconConfig.iconSize,
            iconAnchor: iconConfig.iconAnchor,
            popupAnchor: iconConfig.popupAnchor,
            shadowUrl: iconConfig.shadowUrl,
            shadowSize: iconConfig.shadowSize,
            shadowAnchor: iconConfig.shadowAnchor
          });
        }
        // 아이콘 설정이 없거나 잘못된 경우는 기본 마커 사용
        else if (!(options.icon instanceof L.Icon || options.icon instanceof L.DivIcon)) {
          delete options.icon;
        }
      }
      
      // 마커 생성
      const marker = L.marker(markerData.position, options);
      
      if (markerData.title) {
        marker.bindTooltip(markerData.title);
      }
      
      if (markerData.popup) {
        marker.bindPopup(markerData.popup);
      }
      
      this.markerLayer.addLayer(marker);
    });
  }
  
  /**
   * 마커 제거
   */
  clearMarkers() {
    if (this.markerLayer) {
      this.markerLayer.clearLayers();
    }
  }
  
  /**
   * 폴리곤 추가
   * @param {Array<Object>} polygons 표시할 폴리곤 정보 배열
   * @param {Array<Array>} polygons[].positions 폴리곤 꼭지점 좌표 배열 [[위도1, 경도1], [위도2, 경도2], ...]
   * @param {Object} [polygons[].options] 추가 폴리곤 옵션
   */
  addPolygons(polygons) {
    if (!this.leafletMap || !this.polygonLayer) return;
    
    this.clearPolygons();
    
    polygons.forEach(polygonData => {
      const polygon = L.polygon(polygonData.positions, polygonData.options || {});
      
      if (polygonData.popup) {
        polygon.bindPopup(polygonData.popup);
      }
      
      this.polygonLayer.addLayer(polygon);
    });
  }
  
  /**
   * 폴리곤 제거
   */
  clearPolygons() {
    if (this.polygonLayer) {
      this.polygonLayer.clearLayers();
    }
  }
  
  /**
   * 맵 이벤트 리스너 등록
   * @param {string} event 이벤트 이름
   * @param {Function} callback 콜백 함수
   */
  on(event, callback) {
    if (this.leafletMap) {
      this.leafletMap.on(event, callback);
    }
  }
  
  /**
   * 맵 이벤트 리스너 제거
   * @param {string} event 이벤트 이름
   * @param {Function} callback 콜백 함수
   */
  off(event, callback) {
    if (this.leafletMap) {
      this.leafletMap.off(event, callback);
    }
  }
  
  /**
   * 맵 뷰를 모든 데이터가 보이도록 조정
   */
  fitToData() {
    // 마커와 폴리곤을 포함하는 임시 피처 그룹 생성
    const markerGroup = L.featureGroup();
    
    // 모든 마커를 피처 그룹에 추가
    this.markerLayer.eachLayer(layer => {
      markerGroup.addLayer(layer);
    });
    
    // 모든 폴리곤을 피처 그룹에 추가
    this.polygonLayer.eachLayer(layer => {
      markerGroup.addLayer(layer);
    });
    
    // 데이터가 없으면 종료
    if (markerGroup.getLayers().length === 0) {
      return;
    }
    
    // 모든 마커/폴리곤이 보이도록 뷰 경계 조정
    const bounds = markerGroup.getBounds();
    this.leafletMap.fitBounds(bounds, {
      padding: [50, 50], // 마커 주변에 여백 추가
      maxZoom: 18,       // 최대 줌 레벨 제한
      animate: true       // 부드러운 전환 애니메이션
    });
  }
} 