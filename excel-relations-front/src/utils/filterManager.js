/**
 * 필터 관리 유틸리티
 * 필터 객체 생성, 관리, 결과 계산 등을 담당
 */

import * as api from '../services/api.js';
import * as uiUtils from '../utils/uiUtils.js';

export class FilterManager {
  constructor() {
    this.filters = [];
    this.filterIdCounter = 0;
    this.allTables = new Set();
    this.allTablesData = {}; // 테이블별 컬럼 데이터를 저장 (numeric, text, date)
  }

  /**
   * 테이블 데이터 로드
   */
  async loadAllTablesData() {
    try {
      console.log('테이블 데이터 로드 시작');
      
      // API 서비스를 통해 모든 종류의 컬럼 데이터 로드
      const { numericData, textData, dateData } = await api.loadAllTablesData();
      console.log('API로부터 받은 데이터:', { numericData, textData, dateData });
      
      // 데이터 초기화
      this.filters = [];
      this.filterIdCounter = 0;
      this.allTables = new Set();
      this.allTablesData = {};
      
      // 숫자형 데이터 정리
      if (numericData && Array.isArray(numericData)) {
        numericData.forEach(col => {
          this.allTables.add(col.table_name);
          if (!this.allTablesData[col.table_name]) {
            this.allTablesData[col.table_name] = { numeric: [], text: [], date: [] };
          }
          this.allTablesData[col.table_name].numeric.push(col);
        });
      }
      
      // 글자형 데이터 정리
      if (textData && Array.isArray(textData)) {
        textData.forEach(col => {
          this.allTables.add(col.table_name);
          if (!this.allTablesData[col.table_name]) {
            this.allTablesData[col.table_name] = { numeric: [], text: [], date: [] };
          }
          this.allTablesData[col.table_name].text.push(col);
        });
      }
      
      // 날짜형 데이터 정리
      if (dateData && Array.isArray(dateData)) {
        dateData.forEach(col => {
          this.allTables.add(col.table_name);
          if (!this.allTablesData[col.table_name]) {
            this.allTablesData[col.table_name] = { numeric: [], text: [], date: [] };
          }
          this.allTablesData[col.table_name].date.push(col);
        });
      }
      
      console.log('테이블 목록:', Array.from(this.allTables));
      console.log('최종 테이블 데이터:', this.allTablesData);
      console.log('테이블 데이터 처리 완료');
      
      return {
        numericData: numericData || [],
        textData: textData || [],
        dateData: dateData || []
      };
    } catch (error) {
      console.error('테이블 데이터 로드 오류:', error);
      // UI에 오류 메시지 표시 로직 추가 가능
      throw error;
    }
  }

