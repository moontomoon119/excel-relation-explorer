/**
 * 필터 컴포넌트 코어 클래스
 * 각 필터 UI를 관리합니다.
 */

import * as api from '../../services/api.js';
import eventBus from '../../utils/eventBus.js';
import { 
  createFilterHTML, 
  updateFilterTitle,
  populateTableSelect,
  populateColumnSelect
} from './utils/filterRenderer.js';
import { setupNumericFilter, applyNumericFilter } from './types/NumericFilter.js';
import { setupTextFilter, applyTextFilter } from './types/TextFilter.js';
import { setupDateFilter, applyDateFilter } from './types/DateFilter.js';

export default class FilterCore {
  /**
   * 필터 컴포넌트 생성
   * @param {number} id 필터 ID
   * @param {Object} filter 필터 객체
   * @param {HTMLElement} container 필터를 추가할 컨테이너
   * @param {Function} onFilterApplied 필터 적용 시 호출될 콜백
   * @param {Function} onFilterRemoved 필터 제거 시 호출될 콜백
   * @param {boolean} isInitiallyCollapsed 필터가 초기에 접힌 상태인지 여부
   */
  constructor(id, filter, container, onFilterApplied, onFilterRemoved, isInitiallyCollapsed = false) {
    this.id = id;
    this.filter = filter;
    this.container = container;
    this.onFilterApplied = onFilterApplied;
    this.onFilterRemoved = onFilterRemoved;
    this.isCollapsed = isInitiallyCollapsed;
    
    this.createFilterElement();

    if (this.isCollapsed) {
      this.filterBody.style.display = 'none';
    } else {
      this.element.classList.add('expanded');
    }
  }
  
  /**
   * 필터 요소 생성
   */
  createFilterElement() {
    // HTML 생성
    const filterHtml = createFilterHTML(this.id);
    
    // DOM에 추가
    const filterDiv = document.createElement('div');
    filterDiv.innerHTML = filterHtml;
    const filterElement = filterDiv.firstElementChild;
    this.container.appendChild(filterElement);
    
    // 요소 참조 저장
    this.element = filterElement;
    this.nameElement = filterElement.querySelector('.filter-name');
    this.typeElement = filterElement.querySelector('.filter-type');
    this.filterTitleElement = filterElement.querySelector('.filter-title');
    this.filterBody = filterElement.querySelector('.filter-body');
    this.tableSelect = filterElement.querySelector('.tableSelect');
    this.columnSelect = filterElement.querySelector('.columnSelect');
    this.numericOptions = filterElement.querySelector('.numeric-options');
    this.textOptions = filterElement.querySelector('.text-options');
    this.dateOptions = filterElement.querySelector('.date-options');
    
    // 모든 필터 옵션 초기에 숨기기
    this.hideFilterOptions();
    
    // 이벤트 리스너 추가
    this.bindEvents();
    
    // 테이블 목록 로드
    this.populateTableOptions();
  }
  
  /**
   * 이벤트 리스너 바인딩
   */
  bindEvents() {
    // 테이블 선택 이벤트
    this.tableSelect.addEventListener('change', () => this.onTableSelect());
    
    // 컬럼 선택 이벤트
    this.columnSelect.addEventListener('change', () => this.onColumnSelect());
    
    // 필터 제목 클릭 이벤트 (접기/펼치기)
    this.filterTitleElement.addEventListener('click', () => this.toggleCollapse());
    
    // 필터 적용 버튼 클릭
    this.element.querySelector('.apply-filter-btn').addEventListener('click', () => this.applyFilter());
    
    // 필터 제거 버튼 클릭
    this.element.querySelector('.remove-filter-btn').addEventListener('click', () => this.removeFilter());
  }
  
  /**
   * 테이블 옵션 채우기
   */
  populateTableOptions() {
    if (!window.filterManager) {
      console.error('filterManager가 정의되지 않았습니다.');
      return;
    }
    
    const tables = window.filterManager.getAllTables();
    populateTableSelect(tables, this.tableSelect);
  }
  
  /**
   * 테이블 선택 시 이벤트 핸들러
   */
  onTableSelect() {
    const tableName = this.tableSelect.value;
    this.filter.tableName = tableName;
    
    if (!tableName) {
      this.hideFilterOptions();
      this.updateFilterTitle();
      return;
    }
    
    // 컬럼 목록 로드
    const tableData = window.filterManager.getTableColumns(tableName);
    populateColumnSelect(tableData, this.columnSelect);
    
    // 필터 제목 업데이트
    this.updateFilterTitle();
  }
  
