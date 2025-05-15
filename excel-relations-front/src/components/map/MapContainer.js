/**
 * 맵 컨테이너 컴포넌트
 * 중앙 영역에 표시될 지도를 관리합니다.
 */

import PnuMapService from './PnuMapService.js';
import MapProviderManager from './MapProviderManager.js';
import MapLayerManager from './MapLayerManager.js';
import MapUIController from './MapUIController.js';
import MapEventHandler from './MapEventHandler.js';

export default class MapContainer {
  /**
   * 맵 컨테이너 컴포넌트 생성
   * @param {HTMLElement} container 컴포넌트를 추가할 컨테이너
   * @param {string} [providerType=null] 사용할 맵 프로바이더 타입
   */
  constructor(container, providerType = null) {
    this.container = container;
    this.lastPnuData = null;
    
    // PNU 맵 서비스 초기화
    this.pnuMapService = new PnuMapService();
    
    // 맵 프로바이더 매니저 초기화
    this.providerManager = new MapProviderManager(providerType);
    
    // UI 컨트롤러 초기화
    this.uiController = new MapUIController(container, {
      onProviderChange: this.handleProviderChange.bind(this),
      onReset: this.resetMap.bind(this)
    });
    
    // 맵 레이어 매니저는 맵 프로바이더 초기화 후에 생성
    this.layerManager = null;
    
    // 이벤트 핸들러 초기화
    this.eventHandler = new MapEventHandler({
      onPnuFiltered: this.updateMapWithPnuData.bind(this),
      onAnalysisMapData: this.handleAnalysisData.bind(this),
      onAnalysisToggleOff: this.handleAnalysisToggleOff.bind(this),
      onAnalysisToggle: this.handleAnalysisToggle.bind(this)
    });
    
    this.init();
  }
  
  /**
   * 컴포넌트 초기화
   */
  init() {
    console.log('맵 컨테이너 초기화 시작');
    
    // UI 초기 렌더링
    this.uiController.renderMapContainer();
    
    // 프로바이더 목록 UI 업데이트
    this.uiController.populateProviderList(
      this.providerManager.getAvailableProviders(),
      this.providerManager.getProviderType()
    );
    
    // 맵 초기화
    this.initializeMap();
    
    console.log('맵 컨테이너 초기화 완료');
  }
  
  /**
   * 맵 초기화
   */
  async initializeMap() {
    try {
      // 로딩 UI 표시
      this.uiController.showLoadingPlaceholder();
      
      // 맵 요소 생성
      const mapElement = this.uiController.createMapElement();
      if (!mapElement) {
        throw new Error('맵 요소를 생성할 수 없습니다.');
      }
      
      // 맵 프로바이더 초기화
      const mapProvider = await this.providerManager.initializeProvider(mapElement);
      
      // 맵 레이어 매니저 초기화
      this.layerManager = new MapLayerManager(
        mapProvider, 
        this.providerManager.getProviderType()
      );
      
      // 프로바이더 이벤트 리스너 등록
      this.registerMapEventListeners();
      
      // 로딩 UI 숨기기
      this.uiController.hidePlaceholder();
      
      // 지도 스타일 컨트롤 추가
      this.addStyleControlToUI();
      
      // 마지막으로 받은 PNU 데이터가 있으면 맵에 표시
      if (this.lastPnuData) {
        this.updateMapWithPnuData(this.lastPnuData);
      }
      
      console.log('맵 초기화 성공');
    } catch (error) {
      console.error('맵 초기화 실패:', error);
      this.uiController.showErrorPlaceholder('지도 라이브러리 로드 실패. 페이지를 새로고침 해보세요.');
    }
  }
  
