/**
 * UI 관련 유틸리티 함수
 */

/**
 * 결과 영역에 필터링 결과를 표시합니다.
 * @param {Array} results 필터 결과 목록
 * @param {Array} pnuList 교집합 PNU 목록
 * @param {number} pnuCount 교집합 PNU 개수
 * @param {HTMLElement} resultArea 결과를 표시할 DOM 요소
 */
export function displayResults(results, pnuList, pnuCount, resultArea) {
  if (!results || results.length === 0 || !pnuList || pnuList.length === 0) {
    resultArea.innerHTML = '<p class="alert alert-warning">필터링된 결과가 없습니다.</p>';
    return;
  }
  
  // 결과 정보 표시
  let html = `
    <div class="mb-3">
      <p><strong>필터링 결과:</strong></p>
      <ul>
        <li>적용된 필터 수: ${results.length}</li>
        <li>최종 PNU 개수: ${pnuCount}</li>
      </ul>
    </div>
    
    <div class="accordion mb-3" id="filterAccordion">
  `;
  
  // 각 필터 정보 아코디언으로 표시
  results.forEach((data, index) => {
    // 'src_' 접두사 제거하여 표시
    const displayTableName = data.table_name.startsWith('src_') 
      ? data.table_name.substring(4) 
      : data.table_name;
    
    html += `
      <div class="accordion-item">
        <h2 class="accordion-header" id="filter-heading-${index}">
          <button class="accordion-button ${index > 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" 
                  data-bs-target="#filter-collapse-${index}" aria-expanded="${index === 0 ? 'true' : 'false'}" 
                  aria-controls="filter-collapse-${index}">
            필터 ${index + 1}: ${displayTableName}.${data.column_name} (${data.pnu_count}개)
          </button>
        </h2>
        <div id="filter-collapse-${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" 
             aria-labelledby="filter-heading-${index}" data-bs-parent="#filterAccordion">
          <div class="accordion-body">
            <ul>
              <li>테이블/컬럼: ${displayTableName}.${data.column_name}</li>
    `;
    
    if (data.min_value !== undefined) {
      // 숫자형 필터링 결과
      html += `
              <li>전체 범위: ${data.min_value} ~ ${data.max_value}</li>
              <li>필터 범위: ${data.filter_min} ~ ${data.filter_max}</li>
      `;
    } else if (data.selected_values) {
      // 글자형 필터링 결과
      html += `
              <li>선택된 값: ${data.selected_values.join(', ')}</li>
      `;
    } else if (data.start_date && data.end_date) {
      // 날짜형 필터링 결과
      html += `
              <li>전체 기간: ${formatDate(data.min_date)} ~ ${formatDate(data.max_date)}</li>
              <li>필터 기간: ${formatDate(data.start_date)} ~ ${formatDate(data.end_date)}</li>
      `;
    }
    
    html += `
              <li>필터링된 PNU 개수: ${data.pnu_count}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  });
  
  html += `
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
  const maxDisplay = Math.min(pnuList.length, 100);
  
  for (let i = 0; i < maxDisplay; i++) {
    html += `
      <tr>
        <td>${i + 1}</td>
        <td>${pnuList[i]}</td>
      </tr>
    `;
  }
  
  html += `
        </tbody>
      </table>
    </div>
  `;
  
  if (pnuList.length > maxDisplay) {
    html += `<p class="text-muted">총 ${pnuList.length}개 중 ${maxDisplay}개만 표시됨</p>`;
  }
  
  resultArea.innerHTML = html;
  
  // Bootstrap의 아코디언 스크립트 추가 (필요한 경우)
  ensureBootstrapScriptLoaded();
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

/**
 * 고유값 목록을 표시합니다.
 * @param {Array} valueStats 고유값 통계 데이터
 * @param {HTMLElement} valueListElement 값 목록을 표시할 DOM 요소
 * @param {number} filterId 필터 ID
 */
export function displayTextValues(valueStats, valueListElement, filterId) {
  valueListElement.innerHTML = '';
  
  if (!valueStats || valueStats.length === 0) {
    valueListElement.innerHTML = '<p class="text-muted">데이터가 없습니다.</p>';
    return;
  }
  
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
    label.className = 'form-check-label';
    label.htmlFor = `value-${filterId}-${stat.value}`;
    label.textContent = `${stat.value} (${stat.frequency})`;
    
    div.appendChild(input);
    div.appendChild(label);
    valueListElement.appendChild(div);
  });
}

/**
 * 숫자형 컬럼 정보를 표시합니다.
 * @param {Object} columnInfo 컬럼 정보
 * @param {HTMLElement} infoElement 정보를 표시할 DOM 요소
 * @param {HTMLInputElement} minValueInput 최소값 입력 요소
 * @param {HTMLInputElement} maxValueInput 최대값 입력 요소
 */
export function displayNumericColumnInfo(columnInfo, infoElement, minValueInput, maxValueInput) {
  if (!columnInfo) {
    infoElement.textContent = '';
    return;
  }
  
  infoElement.textContent = `범위: ${columnInfo.min_value || 'N/A'} ~ ${columnInfo.max_value || 'N/A'}, 평균: ${columnInfo.avg_value ? columnInfo.avg_value.toFixed(2) : 'N/A'}`;
  
  // 기본값 설정
  minValueInput.value = columnInfo.min_value || '';
  maxValueInput.value = columnInfo.max_value || '';
}

/**
 * 날짜형 컬럼 정보를 표시합니다.
 * @param {Object} columnInfo 컬럼 정보
 * @param {HTMLElement} infoElement 정보를 표시할 DOM 요소
 * @param {HTMLInputElement} startDateInput 시작일 입력 요소
 * @param {HTMLInputElement} endDateInput 종료일 입력 요소
 */
export function displayDateColumnInfo(columnInfo, infoElement, startDateInput, endDateInput) {
  if (!columnInfo) {
    infoElement.textContent = '';
    return;
  }
  
  // 날짜 형식 변환
  const minDate = formatDate(columnInfo.min_date);
  const maxDate = formatDate(columnInfo.max_date);
  
  infoElement.textContent = `기간: ${minDate || 'N/A'} ~ ${maxDate || 'N/A'}`;
  
  // 기본값 설정
  if (columnInfo.min_date) {
    startDateInput.value = formatDateForInput(columnInfo.min_date);
  }
  
  if (columnInfo.max_date) {
    endDateInput.value = formatDateForInput(columnInfo.max_date);
  }
  
  // min/max 속성 설정
  if (columnInfo.min_date) {
    startDateInput.min = formatDateForInput(columnInfo.min_date);
    endDateInput.min = formatDateForInput(columnInfo.min_date);
  }
  
  if (columnInfo.max_date) {
    startDateInput.max = formatDateForInput(columnInfo.max_date);
    endDateInput.max = formatDateForInput(columnInfo.max_date);
  }
}

/**
 * 필터 제목을 업데이트합니다.
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
 * 날짜를 YYYY-MM-DD 형식으로 포맷팅합니다.
 * @param {string|Date} date 날짜 문자열 또는 Date 객체
 * @returns {string} 포맷팅된 날짜 문자열
 */
export function formatDate(date) {
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
export function formatDateForInput(date) {
  return formatDate(date);
}

/**
 * Bootstrap 스크립트가 로드되었는지 확인하고, 없으면 로드합니다.
 */
function ensureBootstrapScriptLoaded() {
  if (!document.querySelector('script[src*="bootstrap.bundle.min.js"]')) {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
    document.body.appendChild(scriptTag);
  }
} 