/**
 * 숫자형 필터 모듈
 * 값 범위 선택을 위한 슬라이더 및 숫자 입력 관련 기능 제공
 */

import * as api from '../../../services/api.js';

/**
 * 숫자형 필터 렌더링 HTML 생성
 * @param {number} filterId 필터 ID
 * @returns {string} 필터 HTML
 */
export function renderNumericFilterHTML(filterId) {
  return `
    <div id="numericFilterOptions-${filterId}" class="filter-options numeric-options">
      <div class="form-group">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <label class="small fw-bold">값 범위</label>
          <span id="columnInfoDisplay-${filterId}" class="small text-muted"></span>
        </div>
        
        <!-- 범위 슬라이더 -->
        <div class="range-slider-container mb-3">
          <div class="position-relative">
            <div class="range-slider position-relative" style="height: 20px;">
              <div class="slider-track" style="position: absolute; top: 9px; height: 3px; width: 100%; background-color: #dee2e6;"></div>
              <div class="slider-selection" style="position: absolute; top: 9px; height: 3px; background-color: #007bff; border-radius: 2px;"></div>
              <input type="range" id="minValue-${filterId}" class="form-range position-absolute" style="pointer-events: none; z-index: 2; opacity: 0.8;" min="" max="" step="any">
              <input type="range" id="maxValue-${filterId}" class="form-range position-absolute" style="pointer-events: none; z-index: 2; opacity: 0.8;" min="" max="" step="any">
              <div class="slider-touch-area" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"></div>
            </div>
          </div>
          
          <!-- 값 표시 영역 (슬라이더 아래) -->
          <div class="d-flex justify-content-between mt-2">
            <input type="number" id="minValueInput-${filterId}" class="form-control form-control-sm" placeholder="최소값" style="max-width: 100px; text-align: center;">
            <input type="number" id="maxValueInput-${filterId}" class="form-control form-control-sm" placeholder="최대값" style="max-width: 100px; text-align: center;">
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * 숫자형 컬럼 정보 로드 및 설정
 * @param {Object} filter 필터 객체
 * @param {HTMLElement} element 필터 요소
 * @param {Object} columnInfo 컬럼 정보
 */
export function setupNumericFilter(filter, element, columnInfo) {
  try {
    const filterId = filter.id;
    
    // UI 요소 참조 가져오기
    const minValueInput = element.querySelector(`#minValueInput-${filterId}`);
    const maxValueInput = element.querySelector(`#maxValueInput-${filterId}`);
    const minValueSlider = element.querySelector(`#minValue-${filterId}`);
    const maxValueSlider = element.querySelector(`#maxValue-${filterId}`);
    const columnInfoDisplay = element.querySelector(`#columnInfoDisplay-${filterId}`);
    const sliderSelection = element.querySelector('.slider-selection');
    const sliderTouchArea = element.querySelector('.slider-touch-area');
    const numericOptions = element.querySelector('.numeric-options');
    
    if (!columnInfo) {
      if (columnInfoDisplay) columnInfoDisplay.textContent = '컬럼 정보를 불러올 수 없습니다.';
      return;
    }
    
    // UI 업데이트 (기본 정보 표시)
    if (columnInfoDisplay) {
      columnInfoDisplay.textContent = `평균: ${columnInfo.avg_value ? columnInfo.avg_value.toFixed(2) : 'N/A'}`;
    }
    
    // 슬라이더 설정
    let minVal = columnInfo.min_value || 0;
    let maxVal = columnInfo.max_value || 100;
    
    // 값이 너무 크면 스케일 조정 (5자리 이내로 보이도록)
    const needsScaling = maxVal > 99999 || Math.abs(minVal) > 99999;
    let scaleLabel = '';
    let scaleFactor = 1;
    
    if (needsScaling) {
      if (maxVal >= 1000000000) { // 10억 이상
        scaleFactor = 1000000000;
        scaleLabel = '10억 단위';
        minVal = minVal / scaleFactor;
        maxVal = maxVal / scaleFactor;
      } else if (maxVal >= 1000000) { // 백만 이상
        scaleFactor = 1000000;
        scaleLabel = '백만 단위';
        minVal = minVal / scaleFactor;
        maxVal = maxVal / scaleFactor;
      } else if (maxVal >= 1000) { // 천 이상
        scaleFactor = 1000;
        scaleLabel = '천 단위';
        minVal = minVal / scaleFactor;
        maxVal = maxVal / scaleFactor;
      }
      
      // 스케일 정보 표시
      if (columnInfoDisplay && needsScaling) {
        columnInfoDisplay.textContent += ` (${scaleLabel})`;
      }
    }
    
    const range = maxVal - minVal;
    
    // 최소값/최대값 슬라이더 설정
    if (minValueSlider && maxValueSlider) {
      minValueSlider.min = minVal;
      minValueSlider.max = maxVal;
      minValueSlider.value = minVal;
      minValueSlider.step = range / 100; // 100단계로 나누기
      
      maxValueSlider.min = minVal;
      maxValueSlider.max = maxVal;
      maxValueSlider.value = maxVal;
      maxValueSlider.step = range / 100; // 100단계로 나누기
    }
    
    // 입력 필드 초기값 설정
    if (minValueInput && maxValueInput) {
      minValueInput.value = minVal;
      maxValueInput.value = maxVal;
      minValueInput.min = minVal;
      minValueInput.max = maxVal;
      maxValueInput.min = minVal;
      maxValueInput.max = maxVal;
    }
    
    // 슬라이더 선택 영역 업데이트 함수
    const updateSliderSelection = () => {
      if (sliderSelection) {
        const minPercent = ((minValueSlider.value - minVal) / range) * 100;
        const maxPercent = ((maxValueSlider.value - minVal) / range) * 100;
        sliderSelection.style.left = `${minPercent}%`;
        sliderSelection.style.width = `${maxPercent - minPercent}%`;
      }
    };
    
    updateSliderSelection(); // 초기 업데이트
    
    // 슬라이더 컨트롤 개선을 위한 터치 영역 설정
    if (sliderTouchArea) {
      let currentlyDragging = null; // 'min' 또는 'max' 또는 null
      
      // 어떤 슬라이더를 활성화할지 결정하는 함수
      const determineSlider = (e) => {
        const rect = sliderTouchArea.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const position = x / width;
        
        const minPos = (minValueSlider.value - minVal) / range;
        const maxPos = (maxValueSlider.value - minVal) / range;
        
        // 두 슬라이더 중 어디에 가까운지 계산
        const distToMin = Math.abs(position - minPos);
        const distToMax = Math.abs(position - maxPos);
        
        // 더 가까운 슬라이더 선택 (또는 이미 드래그 중인 경우 해당 슬라이더 계속 사용)
        return currentlyDragging || (distToMin <= distToMax ? 'min' : 'max');
      };
      
      // 슬라이더 위치 업데이트 함수
      const updateSlider = (e) => {
        if (!currentlyDragging) return;
        
        const rect = sliderTouchArea.getBoundingClientRect();
        const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
        const percentage = x / rect.width;
        
        // 값 계산
        const newValue = minVal + percentage * range;
        const roundedValue = Math.round(newValue * 100) / 100; // 소수점 둘째 자리까지
        
        if (currentlyDragging === 'min') {
          const maxValue = parseFloat(maxValueSlider.value);
          minValueSlider.value = Math.min(roundedValue, maxValue);
          if (minValueInput) minValueInput.value = minValueSlider.value;
        } else {
          const minValue = parseFloat(minValueSlider.value);
          maxValueSlider.value = Math.max(roundedValue, minValue);
          if (maxValueInput) maxValueInput.value = maxValueSlider.value;
        }
        
        updateSliderSelection();
      };
      
      // 터치 이벤트 설정
      sliderTouchArea.addEventListener('mousedown', (e) => {
        currentlyDragging = determineSlider(e);
        updateSlider(e);
        
        // 마우스 이동 및 업 이벤트
        const onMouseMove = (moveEvent) => updateSlider(moveEvent);
        const onMouseUp = () => {
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
          currentlyDragging = null;
        };
        
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      });
    }
    
    // === 이벤트 리스너 추가 ===
    if (minValueSlider) {
      minValueSlider.addEventListener('input', () => {
        // 최소값이 최대값보다 커지지 않도록
        if (parseFloat(minValueSlider.value) > parseFloat(maxValueSlider.value)) {
          minValueSlider.value = maxValueSlider.value;
        }
        if (minValueInput) minValueInput.value = minValueSlider.value;
        updateSliderSelection();
      });
    }
    
    if (maxValueSlider) {
      maxValueSlider.addEventListener('input', () => {
        // 최대값이 최소값보다 작아지지 않도록
        if (parseFloat(maxValueSlider.value) < parseFloat(minValueSlider.value)) {
          maxValueSlider.value = minValueSlider.value;
        }
        if (maxValueInput) maxValueInput.value = maxValueSlider.value;
        updateSliderSelection();
      });
    }
    
    if (minValueInput) {
      minValueInput.addEventListener('change', () => {
        let val = parseFloat(minValueInput.value);
        
        // 범위 내로 제한
        if (val < minVal) val = minVal;
        if (val > maxVal) val = maxVal;
        
        // 최소값이 최대값보다 커지지 않도록
        if (val > parseFloat(maxValueInput.value)) {
          val = parseFloat(maxValueInput.value);
        }
        
        minValueInput.value = val;
        if (minValueSlider) minValueSlider.value = val;
        updateSliderSelection();
      });
    }
    
    if (maxValueInput) {
      maxValueInput.addEventListener('change', () => {
        let val = parseFloat(maxValueInput.value);
        
        // 범위 내로 제한
        if (val < minVal) val = minVal;
        if (val > maxVal) val = maxVal;
        
        // 최대값이 최소값보다 작아지지 않도록
        if (val < parseFloat(minValueInput.value)) {
          val = parseFloat(minValueInput.value);
        }
        
        maxValueInput.value = val;
        if (maxValueSlider) maxValueSlider.value = val;
        updateSliderSelection();
      });
    }
    
    // 옵션 표시
    if (numericOptions) numericOptions.classList.add('active');
    
    // 필터 객체에 스케일 정보 저장 (나중에 API 호출 시 사용)
    filter.numericScale = {
      factor: scaleFactor,
      needsScaling: needsScaling
    };
    
  } catch (error) {
    console.error('숫자형 필터 설정 오류:', error);
  }
}

