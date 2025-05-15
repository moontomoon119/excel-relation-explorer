/**
 * 텍스트형 필터 모듈
 * 고유값 선택을 위한 체크박스 목록 관련 기능 제공
 */

import * as api from '../../../services/api.js';

/**
 * 텍스트형 필터 렌더링 HTML 생성
 * @param {number} filterId 필터 ID
 * @returns {string} 필터 HTML
 */
export function renderTextFilterHTML(filterId) {
  return `
    <div id="textFilterOptions-${filterId}" class="filter-options text-options">
      <div class="form-group">
        <label class="small fw-bold mb-2">고유값 선택</label>
        <div id="valueList-${filterId}" class="border p-2 value-list" style="max-height: 200px; overflow-y: auto;">
          <!-- 값 목록이 여기에 표시됩니다 -->
        </div>
      </div>
    </div>
  `;
}

/**
 * 텍스트 데이터 로드 및 UI 설정
 * @param {Object} filter 필터 객체
 * @param {HTMLElement} element 필터 요소
 */
export async function setupTextFilter(filter, element) {
  try {
    const filterId = filter.id;
    const valueList = element.querySelector(`#valueList-${filterId}`);
    const textOptions = element.querySelector('.text-options');
    
    if (!valueList) {
      console.error('값 목록 요소를 찾을 수 없습니다.');
      return;
    }
    
    valueList.innerHTML = '<p class="text-muted">값 로딩 중...</p>';
    
    try {
      // API 호출해서 고유값 가져오기
      const columnInfo = await api.loadTextColumnValues(filter.tableName, filter.columnName);
      
      // 컬럼 정보 캐싱
      filter.columnInfo = columnInfo;
      
      // UI 업데이트
      if (columnInfo && columnInfo.value_stats) {
        displayTextValues(columnInfo.value_stats, valueList, filterId);
      } else {
        valueList.innerHTML = '<p class="text-muted">데이터가 없습니다.</p>';
      }
      
      // 옵션 표시
      if (textOptions) textOptions.classList.add('active');
    } catch (error) {
      console.error('글자형 값 로드 오류:', error);
      valueList.innerHTML = '<p class="text-danger">데이터 로드 중 오류가 발생했습니다.</p>';
    }
  } catch (error) {
    console.error('텍스트형 필터 설정 오류:', error);
  }
}

/**
 * 고유값 목록을 표시합니다.
 * @param {Array} valueStats 고유값 통계 데이터
 * @param {HTMLElement} valueListElement 값 목록을 표시할 DOM 요소
 * @param {number} filterId 필터 ID
 */
function displayTextValues(valueStats, valueListElement, filterId) {
  valueListElement.innerHTML = '';
  
  if (!valueStats || valueStats.length === 0) {
    valueListElement.innerHTML = '<p class="text-muted">데이터가 없습니다.</p>';
    return;
  }
  
  // 고유값 추가
  valueStats.forEach(stat => {
    const div = document.createElement('div');
    div.className = 'form-check';
    
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'form-check-input value-checkbox';
    input.value = stat.value;
    input.id = `value-${filterId}-${stat.value}`;
    input.dataset.value = stat.value;
    
    const label = document.createElement('label');
    label.className = 'form-check-label small';
    label.htmlFor = `value-${filterId}-${stat.value}`;
    label.textContent = `${stat.value} (${stat.frequency})`;
    
    div.appendChild(input);
    div.appendChild(label);
    valueListElement.appendChild(div);
  });
}

/**
 * 텍스트형 필터 적용
 * @param {Object} filter 필터 객체
 * @param {HTMLElement} element 필터 요소
 * @returns {Promise<Object>} API 응답 결과
 */
export async function applyTextFilter(filter, element) {
  const filterId = filter.id;
  const valueList = element.querySelector(`#valueList-${filterId}`);
  
  if (!valueList) {
    throw new Error('값 목록을 찾을 수 없습니다.');
  }
  
  const checkboxes = valueList.querySelectorAll('.value-checkbox:checked');
  const selectedValues = Array.from(checkboxes).map(cb => cb.dataset.value);
  
  if (selectedValues.length === 0) {
    throw new Error('하나 이상의 값을 선택하세요.');
  }
  
  // 필터 파라미터 저장
  filter.filterParams = { selectedValues };
  
  // API 호출
  return await api.applyTextFilter(
    filter.tableName, 
    filter.columnName, 
    selectedValues
  );
} 