/**
 * 그리드 컨테이너 컴포넌트
 * 오른쪽 사이드바에 표시될 입지분석 도구를 관리합니다.
 */

import eventBus from '../../utils/eventBus.js';
import { UI_CONFIG } from '../../core/config.js';
import IndexSettingComponent from './IndexSettingComponent.js';
import AnalysisResultComponent from './AnalysisResultComponent.js';
import IsochroneApiService from '../../services/IsochroneApiService.js';

export default class GridContainer {
  /**
   * 그리드 컨테이너 컴포넌트 생성
   * @param {HTMLElement} container 컴포넌트를 추가할 컨테이너
   */
  constructor(container) {
    this.container = container;
    this.currentData = null;
    
    // 서브 컴포넌트 참조
    this.indexSettingComponent = null;
    this.analysisResultComponent = null;
    
    // API 서비스
    this.apiService = new IsochroneApiService();
    
    this.init();
    this.setupEventSubscriptions();
  }
  
  /**
   * 컴포넌트 초기화
   */
  init() {
    console.log('그리드 컨테이너 초기화 시작');
    
    this.renderContainer();
    this.initSubComponents();
    this.attachHeaderButtons();
    
    console.log('그리드 컨테이너 초기화 완료');
  }
  
  /**
   * 컨테이너 UI 렌더링
   */
  renderContainer() {
    this.container.innerHTML = `
      <div class="grid-container">
        <div class="location-analysis-header">
          <div class="header-title">
            <h4>입지 분석</h4>
          </div>
          <div class="header-actions">
            <button class="btn btn-sm btn-outline-secondary" id="exportResultsBtn">
              <i class="fas fa-download"></i> 내보내기
            </button>
            <button class="btn btn-sm btn-outline-secondary" id="refreshResultsBtn">
              <i class="fas fa-sync"></i> 새로고침
            </button>
          </div>
        </div>
        
        <div class="location-analysis-content">
          <!-- 평가 지수 설정 컴포넌트 영역 -->
          <div id="indexSettingsContainer"></div>
          
          <!-- 분석 결과 컴포넌트 영역 -->
          <div id="analysisResultsContainer"></div>
        </div>
      </div>
    `;
  }
  
  /**
   * 헤더 버튼 이벤트 연결
   */
  attachHeaderButtons() {
    // 내보내기 버튼
    document.getElementById('exportResultsBtn')?.addEventListener('click', () => {
      console.log('분석 결과 내보내기');
      if (this.analysisResultComponent) {
        this.analysisResultComponent.exportResults();
      }
    });
    
    // 새로고침 버튼
    document.getElementById('refreshResultsBtn')?.addEventListener('click', () => {
      console.log('분석 결과 새로고침');
      if (this.analysisResultComponent) {
        this.analysisResultComponent.resetResults();
      }
      
      // PNU 필터링 이벤트 다시 발행
      if (this.currentData) {
        eventBus.publish('pnuFilter.results', this.currentData);
      }
    });
  }
  
  /**
   * 서브 컴포넌트 초기화
   */
  initSubComponents() {
    console.log('서브 컴포넌트 초기화 시작');
    console.log('API 서비스 객체:', this.apiService);
    
    // 평가 지수 설정 컴포넌트 초기화
    const indexSettingsContainer = document.getElementById('indexSettingsContainer');
    if (indexSettingsContainer) {
      console.log('indexSettingsContainer 찾음, 컴포넌트 초기화');
      this.indexSettingComponent = new IndexSettingComponent(
        indexSettingsContainer,
        this.apiService // API 서비스 전달
      );
      console.log('IndexSettingComponent 초기화 완료');
    } else {
      console.error('indexSettingsContainer를 찾을 수 없습니다');
    }
    
    // 분석 결과 컴포넌트 초기화
    const analysisResultsContainer = document.getElementById('analysisResultsContainer');
    if (analysisResultsContainer) {
      this.analysisResultComponent = new AnalysisResultComponent(
        analysisResultsContainer,
        (pnuId, isChecked) => this.handlePnuToggle(pnuId, isChecked),
        (pnu) => this.handlePnuSelect(pnu),
        this.apiService // API 서비스 전달
      );
    } else {
      console.error('analysisResultsContainer를 찾을 수 없습니다');
    }
    
    console.log('서브 컴포넌트 초기화 완료');
  }
  
