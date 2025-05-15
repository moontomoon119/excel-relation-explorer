// API 서버 URL
const API_URL = 'http://localhost:3000/api/pnu-filter';

// 현재 선택된 컬럼 타입 (numeric 또는 text)
let currentColumnType = null;
// 현재 선택된 컬럼 정보
let currentColumnInfo = null;

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
  // 테이블 목록 로드
  loadTables();
});

// 테이블 목록 가져오기
async function loadTables() {
  try {
    // 숫자형 컬럼 로드
    const numericResponse = await fetch(`${API_URL}/numeric-columns`);
    const numericData = await numericResponse.json();
    
    // 글자형 컬럼 로드
    const textResponse = await fetch(`${API_URL}/text-columns`);
    const textData = await textResponse.json();
    
    // 모든 테이블 목록 추출 (중복 제거)
    const allTables = new Set([
      ...numericData.data.map(col => col.table_name),
      ...textData.data.map(col => col.table_name)
    ]);
    
    // 테이블 목록 설정
    const tableSelect = document.getElementById('tableSelect');
    tableSelect.innerHTML = '<option value="">테이블 선택...</option>';
    
    Array.from(allTables).sort().forEach(table => {
      const option = document.createElement('option');
      option.value = table;
      option.textContent = table;
      tableSelect.appendChild(option);
    });
    
  } catch (error) {
    console.error('테이블 목록 로드 오류:', error);
    alert('테이블 목록을 불러오는 데 실패했습니다.');
  }
}

// 선택된 테이블의 모든 컬럼 로드
async function loadColumns() {
  const tableName = document.getElementById('tableSelect').value;
  if (!tableName) return;
  
  try {
    // 필터링 옵션 숨기기
    hideAllFilterOptions();
    
    // 숫자형 컬럼 로드
    const numericResponse = await fetch(`${API_URL}/numeric-columns/${tableName}`);
    const numericData = await numericResponse.json();
    
    // 글자형 컬럼 로드
    const textResponse = await fetch(`${API_URL}/text-columns/${tableName}`);
    const textData = await textResponse.json();
    
    // 컬럼 목록 통합
    const columnSelect = document.getElementById('columnSelect');
    columnSelect.innerHTML = '<option value="">컬럼 선택...</option>';
    
    // 숫자형 컬럼 추가
    if (numericData.data && numericData.data.length > 0) {
      const numericGroup = document.createElement('optgroup');
      numericGroup.label = '숫자형';
      
      numericData.data.forEach(col => {
        const option = document.createElement('option');
        option.value = col.column_name;
        option.textContent = `${col.column_name} (${col.data_type})`;
        option.dataset.type = 'numeric';
        numericGroup.appendChild(option);
      });
      
      columnSelect.appendChild(numericGroup);
    }
    
    // 글자형 컬럼 추가
    if (textData.data && textData.data.length > 0) {
      const textGroup = document.createElement('optgroup');
      textGroup.label = '글자형';
      
      textData.data.forEach(col => {
        const option = document.createElement('option');
        option.value = col.column_name;
        option.textContent = `${col.column_name} (${col.data_type})`;
        option.dataset.type = 'text';
        textGroup.appendChild(option);
      });
      
      columnSelect.appendChild(textGroup);
    }
    
  } catch (error) {
    console.error('컬럼 로드 오류:', error);
    alert('컬럼 목록을 불러오는 데 실패했습니다.');
  }
}

// 선택된 컬럼의 세부 정보 로드
async function loadColumnDetails() {
  const tableName = document.getElementById('tableSelect').value;
  const columnSelect = document.getElementById('columnSelect');
  const columnName = columnSelect.value;
  
  if (!tableName || !columnName) {
    hideAllFilterOptions();
    return;
  }
  
  // 선택된 옵션 요소
  const selectedOption = columnSelect.options[columnSelect.selectedIndex];
  // 컬럼 타입 (numeric 또는 text)
  currentColumnType = selectedOption.dataset.type;
  
  // 필터링 옵션 숨기기
  hideAllFilterOptions();
  
  try {
    if (currentColumnType === 'numeric') {
      // 숫자형 컬럼인 경우
      await loadNumericColumnInfo(tableName, columnName);
      // 숫자형 필터링 옵션 표시
      document.getElementById('numericFilterOptions').style.display = 'block';
    } else if (currentColumnType === 'text') {
      // 글자형 컬럼인 경우
      await loadTextColumnValues(tableName, columnName);
      // 글자형 필터링 옵션 표시
      document.getElementById('textFilterOptions').style.display = 'block';
    }
  } catch (error) {
    console.error('컬럼 세부정보 로드 오류:', error);
  }
}

// 모든 필터링 옵션 숨기기
function hideAllFilterOptions() {
  document.getElementById('numericFilterOptions').style.display = 'none';
  document.getElementById('textFilterOptions').style.display = 'none';
}

