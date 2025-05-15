/**
 * 날짜형 필터 모듈
 * 날짜 범위 선택을 위한 기능 제공
 */

import * as api from '../../../services/api.js';

/**
 * 날짜형 필터 렌더링 HTML 생성
 * @param {number} filterId 필터 ID
 * @returns {string} 필터 HTML
 */
export function renderDateFilterHTML(filterId) {
  return `
    <div id="dateFilterOptions-${filterId}" class="filter-options date-options">
      <div class="form-group">
        <label class="small fw-bold">날짜 범위</label>
        <div id="dateInfoDisplay-${filterId}" class="mb-2 small text-muted"></div>
        <div class="row">
          <div class="col-md-6">
            <label for="startDate-${filterId}" class="form-label small">시작일</label>
            <input type="date" id="startDate-${filterId}" class="form-control form-control-sm" placeholder="시작일">
          </div>
          <div class="col-md-6">
            <label for="endDate-${filterId}" class="form-label small">종료일</label>
            <input type="date" id="endDate-${filterId}" class="form-control form-control-sm" placeholder="종료일">
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * 날짜형 컬럼 정보 로드
 * @param {Object} filter 필터 객체
 * @param {HTMLElement} element 필터 요소
 */
export async function setupDateFilter(filter, element) {
  try {
    const filterId = filter.id;
    const dateInfoDisplay = element.querySelector(`#dateInfoDisplay-${filterId}`);
    const startDateInput = element.querySelector(`#startDate-${filterId}`);
    const endDateInput = element.querySelector(`#endDate-${filterId}`);
    const dateOptions = element.querySelector('.date-options');
    
    if (dateInfoDisplay) dateInfoDisplay.textContent = '정보 로딩 중...';
    
    try {
      // API 호출해서 날짜 정보 가져오기
      const columnInfo = await api.loadDateColumnInfo(filter.tableName, filter.columnName);
      
      // 컬럼 정보 캐싱
      filter.columnInfo = columnInfo;
      
      if (columnInfo) {
        // 날짜 표시용 형식 변환
        const minDate = formatDate(columnInfo.min_date);
        const maxDate = formatDate(columnInfo.max_date);
        
        // 정보 표시
        if (dateInfoDisplay) {
          dateInfoDisplay.textContent = `기간: ${minDate || 'N/A'} ~ ${maxDate || 'N/A'}`;
        }
        
        // 값 설정
        if (startDateInput && endDateInput) {
          if (columnInfo.min_date) {
            const formattedMinDate = formatDateForInput(columnInfo.min_date);
            startDateInput.value = formattedMinDate;
            startDateInput.min = formattedMinDate;
            endDateInput.min = formattedMinDate;
          }
          
          if (columnInfo.max_date) {
            const formattedMaxDate = formatDateForInput(columnInfo.max_date);
            endDateInput.value = formattedMaxDate;
            startDateInput.max = formattedMaxDate;
            endDateInput.max = formattedMaxDate;
          }
        }
      } else {
        if (dateInfoDisplay) dateInfoDisplay.textContent = '날짜 정보를 불러올 수 없습니다.';
      }
      
      // 옵션 표시
      if (dateOptions) dateOptions.classList.add('active');
    } catch (error) {
      console.error('날짜형 컬럼 정보 로드 오류:', error);
      if (dateInfoDisplay) dateInfoDisplay.textContent = '오류 발생: 날짜 정보를 불러올 수 없습니다.';
    }
  } catch (error) {
    console.error('날짜형 필터 설정 오류:', error);
  }
}

/**
 * 날짜를 YYYY-MM-DD 형식으로 포맷팅합니다.
 * @param {string|Date} date 날짜 문자열 또는 Date 객체
 * @returns {string} 포맷팅된 날짜 문자열
 */
function formatDate(date) {
  if (!date) return '';
  
  const dateObj = date instanceof Date ? date : new Date(date);
  
  if (isNaN(dateObj.getTime())) {
    return date; // 유효하지 않은 날짜는 원본 반환
  }
  
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

/**
 * 날짜를 input[type=date]에 사용할 수 있는 YYYY-MM-DD 형식으로 포맷팅합니다.
 * @param {string|Date} date 날짜 문자열 또는 Date 객체
 * @returns {string} 포맷팅된 날짜 문자열
 */
function formatDateForInput(date) {
  return formatDate(date);
}

/**
 * 날짜형 필터 적용
 * @param {Object} filter 필터 객체
 * @param {HTMLElement} element 필터 요소
 * @returns {Promise<Object>} API 응답 결과
 */
export async function applyDateFilter(filter, element) {
  const filterId = filter.id;
  const startDateInput = element.querySelector(`#startDate-${filterId}`);
  const endDateInput = element.querySelector(`#endDate-${filterId}`);
  
  if (!startDateInput || !endDateInput) {
    throw new Error('날짜 입력 필드를 찾을 수 없습니다.');
  }
  
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;
  
  if (!startDate || !endDate) {
    throw new Error('시작일과 종료일을 선택하세요.');
  }
  
  if (new Date(startDate) > new Date(endDate)) {
    throw new Error('시작일은 종료일보다 이전 날짜여야 합니다.');
  }
  
  // 필터 파라미터 저장
  filter.filterParams = { startDate, endDate };
  
  // API 호출
  return await api.applyDateFilter(
    filter.tableName,
    filter.columnName,
    startDate,
    endDate
  );
} 