/**
 * 숫자형 필터 적용
 * @param {Object} filter 필터 객체
 * @param {HTMLElement} element 필터 요소
 * @returns {Promise<Object>} API 응답 결과
 */
export async function applyNumericFilter(filter, element) {
  const filterId = filter.id;
  
  // 입력 필드에서 값 가져오기
  const minValueInput = element.querySelector(`#minValueInput-${filterId}`);
  const maxValueInput = element.querySelector(`#maxValueInput-${filterId}`);
  const minValueSlider = element.querySelector(`#minValue-${filterId}`);
  const maxValueSlider = element.querySelector(`#maxValue-${filterId}`);
  
  let minValue = minValueInput ? minValueInput.value : (minValueSlider ? minValueSlider.value : null);
  let maxValue = maxValueInput ? maxValueInput.value : (maxValueSlider ? maxValueSlider.value : null);
  
  if (!minValue || !maxValue) {
    throw new Error('최소값과 최대값을 입력하세요.');
  }
  
  // 스케일링 된 값이라면 원래 값으로 복원
  const scaleInfo = filter.numericScale || { factor: 1, needsScaling: false };
  if (scaleInfo.needsScaling) {
    minValue = parseFloat(minValue) * scaleInfo.factor;
    maxValue = parseFloat(maxValue) * scaleInfo.factor;
  }
  
  // 필터 파라미터 저장
  filter.filterParams = {
    minValue: Number(minValue),
    maxValue: Number(maxValue)
  };
  
  // API 호출
  return await api.applyNumericFilter(
    filter.tableName, 
    filter.columnName, 
    minValue, 
    maxValue
  );
} 