  /**
   * 컬럼 선택 시 이벤트 핸들러
   */
  async onColumnSelect() {
    const columnName = this.columnSelect.value;
    this.filter.columnName = columnName;
    
    if (!this.filter.tableName || !columnName) {
      this.hideFilterOptions();
      this.updateFilterTitle();
      return;
    }
    
    // 선택된 옵션 요소
    const selectedOption = this.columnSelect.options[this.columnSelect.selectedIndex];
    // 컬럼 타입 (numeric, text 또는 date)
    this.filter.columnType = selectedOption.dataset.type;
    
    // 필터링 옵션 숨기기
    this.hideFilterOptions();
    
    try {
      if (this.filter.columnType === 'numeric') {
        // 숫자형 컬럼인 경우
        const columnInfo = window.filterManager.getColumnInfo(
          this.filter.tableName, 
          this.filter.columnName, 
          'numeric'
        );
        
        if (columnInfo) {
          await setupNumericFilter(this.filter, this.element, columnInfo);
        }
      } else if (this.filter.columnType === 'text') {
        // 글자형 컬럼인 경우
        await setupTextFilter(this.filter, this.element);
      } else if (this.filter.columnType === 'date') {
        // 날짜형 컬럼인 경우
        await setupDateFilter(this.filter, this.element);
      }
      
      // 필터 제목 업데이트
      this.updateFilterTitle();
      
    } catch (error) {
      console.error('컬럼 세부정보 로드 오류:', error);
    }
  }
  
  /**
   * 모든 필터링 옵션 숨기기
   */
  hideFilterOptions() {
    this.numericOptions.classList.remove('active');
    this.textOptions.classList.remove('active');
    this.dateOptions.classList.remove('active');
  }
  
  /**
   * 필터 제목 업데이트
   */
  updateFilterTitle() {
    updateFilterTitle(this.filter, this.nameElement, this.typeElement);
  }
  
  /**
   * 필터 접기/펼치기 토글
   */
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.filterBody.style.display = this.isCollapsed ? 'none' : '';
    this.element.classList.toggle('expanded', !this.isCollapsed);
  }

  /**
   * 필터 접기
   */
  collapse() {
    if (!this.isCollapsed) {
      this.toggleCollapse();
    }
  }

  /**
   * 필터 펼치기
   */
  expand() {
    if (this.isCollapsed) {
      this.toggleCollapse();
    }
  }
  
  /**
   * 필터 적용
   */
  async applyFilter() {
    if (!this.filter.tableName || !this.filter.columnName) {
      alert('테이블과 컬럼을 선택하세요.');
      return;
    }
    
    try {
      let result;
      
      if (this.filter.columnType === 'numeric') {
        // 숫자형 필터 적용
        result = await applyNumericFilter(this.filter, this.element);
      } else if (this.filter.columnType === 'text') {
        // 글자형 필터 적용
        result = await applyTextFilter(this.filter, this.element);
      } else if (this.filter.columnType === 'date') {
        // 날짜형 필터 적용
        result = await applyDateFilter(this.filter, this.element);
      }
      
      if (result) {
        this.filter.result = result;
        
        // 필터 상태 UI 업데이트
        this.typeElement.textContent = `${result.pnu_count}개`;
        this.typeElement.classList.remove('bg-secondary', 'bg-primary', 'bg-success', 'bg-info');
        this.typeElement.classList.add('bg-success');
        
        // 필터 적용 이벤트 발행
        eventBus.publish('filterApplied', {
          filterId: this.id,
          filter: this.filter
        });
        
        // 콜백 호출
        if (this.onFilterApplied) {
          this.onFilterApplied(this.filter);
        }
      }
    } catch (error) {
      console.error('필터 적용 오류:', error);
      alert(error.message || '필터를 적용하는 데 실패했습니다.');
    }
  }
  
  /**
   * 필터 제거
   */
  removeFilter() {
    // DOM에서 제거
    this.element.remove();
    
    // 필터 매니저에서 제거
    window.filterManager.removeFilter(this.id);
    
    // 필터 제거 이벤트 발행
    eventBus.publish('filterRemoved', {
      filterId: this.id
    });
    
    // 콜백 호출
    if (this.onFilterRemoved) {
      this.onFilterRemoved(this.id);
    }
  }
} 