// 숫자형 컬럼 정보 로드
async function loadNumericColumnInfo(tableName, columnName) {
  try {
    const response = await fetch(`${API_URL}/numeric-columns/${tableName}`);
    const data = await response.json();
    
    const columnInfo = data.data.find(col => col.column_name === columnName);
    currentColumnInfo = columnInfo;
    
    if (columnInfo) {
      const infoDisplay = document.getElementById('columnInfoDisplay');
      infoDisplay.textContent = `범위: ${columnInfo.min_value || 'N/A'} ~ ${columnInfo.max_value || 'N/A'}, 평균: ${columnInfo.avg_value ? columnInfo.avg_value.toFixed(2) : 'N/A'}`;
      
      // 기본값 설정
      document.getElementById('minValue').value = columnInfo.min_value || '';
      document.getElementById('maxValue').value = columnInfo.max_value || '';
    }
  } catch (error) {
    console.error('숫자형 컬럼 정보 로드 오류:', error);
  }
}

// 글자형 컬럼의 고유값 로드
async function loadTextColumnValues(tableName, columnName) {
  try {
    const response = await fetch(`${API_URL}/text-values/${tableName}/${columnName}`);
    const data = await response.json();
    
    currentColumnInfo = data.data;
    const valueList = document.getElementById('valueList');
    valueList.innerHTML = '';
    
    if (data.data && data.data.value_stats) {
      data.data.value_stats.forEach(stat => {
        const div = document.createElement('div');
        div.className = 'form-check';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'form-check-input value-checkbox';
        input.value = stat.value;
        input.id = `value-${stat.value}`;
        input.setAttribute('data-value', stat.value);
        
        const label = document.createElement('label');
        label.className = 'form-check-label';
        label.htmlFor = `value-${stat.value}`;
        label.textContent = `${stat.value} (${stat.frequency})`;
        
        div.appendChild(input);
        div.appendChild(label);
        valueList.appendChild(div);
      });
    } else {
      valueList.innerHTML = '<p class="text-muted">데이터가 없습니다.</p>';
    }
  } catch (error) {
    console.error('글자형 값 로드 오류:', error);
  }
}

// 선택된 값으로 PNU 필터링
async function filterByValues() {
  const tableName = document.getElementById('tableSelect').value;
  const columnName = document.getElementById('columnSelect').value;
  
  if (!tableName || !columnName) {
    alert('테이블과 컬럼을 선택하세요.');
    return;
  }
  
  // 선택된 값 추출
  const checkboxes = document.querySelectorAll('.value-checkbox:checked');
  const selectedValues = Array.from(checkboxes).map(cb => cb.getAttribute('data-value'));
  
  if (selectedValues.length === 0) {
    alert('하나 이상의 값을 선택하세요.');
    return;
  }
  
  try {
    const response = await fetch(`${API_URL}/filter-by-values`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tableName,
        columnName,
        selectedValues
      })
    });
    
    const result = await response.json();
    displayResults(result.data);
    
  } catch (error) {
    console.error('필터링 오류:', error);
    alert('필터링 중 오류가 발생했습니다.');
  }
}

// 범위로 PNU 필터링
async function filterByRange() {
  const tableName = document.getElementById('tableSelect').value;
  const columnName = document.getElementById('columnSelect').value;
  const minValue = document.getElementById('minValue').value;
  const maxValue = document.getElementById('maxValue').value;
  
  if (!tableName || !columnName) {
    alert('테이블과 컬럼을 선택하세요.');
    return;
  }
  
  if (!minValue || !maxValue) {
    alert('최소값과 최대값을 입력하세요.');
    return;
  }
  
  try {
    const response = await fetch(`${API_URL}/filter-by-range`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tableName,
        columnName,
        minValue: Number(minValue),
        maxValue: Number(maxValue)
      })
    });
    
    const result = await response.json();
    displayResults(result.data);
    
  } catch (error) {
    console.error('필터링 오류:', error);
    alert('필터링 중 오류가 발생했습니다.');
  }
}

// 결과 표시
function displayResults(data) {
  const resultArea = document.getElementById('resultArea');
  
  if (!data || !data.pnu_list || data.pnu_list.length === 0) {
    resultArea.innerHTML = '<p class="alert alert-warning">필터링된 PNU가 없습니다.</p>';
    return;
  }
  
  let html = `
    <div class="mb-3">
      <p><strong>필터링 정보:</strong></p>
      <ul>
        <li>테이블/컬럼: ${data.table_name}.${data.column_name}</li>
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
  }
  
  html += `
        <li>필터링된 PNU 개수: ${data.pnu_count}</li>
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
  const maxDisplay = Math.min(data.pnu_list.length, 100);
  
  for (let i = 0; i < maxDisplay; i++) {
    const pnu = data.pnu_list[i];
    html += `
      <tr>
        <td>${i + 1}</td>
        <td>${pnu.pnu}</td>
      </tr>
    `;
  }
  
  html += `
        </tbody>
      </table>
    </div>
  `;
  
  if (data.pnu_list.length > maxDisplay) {
    html += `<p class="text-muted">총 ${data.pnu_list.length}개 중 ${maxDisplay}개만 표시됨</p>`;
  }
  
  resultArea.innerHTML = html;
}