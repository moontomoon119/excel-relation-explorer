/**
 * 필터 목록 컴포넌트
 * 왼쪽 사이드바에 표시될 필터 목록을 관리합니다.
 */

import FilterCore from './FilterCore.js';
import { FilterManager } from '../../utils/filterManager.js';
import eventBus from '../../utils/eventBus.js';
import { UI_CONFIG } from '../../core/config.js';

export default class FilterList {
  /**
   * 필터 목록 컴포넌트 생성
   * @param {HTMLElement} container 컴포넌트를 추가할 컨테이너
   */
  constructor(container) {
    this.container = container;
    this.filterManager = new FilterManager();
    window.filterManager = this.filterManager; // 전역 객체로 등록 (기존 코드 호환성)
    this.activeFilters = new Map(); // 활성 필터 인스턴스 저장
    
    this.init();
  }
  
  /**
   * 컴포넌트 초기화
   */
  async init() {
    console.log('필터 목록 컴포넌트 초기화 시작');
    
    this.renderControls();
    await this.filterManager.loadAllTablesData();
    this.addNewFilter();
    this.bindEvents();
    
    console.log('필터 목록 컴포넌트 초기화 완료');
  }
  
  /**
   * 컨트롤 UI 렌더링
   */
  renderControls() {
    this.container.innerHTML = `
      <div class="filter-sidebar">
        <div class="filter-header">
          <h4>필터</h4>
          <div class="filter-controls">
            <button class="btn btn-sm btn-outline-secondary add-filter-btn" title="필터 추가">
              <i class="fas fa-plus"></i>
            </button>
            <button class="btn btn-sm btn-outline-secondary" id="applyAllFiltersBtn" title="모든 필터 적용">
              <i class="fas fa-sync-alt"></i>
            </button>
          </div>
        </div>
        <div id="filtersContainer" class="filters-container"></div>
        <div id="filterResultsPreview" class="filter-results-preview"></div>
      </div>
    `;
    
    this.filtersContainer = document.getElementById('filtersContainer');
    this.resultsPreview = document.getElementById('filterResultsPreview');
  }
  
  /**
   * 이벤트 리스너 바인딩
   */
  bindEvents() {
    document.querySelector('.add-filter-btn').addEventListener('click', () => {
      this.addNewFilter();
    });
    
    document.getElementById('applyAllFiltersBtn').addEventListener('click', () => {
      this.applyAllFilters();
    });
    
    // 필터 적용 이벤트 구독
    eventBus.subscribe('filterApplied', (data) => {
      console.log('필터 적용됨:', data);
    });
    
    // 필터 제거 이벤트 구독
    eventBus.subscribe('filterRemoved', (data) => {
      console.log('필터 제거됨:', data);
    });
  }
  
  /**
   * 새 필터 추가
   */
  addNewFilter() {
    const filter = this.filterManager.createFilter();

    // 새 필터 추가 전, 기존 활성 필터들을 모두 접음
    this.activeFilters.forEach(f => f.collapse());
    
    const newFilterInstance = new FilterCore(
      filter.id, 
      filter, 
      this.filtersContainer, 
      (appliedFilter) => this.onFilterApplied(appliedFilter),
      (removedId) => this.onFilterRemoved(removedId),
      false // 새 필터는 펼쳐진 상태로 시작 (isInitiallyCollapsed = false)
    );

    this.activeFilters.set(filter.id, newFilterInstance);
  }
  
  /**
   * 모든 필터 적용
   */
  async applyAllFilters() {
    const activeFilters = this.filterManager.getActiveFilters();
    if (activeFilters.length === 0) {
      alert('적용할 필터가 없습니다.');
      return;
    }
    
    const filterResults = activeFilters.map(filter => filter.result);
    const intersection = this.filterManager.calculateFilterIntersection(filterResults);
    
    // 결과 미리보기 표시
    this.renderFilterResults(intersection);
    
    // 이벤트 발행 - 맵과 그리드가 이 이벤트를 구독
    eventBus.publish('pnuFiltered', intersection);
  }
  
  /**
   * 필터링 결과 렌더링
   * @param {Object} intersection 교집합 결과
   */
  renderFilterResults(intersection) {
    // 간단한 결과 요약 표시
    this.resultsPreview.innerHTML = `
      <div class="results-summary">
        <h5>필터링 결과</h5>
        <p>찾은 PNU: <strong>${intersection.count}</strong>개</p>
      </div>
    `;
    
    // 결과가 있는 경우에만 미리보기 표시
    if (intersection.count > 0) {
      const maxPreview = Math.min(intersection.pnuList.length, 5);
      
      let previewHtml = '<div class="pnu-preview"><strong>샘플:</strong> ';
      
      for (let i = 0; i < maxPreview; i++) {
        previewHtml += `<span class="pnu-item">${intersection.pnuList[i]}</span>`;
        if (i < maxPreview - 1) previewHtml += ', ';
      }
      
      previewHtml += '</div>';
      this.resultsPreview.innerHTML += previewHtml;
    }
  }
  
  /**
   * 필터 적용 콜백
   * @param {Object} filter 적용된 필터
   */
  onFilterApplied(filter) {
    console.log(`필터 ${filter.id} 적용됨:`, filter);
  }
  
  /**
   * 필터 제거 콜백
   * @param {number} id 제거된 필터 ID
   */
  onFilterRemoved(id) {
    console.log(`필터 ${id} 제거됨`);
    this.activeFilters.delete(id); // 활성 필터 맵에서 제거
  }
} 