  /**
   * 새 필터 추가
   */
  addNewFilter() {
    try {
      // 필터 컨테이너 가져오기
      const filterContainer = document.getElementById('filtersContainer');
      if (!filterContainer) {
        console.error('필터 컨테이너를 찾을 수 없습니다.');
        return;
      }
      
      // 새 필터 객체 생성 (Filter.js에서 UI 생성하도록 변경 고려)
      const filter = this.createFilter(); 
      
      // Filter 컴포넌트 동적 생성 (이 부분은 Filter.js 클래스를 직접 사용하는 것이 좋음)
      // 아래 HTML은 Filter.js의 createFilterElement와 유사하게 구성
      const filterElement = document.createElement('div');
      filterElement.className = 'filter-card';
      filterElement.id = `filter-${filter.id}`;
      
      filterElement.innerHTML = `
        <div class="filter-header">
          <h6 class="filter-title">
            <span class="filter-name">새 필터</span>
            <span class="badge bg-secondary filter-type"></span>
          </h6>
          <div>
            <button class="btn btn-sm btn-outline-primary apply-filter-btn">적용</button>
            <button class="btn btn-sm btn-outline-danger remove-filter-btn">삭제</button>
          </div>
        </div>
        <div class="filter-body">
          <!-- 테이블 및 컬럼 선택 -->
          <div class="row mb-3">
            <div class="col-md-6">
              <div class="form-group">
                <label for="tableSelect-${filter.id}">테이블 선택</label>
                <select id="tableSelect-${filter.id}" class="form-control tableSelect">
                  <option value="">테이블 선택...</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="columnSelect-${filter.id}">컬럼 선택</label>
                <select id="columnSelect-${filter.id}" class="form-control columnSelect">
                  <option value="">컬럼 선택...</option>
                </select>
              </div>
            </div>
          </div>

          <!-- 숫자형 컬럼 필터링 옵션 -->
          <div id="numericFilterOptions-${filter.id}" class="filter-options numeric-options">
            <div class="form-group">
              <label>값 범위</label>
              <div id="columnInfoDisplay-${filter.id}" class="mb-2 small text-muted">정보 로딩 중...</div>
              <div class="row">
                <div class="col-md-6">
                  <input type="number" id="minValue-${filter.id}" class="form-control" placeholder="최소값">
                </div>
                <div class="col-md-6">
                  <input type="number" id="maxValue-${filter.id}" class="form-control" placeholder="최대값">
                </div>
              </div>
            </div>
          </div>
            
          <!-- 글자형 컬럼 필터링 옵션 -->
          <div id="textFilterOptions-${filter.id}" class="filter-options text-options">
            <div class="form-group">
              <label>고유값 선택</label>
              <div id="valueList-${filter.id}" class="border p-2 mb-2 value-list">
                <p class="text-muted">값 로딩 중...</p>
              </div>
            </div>
          </div>

          <!-- 날짜형 컬럼 필터링 옵션 -->
          <div id="dateFilterOptions-${filter.id}" class="filter-options date-options">
            <div class="form-group">
              <label>날짜 범위</label>
              <div id="dateInfoDisplay-${filter.id}" class="mb-2 small text-muted">정보 로딩 중...</div>
              <div class="row">
                <div class="col-md-6">
                  <label for="startDate-${filter.id}" class="form-label">시작일</label>
                  <input type="date" id="startDate-${filter.id}" class="form-control">
                </div>
                <div class="col-md-6">
                  <label for="endDate-${filter.id}" class="form-label">종료일</label>
                  <input type="date" id="endDate-${filter.id}" class="form-control">
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      
      filterContainer.appendChild(filterElement);
      
      // 테이블 선택 드롭다운 채우기 (uiUtils 사용 권장)
      const tableSelect = filterElement.querySelector('.tableSelect');
      const tables = this.getAllTables();
      tables.forEach(table => {
        const option = document.createElement('option');
        option.value = table;
        option.textContent = table;
        tableSelect.appendChild(option);
      });
      
      // 이벤트 리스너 추가
      const columnSelect = filterElement.querySelector('.columnSelect');
      
      // 테이블 선택 이벤트
      tableSelect.addEventListener('change', () => {
        const tableName = tableSelect.value;
        filter.tableName = tableName;
        
        if (!tableName) {
          columnSelect.innerHTML = '<option value="">컬럼 선택...</option>';
          this.hideAllFilterOptions(filterElement, filter.id); // 모든 옵션 숨김
          return;
        }
        
        // 컬럼 옵션 초기화 및 채우기 (uiUtils.populateColumnSelect 사용 권장)
        columnSelect.innerHTML = '<option value="">컬럼 선택...</option>';
        const tableData = this.getTableColumns(tableName);
        
        // 숫자형, 글자형, 날짜형 컬럼 그룹 추가
        this.addColumnOptionGroup(columnSelect, tableData.numeric, '숫자형', 'numeric');
        this.addColumnOptionGroup(columnSelect, tableData.text, '글자형', 'text');
        this.addColumnOptionGroup(columnSelect, tableData.date, '날짜형', 'date');
        
        this.hideAllFilterOptions(filterElement, filter.id); // 모든 옵션 숨김
      });
      
      // 컬럼 선택 이벤트
      columnSelect.addEventListener('change', async () => {
        const columnName = columnSelect.value;
        if (!columnName) {
          this.hideAllFilterOptions(filterElement, filter.id);
          return;
        }
        
        const selectedOption = columnSelect.options[columnSelect.selectedIndex];
        const columnType = selectedOption.dataset.type;
        
        filter.columnName = columnName;
        filter.columnType = columnType;
        
        this.hideAllFilterOptions(filterElement, filter.id);
        
        try {
          if (columnType === 'numeric') {
            const columnInfo = this.getColumnInfo(filter.tableName, columnName, 'numeric');
            if (columnInfo) {
              const numericOptions = filterElement.querySelector(`#numericFilterOptions-${filter.id}`);
              const columnInfoDisplay = filterElement.querySelector(`#columnInfoDisplay-${filter.id}`);
              const minValueInput = filterElement.querySelector(`#minValue-${filter.id}`);
              const maxValueInput = filterElement.querySelector(`#maxValue-${filter.id}`);
              
              if (columnInfoDisplay) {
                columnInfoDisplay.textContent = `범위: ${columnInfo.min_value || 'N/A'} ~ ${columnInfo.max_value || 'N/A'}, 평균: ${columnInfo.avg_value ? columnInfo.avg_value.toFixed(2) : 'N/A'}`;
              }
              if (minValueInput) minValueInput.value = columnInfo.min_value || '';
              if (maxValueInput) maxValueInput.value = columnInfo.max_value || '';
              if (numericOptions) numericOptions.classList.add('active');
            }
          } else if (columnType === 'text') {
            const textOptions = filterElement.querySelector(`#textFilterOptions-${filter.id}`);
            const valueList = filterElement.querySelector(`#valueList-${filter.id}`);
            if (valueList) valueList.innerHTML = '<p class="text-muted">값 로딩 중...</p>';

            // api.js의 loadTextColumnValues 사용
            const columnInfo = await api.loadTextColumnValues(filter.tableName, columnName);
            if (columnInfo && columnInfo.value_stats && valueList) {
              valueList.innerHTML = ''; // 이전 내용 지우기
              columnInfo.value_stats.forEach(stat => {
                const div = document.createElement('div');
                div.className = 'form-check';
                div.innerHTML = `
                  <input type="checkbox" class="form-check-input value-checkbox" value="${stat.value}" id="value-${filter.id}-${stat.value}" data-value="${stat.value}">
                  <label class="form-check-label" for="value-${filter.id}-${stat.value}">${stat.value} (${stat.frequency})</label>
                `;
                valueList.appendChild(div);
              });
            }
            if (textOptions) textOptions.classList.add('active');

          } else if (columnType === 'date') {
            const dateOptions = filterElement.querySelector(`#dateFilterOptions-${filter.id}`);
            const dateInfoDisplay = filterElement.querySelector(`#dateInfoDisplay-${filter.id}`);
            const startDateInput = filterElement.querySelector(`#startDate-${filter.id}`);
            const endDateInput = filterElement.querySelector(`#endDate-${filter.id}`);

            if (dateInfoDisplay) dateInfoDisplay.textContent = '정보 로딩 중...';
            
            // api.js의 loadDateColumnInfo 사용
            const columnInfo = await api.loadDateColumnInfo(filter.tableName, columnName);
            if (columnInfo && dateInfoDisplay && startDateInput && endDateInput) {
              const minDate = uiUtils.formatDate(columnInfo.min_date);
              const maxDate = uiUtils.formatDate(columnInfo.max_date);
              dateInfoDisplay.textContent = `기간: ${minDate || 'N/A'} ~ ${maxDate || 'N/A'}`;
              
              if (columnInfo.min_date) {
                startDateInput.value = uiUtils.formatDateForInput(columnInfo.min_date);
                startDateInput.min = uiUtils.formatDateForInput(columnInfo.min_date);
                endDateInput.min = uiUtils.formatDateForInput(columnInfo.min_date);
              }
              if (columnInfo.max_date) {
                endDateInput.value = uiUtils.formatDateForInput(columnInfo.max_date);
                startDateInput.max = uiUtils.formatDateForInput(columnInfo.max_date);
                endDateInput.max = uiUtils.formatDateForInput(columnInfo.max_date);
              }
            }
            if (dateOptions) dateOptions.classList.add('active');
          }
        } catch (error) {
          console.error('컬럼 선택 처리 오류:', error);
          // 오류 처리 UI 업데이트
        }
      });
      
      // 필터 적용 버튼 이벤트
      const applyBtn = filterElement.querySelector('.apply-filter-btn');
      if (applyBtn) {
        applyBtn.addEventListener('click', () => this.applyFilter(filter.id));
      }
      
      // 필터 삭제 버튼 이벤트
      const removeBtn = filterElement.querySelector('.remove-filter-btn');
      if (removeBtn) {
        removeBtn.addEventListener('click', () => this.removeFilter(filter.id));
      }
      
      return filter;
    } catch (error) {
      console.error('필터 추가 오류:', error);
    }
  }

  /**
   * Helper function to add option group to select element
   */
  addColumnOptionGroup(selectElement, columns, groupLabel, groupType) {
    if (columns && columns.length > 0) {
      const optgroup = document.createElement('optgroup');
      optgroup.label = groupLabel;
      columns.forEach(col => {
        const option = document.createElement('option');
        option.value = col.column_name;
        option.textContent = `${col.column_name} (${col.data_type})`;
        option.dataset.type = groupType;
        optgroup.appendChild(option);
      });
      selectElement.appendChild(optgroup);
    }
  }

  /**
   * Helper function to hide all filter options
   */
  hideAllFilterOptions(filterElement, filterId) {
    const numericOptions = filterElement.querySelector(`#numericFilterOptions-${filterId}`);
    const textOptions = filterElement.querySelector(`#textFilterOptions-${filterId}`);
    const dateOptions = filterElement.querySelector(`#dateFilterOptions-${filterId}`);

    if (numericOptions) numericOptions.classList.remove('active');
    if (textOptions) textOptions.classList.remove('active');
    if (dateOptions) dateOptions.classList.remove('active');
  }

  /**
   * 모든 필터 적용
   */
  async applyAllFilters() {
    const activeFilters = this.getActiveFilters();
    if (activeFilters.length === 0) {
      alert('적용할 필터가 없습니다.');
      return;
    }
    
    const filterResults = activeFilters.map(filter => filter.result);
    const intersection = this.calculateFilterIntersection(filterResults);
    
    // 결과 표시
    const resultArea = document.getElementById('resultArea');
    if (resultArea) {
      // 결과 HTML 생성
      let html = `
        <div class="mb-3">
          <p><strong>필터링 결과:</strong></p>
          <ul>
            <li>적용된 필터 수: ${activeFilters.length}</li>
            <li>최종 PNU 개수: ${intersection.count}</li>
          </ul>
        </div>
        
        <div class="table-responsive">
          <table class="result-table">
            <thead>
              <tr>
                <th>#</th>
                <th>PNU</th>
              </tr>
            </thead>
            <tbody>
      `;
      
      // 최대 100개까지만 표시
      const maxDisplay = Math.min(intersection.pnuList.length, 100);
      
      for (let i = 0; i < maxDisplay; i++) {
        html += `
          <tr>
            <td>${i + 1}</td>
            <td>${intersection.pnuList[i]}</td>
          </tr>
        `;
      }
      
      html += `
            </tbody>
          </table>
        </div>
      `;
      
      if (intersection.pnuList.length > maxDisplay) {
        html += `<p class="text-muted">총 ${intersection.pnuList.length}개 중 ${maxDisplay}개만 표시됨</p>`;
      }
      
      resultArea.innerHTML = html;
    }
  }

  /**
   * 새 필터 생성
   * @returns {Object} 새로 생성된 필터 객체
   */
  createFilter() {
    const filterId = this.filterIdCounter++;
    
    const filter = {
      id: filterId,
      type: null,
      tableName: '',
      columnName: '',
      columnType: '',
      filterParams: {},
      result: null
    };
    
    this.filters.push(filter);
    return filter;
  }

  /**
   * 필터 제거
   * @param {number} filterId 제거할 필터 ID
   * @returns {boolean} 제거 성공 여부
   */
  removeFilter(filterId) {
    console.log('필터 제거 시작:', filterId);
    
    const filterIndex = this.filters.findIndex(f => f.id === filterId);
    if (filterIndex === -1) {
      console.error('제거할 필터를 찾을 수 없음:', filterId);
      return false;
    }
    
    // 배열에서 필터 제거
    this.filters.splice(filterIndex, 1);
    console.log('필터 배열에서 제거됨, 남은 필터:', this.filters.length);
    
    // UI에서 필터 요소 제거
    const filterElement = document.getElementById(`filter-${filterId}`);
    if (filterElement) {
      filterElement.remove();
      console.log('UI에서 필터 요소 제거됨');
    } else {
      console.warn('UI에서 필터 요소를 찾을 수 없음:', filterId);
    }
    
    return true;
  }

  /**
   * ID로 필터 객체 가져오기
   * @param {number} filterId 필터 ID
   * @returns {Object|null} 필터 객체 또는 null
   */
  getFilterById(filterId) {
    return this.filters.find(f => f.id === filterId) || null;
  }

  /**
   * 필터 객체 업데이트
   * @param {number} filterId 필터 ID
   * @param {Object} updates 업데이트할 필드
   * @returns {Object|null} 업데이트된 필터 객체 또는 null
   */
  updateFilter(filterId, updates) {
    const filter = this.getFilterById(filterId);
    if (!filter) return null;
    
    Object.assign(filter, updates);
    return filter;
  }

  /**
   * 모든 테이블 목록 가져오기
   * @returns {Array<string>} 정렬된 테이블 목록
   */
  getAllTables() {
    // 'src_'로 시작하는 테이블만 필터링
    return Array.from(this.allTables)
      .filter(table => table.startsWith('src_'))
      .sort();
  }

  /**
   * 특정 테이블의 컬럼 목록 가져오기
   * @param {string} tableName 테이블명
   * @returns {Object} 숫자형, 글자형, 날짜형 컬럼 목록
   */
  getTableColumns(tableName) {
    return this.allTablesData[tableName] || { numeric: [], text: [], date: [] };
  }

  /**
   * 특정 테이블의 특정 컬럼 정보 가져오기
   * @param {string} tableName 테이블명
   * @param {string} columnName 컬럼명
   * @param {string} columnType 컬럼 타입 ('numeric', 'text' 또는 'date')
   * @returns {Object|null} 컬럼 정보 또는 null
   */
  getColumnInfo(tableName, columnName, columnType) {
    const tableData = this.allTablesData[tableName];
    if (!tableData) return null;
    
    // columnType에 따라 해당 배열에서 검색
    if (columnType === 'numeric' && tableData.numeric) {
      return tableData.numeric.find(col => col.column_name === columnName) || null;
    } else if (columnType === 'text' && tableData.text) {
      return tableData.text.find(col => col.column_name === columnName) || null;
    } else if (columnType === 'date' && tableData.date) {
      return tableData.date.find(col => col.column_name === columnName) || null;
    }
    
    return null;
  }

  /**
   * 모든 활성 필터 가져오기
   * @returns {Array} 결과가 있는 필터 목록
   */
  getActiveFilters() {
    return this.filters.filter(f => f.result !== null);
  }

  /**
   * 모든 필터 목록 가져오기
   * @returns {Array} 모든 필터 목록
   */
  getAllFilters() {
    return [...this.filters];
  }

  /**
   * 여러 필터 결과의 교집합 계산
   * @param {Array} filterResults 필터 결과 목록
   * @returns {Object} 교집합 결과
   */
  calculateFilterIntersection(filterResults) {
    if (!filterResults || filterResults.length === 0) {
      return { pnuList: [], count: 0 };
    }
    
    // 모든 필터 결과에서 PNU 수집 및 교집합 계산
    let commonPnus = null;
    
    filterResults.forEach(data => {
      if (!data || !data.pnu_list || data.pnu_list.length === 0) return;
      
      // 현재 필터의 PNU 집합
      const pnuSet = new Set(data.pnu_list.map(p => p.pnu));
      
      if (commonPnus === null) {
        // 첫 번째 필터 결과
        commonPnus = pnuSet;
      } else {
        // 교집합 계산
        commonPnus = new Set([...commonPnus].filter(pnu => pnuSet.has(pnu)));
      }
    });
    
    if (!commonPnus) {
      return { pnuList: [], count: 0 };
    }
    
    return {
      pnuList: Array.from(commonPnus),
      count: commonPnus.size
    };
  }

  /**
   * 필터 적용
   * @param {number} filterId 필터 ID
   */
  async applyFilter(filterId) {
    console.log('필터 적용 시작:', filterId);
    const filter = this.getFilterById(filterId);
    
    if (!filter) {
      console.error('필터를 찾을 수 없음:', filterId);
      return;
    }
    
    console.log('적용할 필터:', filter);

    try {
      if (!filter.tableName || !filter.columnName) {
        alert('테이블과 컬럼을 선택하세요.');
        return;
      }
      
      let result;
      
      // 필터 요소 가져오기 (DOM 직접 접근 최소화 필요 - Filter.js와 역할 분담 고려)
      const filterElement = document.getElementById(`filter-${filterId}`);
      if (!filterElement) {
        console.error('필터 요소를 찾을 수 없음:', filterId);
        return;
      }

      if (filter.columnType === 'numeric') {
        const minValueInput = filterElement.querySelector(`#minValue-${filterId}`);
        const maxValueInput = filterElement.querySelector(`#maxValue-${filterId}`);
        
        if (!minValueInput || !maxValueInput) {
          console.error('최소/최대 입력 필드를 찾을 수 없음');
          return;
        }
        
        const minValue = minValueInput.value;
        const maxValue = maxValueInput.value;
        
        if (!minValue || !maxValue) {
          alert('최소값과 최대값을 입력하세요.');
          return;
        }
        
        filter.filterParams = {
          minValue: Number(minValue),
          maxValue: Number(maxValue)
        };
        
        result = await api.applyNumericFilter(
          filter.tableName, 
          filter.columnName, 
          Number(minValue), 
          Number(maxValue)
        );

      } else if (filter.columnType === 'text') {
        const valueList = filterElement.querySelector(`#valueList-${filterId}`);
        if (!valueList) {
          console.error('값 목록 요소를 찾을 수 없음');
          return;
        }
        const checkboxes = valueList.querySelectorAll('.value-checkbox:checked');
        const selectedValues = Array.from(checkboxes).map(cb => cb.dataset.value);
        
        if (selectedValues.length === 0) {
          alert('하나 이상의 값을 선택하세요.');
          return;
        }
        filter.filterParams = { selectedValues };
        result = await api.applyTextFilter(
          filter.tableName, 
          filter.columnName, 
          selectedValues
        );

      } else if (filter.columnType === 'date') {
        const startDateInput = filterElement.querySelector(`#startDate-${filterId}`);
        const endDateInput = filterElement.querySelector(`#endDate-${filterId}`);

        if (!startDateInput || !endDateInput) {
          console.error('시작일/종료일 입력 필드를 찾을 수 없음');
          return;
        }

        const startDate = startDateInput.value;
        const endDate = endDateInput.value;

        if (!startDate || !endDate) {
          alert('시작일과 종료일을 선택하세요.');
          return;
        }

        filter.filterParams = { startDate, endDate };
        result = await api.applyDateFilter(
          filter.tableName,
          filter.columnName,
          startDate,
          endDate
        );
      } else {
        alert('올바른 컬럼 타입을 선택하세요.');
        return;
      }
      
      if (result) {
        console.log('필터 결과:', result);
        filter.result = result;
        
        // 필터 상태 UI 업데이트 (Filter.js로 이동 고려)
        const badge = filterElement.querySelector('.filter-type');
        if (badge) {
          badge.textContent = `${result.pnu_count}개`;
          badge.classList.remove('bg-secondary');
          // 성공/실패 여부에 따라 다른 클래스 적용 가능 (예: bg-success, bg-danger)
          badge.classList.add('bg-success'); 
        }
        
        // 전체 필터 적용 로직 호출 (옵셔널, 필요시)
        // await this.applyAllFilters(); 
        return result;
      }
    } catch (error) {
      console.error('필터 적용 오류:', filterId, error);
      alert(`필터 적용 중 오류가 발생했습니다: ${error.message}`);
      // UI에 오류 표시 업데이트
      const badge = document.querySelector(`#filter-${filterId} .filter-type`);
      if (badge) {
        badge.textContent = '오류';
        badge.classList.remove('bg-success', 'bg-secondary');
        badge.classList.add('bg-danger');
      }
    }
  }
} 