  /**
   * 맵 프로바이더 변경 핸들러
   * @param {string} providerType 새 맵 프로바이더 타입
   */
  async handleProviderChange(providerType) {
    try {
      // 로딩 UI 표시
      this.uiController.showLoadingPlaceholder(
        `${providerType === 'leaflet' ? 'Leaflet' : 'OpenLayers'} 지도 라이브러리로 변경 중...`
      );
      
      // 현재 분석 데이터 백업
      const currentAnalysisData = this.layerManager ? this.layerManager.getAllAnalysisData() : new Map();
      
      // 맵 요소 생성
      const mapElement = this.uiController.createMapElement();
      if (!mapElement) {
        throw new Error('맵 요소를 생성할 수 없습니다.');
      }
      
      // 맵 프로바이더 변경
      const mapProvider = await this.providerManager.changeProvider(providerType, mapElement);
      
      // 맵 레이어 매니저 업데이트
      if (this.layerManager) {
        this.layerManager.updateMapProvider(mapProvider, providerType);
      } else {
        this.layerManager = new MapLayerManager(mapProvider, providerType);
      }
      
      // 프로바이더 이벤트 리스너 등록
      this.registerMapEventListeners();
      
      // 프로바이더 선택기 UI 업데이트
      this.uiController.populateProviderList(
        this.providerManager.getAvailableProviders(),
        this.providerManager.getProviderType()
      );
      
      // 로딩 UI 숨기기
      this.uiController.hidePlaceholder();
      
      // 지도 스타일 컨트롤 추가
      this.addStyleControlToUI();
      
      // 마지막으로 받은 PNU 데이터가 있으면 맵에 표시
      if (this.lastPnuData) {
        this.updateMapWithPnuData(this.lastPnuData);
      }
      
      // 분석 결과 복원
      if (currentAnalysisData.size > 0) {
        // 저장된 각 PNU 데이터를 다시 렌더링
        for (const [pnu, data] of currentAnalysisData.entries()) {
          if (data.isActive) {
            this.layerManager.renderAnalysisResults({ 
              pnu, 
              polygon: data.polygon, 
              gridPoints: data.gridPoints 
            });
          }
        }
      }
      
      console.log('맵 프로바이더 변경 성공:', providerType);
    } catch (error) {
      console.error('맵 프로바이더 변경 실패:', error);
      this.uiController.showErrorPlaceholder('지도 라이브러리 변경 실패. 다시 시도해주세요.');
      
      // 실패 시 기본값으로 되돌리기 위해 UI 업데이트
      this.uiController.populateProviderList(
        this.providerManager.getAvailableProviders(),
        this.providerManager.getProviderType()
      );
    }
  }
  
  /**
   * 맵 이벤트 리스너 등록
   */
  registerMapEventListeners() {
    const mapProvider = this.providerManager.getProvider();
    if (!mapProvider) return;
    
    this.eventHandler.registerMapProviderListeners(mapProvider, {
      onClick: (event) => {
        console.log('맵 클릭:', event);
        // 추가 클릭 처리 로직 구현
      },
      onZoomEnd: () => {
        // 확대/축소 완료 시 처리 로직 구현
      }
    });
  }
  
  /**
   * 분석 데이터 처리 핸들러
   * @param {Object} data 분석 데이터
   */
  handleAnalysisData(data) {
    console.log('분석 데이터 처리:', data);
    
    if (this.layerManager) {
      // 데이터에 활성화 상태 추가 (기본값: true)
      data.isActive = true;
      
      // 분석 데이터 렌더링 (기존 데이터는 유지)
      this.layerManager.renderAnalysisResults(data);
      
      console.log('분석 데이터 렌더링 완료:', data.pnu);
    }
  }
  
  /**
   * 분석 토글 해제 핸들러
   * @param {string} pnu PNU 코드
   */
  handleAnalysisToggleOff(pnu) {
    console.log('분석 토글 해제:', pnu);
    
    if (this.layerManager) {
      // 데이터는 유지하고 활성화 상태만 변경
      this.layerManager.updateAnalysisDataActiveState(pnu, false);
      
      // 맵에서 시각적으로만 제거
      this.layerManager.hideAnalysisLayer(pnu);
    }
  }
  
  /**
   * 분석 토글 변경 핸들러
   * @param {Object} data 토글 데이터 {pnu, isActive, data}
   */
  handleAnalysisToggle(data) {
    console.log('분석 토글 변경:', data);
    
    if (!this.layerManager) return;
    
    const { pnu, isActive, data: analysisData } = data;
    
    if (isActive) {
      // 토글 활성화: 데이터가 있으면 표시
      if (analysisData) {
        console.log(`PNU ${pnu} 토글 활성화 (데이터 있음)`);
        
        // 분석 데이터에 활성화 상태 추가
        analysisData.isActive = true;
        
        // 레이어 매니저에 데이터 저장 및 렌더링 (기존 데이터 유지하며 추가)
        this.layerManager.renderAnalysisResults({
          pnu,
          polygon: analysisData.polygon,
          gridPoints: analysisData.gridPoints,
          isActive: true
        });
      } else if (this.layerManager.hasAnalysisData(pnu)) {
        console.log(`PNU ${pnu} 토글 활성화 (기존 데이터 사용)`);
        
        // 이미 저장된 데이터가 있는 경우 활성화 상태만 변경
        this.layerManager.updateAnalysisDataActiveState(pnu, true);
        
        // 모든 활성화된 레이어 다시 그리기 (단일 레이어만 그리지 않음)
        this.layerManager.redrawActiveAnalysisData();
      }
    } else {
      console.log(`PNU ${pnu} 토글 비활성화`);
      
      // 토글 비활성화: 레이어 숨김 (데이터는 유지)
      this.layerManager.updateAnalysisDataActiveState(pnu, false);
      
      // 전체 레이어를 지우고 활성화된 레이어만 다시 그리기
      this.layerManager.redrawActiveAnalysisData();
    }
  }
  
