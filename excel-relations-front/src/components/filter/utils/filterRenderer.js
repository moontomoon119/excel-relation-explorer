/**
 * 필터 렌더링 유틸리티
 * 필터 UI 생성 및 업데이트 관련 기능 제공
 */

import { renderNumericFilterHTML } from '../types/NumericFilter.js';
import { renderTextFilterHTML } from '../types/TextFilter.js';
import { renderDateFilterHTML } from '../types/DateFilter.js';

/**
 * 필터 기본 HTML 템플릿 생성
 * @param {number} filterId 필터 ID
 * @returns {string} 필터 HTML
 */
export function createFilterHTML(filterId) {
  return `
    <div class="filter-card" id="filter-${filterId}">
      <div class="filter-header">
        <h6 class="filter-title">
          <span class="filter-name-wrapper">
            <span class="filter-name">새 필터</span>
            <span class="badge bg-secondary filter-type"></span>
          </span>
        </h6>
        <div class="d-flex">
          <button class="btn btn-sm btn-outline-secondary apply-filter-btn me-1" title="필터 적용" style="padding: 0.2rem 0.4rem;">
            <i class="fas fa-check"></i>
          </button>
          <button class="btn btn-sm btn-outline-secondary remove-filter-btn" title="필터 삭제" style="padding: 0.2rem 0.4rem;">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
      <div class="filter-body">
        <!-- 테이블 및 컬럼 선택 -->
        <div class="row mb-3">
          <div class="col-md-6">
            <div class="form-group">
              <label for="tableSelect-${filterId}" class="small fw-bold">테이블 선택</label>
              <select id="tableSelect-${filterId}" class="form-control form-control-sm tableSelect">
                <option value="">테이블 선택...</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="columnSelect-${filterId}" class="small fw-bold">컬럼 선택</label>
              <select id="columnSelect-${filterId}" class="form-control form-control-sm columnSelect">
                <option value="">컬럼 선택...</option>
              </select>
            </div>
          </div>
        </div>

        <!-- 필터 옵션 영역: 타입별 필터 UI가 여기에 삽입됨 -->
        ${renderNumericFilterHTML(filterId)}
        ${renderTextFilterHTML(filterId)}
        ${renderDateFilterHTML(filterId)}
      </div>
    </div>
  `;
}

/**
 * 필터 제목 업데이트
 * @param {Object} filter 필터 객체
 * @param {HTMLElement} nameElement 필터 이름 요소
 * @param {HTMLElement} typeElement 필터 타입 요소
 */
export function updateFilterTitle(filter, nameElement, typeElement) {
  if (filter.tableName && filter.columnName) {
    // 'src_' 접두사 제거
    const displayTableName = filter.tableName.startsWith('src_') 
      ? filter.tableName.substring(4) 
      : filter.tableName;
    
    nameElement.textContent = `${displayTableName}.${filter.columnName}`;
    
    if (filter.columnType === 'numeric') {
      typeElement.textContent = '숫자형';
      typeElement.className = 'badge bg-primary filter-type';
    } else if (filter.columnType === 'text') {
      typeElement.textContent = '글자형';
      typeElement.className = 'badge bg-success filter-type';
    } else if (filter.columnType === 'date') {
      typeElement.textContent = '날짜형';
      typeElement.className = 'badge bg-info filter-type';
    }
  } else if (filter.tableName) {
    // 'src_' 접두사 제거
    nameElement.textContent = filter.tableName.startsWith('src_') 
      ? filter.tableName.substring(4) 
      : filter.tableName;
    typeElement.textContent = '';
  } else {
    nameElement.textContent = '새 필터';
    typeElement.textContent = '';
  }
}

/**
 * 테이블 선택 드롭다운을 채웁니다.
 * @param {Array<string>} tables 테이블 목록
 * @param {HTMLSelectElement} selectElement <select> 요소
 */
export function populateTableSelect(tables, selectElement) {
  selectElement.innerHTML = '<option value="">테이블 선택...</option>';
  
  tables.forEach(table => {
    const option = document.createElement('option');
    option.value = table;
    // 'src_' 접두사를 제거하여 표시
    option.textContent = table.startsWith('src_') ? table.substring(4) : table;
    selectElement.appendChild(option);
  });
}

/**
 * 컬럼 선택 드롭다운을 채웁니다.
 * @param {Object} tableData 테이블 컬럼 데이터 { numeric: [], text: [], date: [] }
 * @param {HTMLSelectElement} selectElement <select> 요소
 */
export function populateColumnSelect(tableData, selectElement) {
  selectElement.innerHTML = '<option value="">컬럼 선택...</option>';
  
  // 숫자형 컬럼 추가
  if (tableData.numeric && tableData.numeric.length > 0) {
    const numericGroup = document.createElement('optgroup');
    numericGroup.label = '숫자형';
    
    tableData.numeric.forEach(col => {
      const option = document.createElement('option');
      option.value = col.column_name;
      option.textContent = `${col.column_name} (${col.data_type})`;
      option.dataset.type = 'numeric';
      numericGroup.appendChild(option);
    });
    
    selectElement.appendChild(numericGroup);
  }
  
  // 글자형 컬럼 추가
  if (tableData.text && tableData.text.length > 0) {
    const textGroup = document.createElement('optgroup');
    textGroup.label = '글자형';
    
    tableData.text.forEach(col => {
      const option = document.createElement('option');
      option.value = col.column_name;
      option.textContent = `${col.column_name} (${col.data_type})`;
      option.dataset.type = 'text';
      textGroup.appendChild(option);
    });
    
    selectElement.appendChild(textGroup);
  }
  
  // 날짜형 컬럼 추가
  if (tableData.date && tableData.date.length > 0) {
    const dateGroup = document.createElement('optgroup');
    dateGroup.label = '날짜형';
    
    tableData.date.forEach(col => {
      const option = document.createElement('option');
      option.value = col.column_name;
      option.textContent = `${col.column_name} (${col.data_type})`;
      option.dataset.type = 'date';
      dateGroup.appendChild(option);
    });
    
    selectElement.appendChild(dateGroup);
  }
} 