  /**
   * 이벤트 구독 설정
   */
  setupEventSubscriptions() {
    // PNU 필터링 결과 구독
    eventBus.subscribe('pnuFilter.results', data => {
      this.handleFilteredPnu(data);
    });
    
    // 분석 완료 이벤트 구독
    eventBus.subscribe('analysis.complete', data => {
      this.handleAnalysisComplete(data);
    });
    
    // 분석 결과 이벤트 구독
    eventBus.subscribe('analysis.results', data => {
      this.handleAnalysisResults(data);
    });
    
    // 샘플 PNU 요청 이벤트 구독 (테스트용)
    eventBus.subscribe('pnu.getSample', () => {
      console.log('샘플 PNU 데이터 요청 수신');
      this.provideSamplePnuData();
    });
  }
  
  /**
   * 테스트용 샘플 PNU 데이터 제공
   */
  provideSamplePnuData() {
    console.log('테스트용 샘플 PNU 데이터 생성 및 발행');
    
    // 샘플 PNU 데이터 생성
    const samplePnuList = [
      { pnu: '1111010100', value: 150, analyzed: false },
      { pnu: '1111010200', value: 250, analyzed: false },
      { pnu: '1111010300', value: 350, analyzed: false },
      { pnu: '1111010400', value: 450, analyzed: false },
      { pnu: '1111010500', value: 550, analyzed: false }
    ];
    
    // PNU 필터링 결과 이벤트로 발행
    console.log('샘플 PNU 데이터 이벤트 발행');
    eventBus.publish('pnuFilter.results', { pnuList: samplePnuList });
  }
  
  /**
   * PNU 토글 상태 변경 핸들러
   * @param {string} pnuId PNU ID
   * @param {boolean} isChecked 체크 상태
   */
  handlePnuToggle(pnuId, isChecked) {
    console.log(`PNU ${pnuId} 토글 변경: ${isChecked}`);
    
    // PNU 토글 상태 변경에 따른 지도 업데이트 이벤트 발행
    eventBus.publish('pnu.toggled', {
      pnu: pnuId,
      visible: isChecked
    });
  }
  
  /**
   * PNU 선택 핸들러
   * @param {string} pnu 선택된 PNU
   */
  handlePnuSelect(pnu) {
    console.log(`PNU ${pnu} 선택됨`);
    
    // PNU 선택 이벤트 발행
    eventBus.publish('pnu.selected', {
      pnu: pnu
    });
  }
  
  /**
   * PNU 필터링 결과 처리
   * @param {Object} data PNU 데이터
   */
  handleFilteredPnu(data) {
    console.log('PNU 필터링 결과 (GridContainer):', data);
    console.log('데이터 타입:', typeof data);
    
    // 데이터 구조 검증
    if (!data) {
      console.error('PNU 필터링 결과가 null 또는 undefined입니다.');
      return;
    }
    
    // 데이터 구조 파악
    if (Array.isArray(data)) {
      console.log('데이터가 배열 형식입니다. 길이:', data.length);
    } else if (typeof data === 'object') {
      console.log('데이터가 객체 형식입니다.');
      if (data.pnuList) {
        console.log('pnuList 필드 존재, 길이:', data.pnuList.length);
      } else {
        console.log('pnuList 필드가 없습니다. 사용 가능한 필드:', Object.keys(data));
      }
    }
    
    this.currentData = data;
    
    // 분석 결과 컴포넌트에 PNU 목록 전달
    if (this.analysisResultComponent) {
      console.log('AnalysisResultComponent.setPnuList() 호출 전');
      this.analysisResultComponent.setPnuList(data);
      console.log('AnalysisResultComponent.setPnuList() 호출 후');
    } else {
      console.error('analysisResultComponent가 초기화되지 않았습니다.');
    }
  }
  
  /**
   * 분석 완료 이벤트 처리
   * @param {Object} data 분석 완료 데이터
   */
  handleAnalysisComplete(data) {
    console.log('분석 완료:', data);
    
    // 분석 완료 시 지도에 표시 이벤트 발행
    eventBus.publish('isochrone.show', {
      pnu: data.pnu
    });
  }
  
  /**
   * 분석 결과 이벤트 처리
   * @param {Object} data 분석 결과 데이터
   */
  handleAnalysisResults(data) {
    console.log('분석 결과 수신:', data);
    
    // 필요한 경우 추가 처리
    // 예: 차트 업데이트, 데이터 가공 등
  }
} 