  /**
   * PNU 데이터로 맵 업데이트
   * @param {Object} data PNU 데이터
   */
  async updateMapWithPnuData(data) {
    console.log('맵 업데이트:', data);
    
    // 데이터 저장 (맵 초기화 전에 요청이 온 경우를 대비)
    this.lastPnuData = data;
    
    // 맵 프로바이더가 초기화되지 않은 경우
    if (!this.providerManager.isProviderInitialized()) {
      this.uiController.updatePlaceholderWithPnuData(data);
      return;
    }
    
    try {
      // PNU 맵 서비스가 초기화되지 않았으면 초기화
      if (!this.pnuMapService.initialized) {
        await this.pnuMapService.initialize('/data/pnu_coordinates.csv');
      }
      
      // 맵 프로바이더 가져오기
      const mapProvider = this.providerManager.getProvider();
      const providerType = this.providerManager.getProviderType();
      
      // 이전 PNU 데이터 마커와 폴리곤 제거 (분석 결과는 유지)
      if (this.layerManager) {
        this.layerManager.clearPnuLayers();
      }
      
      // PNU 맵 서비스를 사용하여 데이터 처리
      const mapObjects = this.pnuMapService.processPnuDataSet(data, providerType);
      
      // 마커와 폴리곤 추가
      if (mapObjects.markers && mapObjects.markers.length > 0) {
        mapProvider.addMarkers(mapObjects.markers);
      }
      
      if (mapObjects.polygons && mapObjects.polygons.length > 0) {
        mapProvider.addPolygons(mapObjects.polygons);
      }
      
      // 데이터가 있는 경우 맵 뷰 조정
      const hasVisibleData = 
        (mapObjects.markers && mapObjects.markers.length > 0) || 
        (mapObjects.polygons && mapObjects.polygons.length > 0);
      
      if (hasVisibleData) {
        // 모든 데이터가 화면에 보이도록 맵 조정
        if (typeof mapProvider.fitToData === 'function') {
          mapProvider.fitToData();
        } else {
          // fitToData 메서드가 없는 맵 프로바이더의 경우 기본 뷰로 리셋
          mapProvider.resetView();
        }
      }
      
      // 활성화된 분석 결과만 다시 표시 (이 과정에서 분석 레이어를 보존)
      if (this.layerManager) {
        this.layerManager.redrawActiveAnalysisData();
      }
    } catch (error) {
      console.error('PNU 데이터 맵 업데이트 실패:', error);
      this.uiController.showErrorPlaceholder('지도 데이터 업데이트 실패. 다시 시도해주세요.');
    }
  }
  
  /**
   * 지도 초기화 (원래 위치와 줌 레벨로 복귀)
   */
  resetMap() {
    console.log('지도 초기화');
    
    const mapProvider = this.providerManager.getProvider();
    if (mapProvider) {
      mapProvider.resetView();
    }
  }
  
  /**
   * 지도 스타일 컨트롤을 UI에 추가
   */
  addStyleControlToUI() {
    const mapProvider = this.providerManager.getProvider();
    const providerType = this.providerManager.getProviderType();
    
    if (!mapProvider) return;
    
    // 프로바이더 타입에 따라 해당하는 스타일 컨트롤 가져오기
    let styleControlElement = null;
    
    if (providerType === 'leaflet') {
      // Leaflet 프로바이더
      if (typeof mapProvider._addStyleControl === 'function') {
        styleControlElement = mapProvider._addStyleControl();
      }
    } else if (providerType === 'openlayers') {
      // OpenLayers 프로바이더
      if (typeof mapProvider._addLayerSwitchControl === 'function') {
        styleControlElement = mapProvider._addLayerSwitchControl();
      }
    }
    
    // 스타일 컨트롤 추가
    this.uiController.addStyleControl(styleControlElement);
  }
} 