/**
 * 평가 지수 설정 컴포넌트
 * 아이소크론맵 기반 평가 지수 설정을 관리합니다.
 */

import IsochroneApiService from '../../services/IsochroneApiService.js';
import eventBus from '../../utils/eventBus.js';
import { API_CONFIG } from '../../core/config.js';

export default class IndexSettingComponent {
  /**
   * 평가 지수 설정 컴포넌트 생성
   * @param {HTMLElement} container 컴포넌트를 추가할 컨테이너
   * @param {IsochroneApiService} apiService API 서비스 인스턴스
   */
  constructor(container, apiService) {
    this.container = container;
    
    // API 서비스 확인 및 설정
    if (!apiService) {
      console.warn('API 서비스가 전달되지 않아 새로 생성합니다');
      this.apiService = new IsochroneApiService();
    } else {
      this.apiService = apiService;
    }
    
    // API 메서드 디버깅 로그
    console.log('IndexSettingComponent - API 서비스 설정됨:', this.apiService);
    console.log('getGridTables 메서드 존재 여부:', !!this.apiService.getGridTables);
    console.log('getTableColumns 메서드 존재 여부:', !!this.apiService.getTableColumns);
    
    // IsochroneApiService에 필요한 메서드가 없는 경우 대체 메서드 구현
    if (typeof this.apiService.getGridTables !== 'function') {
      console.warn('getGridTables 메서드가 없어 대체 메서드를 사용합니다');
      this.apiService.getGridTables = this.fallbackGetGridTables.bind(this);
    }
    
    if (typeof this.apiService.getTableColumns !== 'function') {
      console.warn('getTableColumns 메서드가 없어 대체 메서드를 사용합니다');
      this.apiService.getTableColumns = this.fallbackGetTableColumns.bind(this);
    }
    
    this.settings = [];
    this.nextIndex = 1;
    this.tables = []; // 테이블 목록
    this.columns = []; // 현재 선택된 테이블의 컬럼 목록
    
    this.init();
  }
  
  /**
   * 대체 테이블 목록 조회 메서드
   * @returns {Promise<object>} 테이블 목록
   */
  async fallbackGetGridTables() {
    console.log('대체 getGridTables 메서드 실행');
    try {
      const baseUrl = API_CONFIG.BASE_URL;
      const url = `${baseUrl}/isochrone/grid-tables`;
      
      console.log(`테이블 목록 API 요청: ${url}`);
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`API 오류 (${response.status}): ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('테이블 목록 API 응답:', data);
      return data;
    } catch (error) {
      console.error('대체 테이블 목록 API 요청 실패:', error);
      throw error;
    }
  }
  
  /**
   * 대체 테이블 컬럼 조회 메서드
   * @param {string} tableName 테이블 이름
   * @returns {Promise<object>} 컬럼 목록
   */
  async fallbackGetTableColumns(tableName) {
    console.log(`대체 getTableColumns 메서드 실행: ${tableName}`);
    try {
      const baseUrl = API_CONFIG.BASE_URL;
      const url = `${baseUrl}/isochrone/columns/${encodeURIComponent(tableName)}`;
      
      console.log(`컬럼 목록 API 요청: ${url}`);
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`API 오류 (${response.status}): ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('컬럼 목록 API 응답:', data);
      return data;
    } catch (error) {
      console.error(`대체 컬럼 목록 API 요청 실패 (${tableName}):`, error);
      throw error;
    }
  }
  
  /**
   * 컴포넌트 초기화
   */
  async init() {
    this.render();
    this.attachEventListeners();
    await this.loadGridTables(); // 테이블 목록 로드
  }
  
  /**
   * 그리드 테이블 목록 로드
   */
  async loadGridTables() {
    try {
      console.log('테이블 목록 로드 시작');
      
      if (!this.apiService) {
        throw new Error('API 서비스가 초기화되지 않았습니다');
      }
      
      // API 객체 검사 및 디버깅
      console.log('API 객체 타입:', typeof this.apiService);
      console.log('API 객체 메서드 목록:', Object.getOwnPropertyNames(Object.getPrototypeOf(this.apiService)));
      
      // API 요청하여 테이블 목록 가져오기
      const response = await this.apiService.getGridTables();
      console.log('API 응답 데이터:', response);
      
      // API 응답 구조 확인 및 처리
      if (response.data && Array.isArray(response.data)) {
        // 데이터가 문자열 배열인 경우 객체 배열로 변환
        if (typeof response.data[0] === 'string') {
          this.tables = response.data.map(tableName => ({ id: tableName, name: tableName }));
        } else {
          this.tables = response.data;
        }
      } else if (Array.isArray(response)) {
        // 응답 자체가 배열인 경우
        if (typeof response[0] === 'string') {
          this.tables = response.map(tableName => ({ id: tableName, name: tableName }));
        } else {
          this.tables = response;
        }
      } else if (response.success && response.data) {
        // success 필드가 있는 응답 형식
        if (Array.isArray(response.data)) {
          if (typeof response.data[0] === 'string') {
            this.tables = response.data.map(tableName => ({ id: tableName, name: tableName }));
          } else {
            this.tables = response.data;
          }
        } else {
          this.tables = [];
        }
      } else {
        // 응답이 예상 형식이 아닌 경우 빈 배열로 초기화
        console.warn('API 응답이 예상 형식이 아닙니다:', response);
        this.tables = [];
      }
      
      console.log('처리된 테이블 목록:', this.tables);
      this.updateTableOptions();
    } catch (error) {
      console.error('테이블 목록 로드 실패:', error);
      
      // 하드코딩된 예시 데이터 (API 오류 시 테스트용)
      this.tables = [
        { id: 'grid_population', name: '인구 그리드 (예시)' },
        { id: 'grid_income', name: '소득 그리드 (예시)' },
        { id: 'grid_schools', name: '학교 그리드 (예시)' },
        { id: 'grid_gangnam_pop_100m_12', name: '강남 인구 그리드 (예시)' }
      ];
      console.log('오류로 인해 예시 데이터 사용:', this.tables);
      this.updateTableOptions();
    }
  }
  
  /**
   * 테이블 선택 옵션 업데이트
   */
  updateTableOptions() {
    const tableSelect = this.container.querySelector('#gridTable');
    if (!tableSelect) return;
    
    // 배열 체크 추가
    if (!Array.isArray(this.tables) || this.tables.length === 0) {
      console.error('테이블 목록이 비어있거나 배열이 아닙니다:', this.tables);
      // 기본 옵션 유지 (실제 API가 동작할 때는 주석 처리)
      return;
    }
    
    // 기본 옵션은 유지
    let html = '<option value="">선택...</option>';
    
    // 테이블 목록 추가
    this.tables.forEach(table => {
      console.log('테이블 추가:', table);
      html += `<option value="${table.id || table.name}">${table.name || table.id}</option>`;
    });
    
    tableSelect.innerHTML = html;
  }
  
  /**
   * 선택된 테이블의 컬럼 목록 로드
   * @param {string} tableName 테이블 이름
   */
  async loadTableColumns(tableName) {
    try {
      const response = await this.apiService.getTableColumns(tableName);
      console.log('컬럼 API 응답:', response);
      
      // 숫자형 데이터 타입인지 확인하는 함수
      const isNumericType = (column) => {
        if (column.type_category === "number") return true;
        
        const numericTypes = ["integer", "numeric", "decimal", "float", "double", "real", "bigint", "smallint"];
        return numericTypes.includes(column.data_type.toLowerCase());
      };
      
      // API 응답 구조 확인 및 처리
      if (response.success && Array.isArray(response.data)) {
        // 숫자형 데이터 타입의 컬럼만 필터링
        this.columns = response.data
          .filter(isNumericType)
          .map(column => ({
            id: column.column_name,
            name: column.column_name,
            dataType: column.data_type,
            typeCategory: column.type_category
          }));
      } else if (Array.isArray(response)) {
        // 응답 자체가 배열인 경우 (필드 이름이 다를 수 있음)
        this.columns = response
          .filter(column => {
            // column 객체의 구조를 확인하고 적절한 필드 사용
            if (column.column_name && (column.data_type || column.type)) {
              return isNumericType({
                type_category: column.type_category || "",
                data_type: column.data_type || column.type || ""
              });
            }
            return false;
          })
          .map(column => ({
            id: column.column_name || column.name,
            name: column.column_name || column.name,
            dataType: column.data_type || column.type,
            typeCategory: column.type_category || ""
          }));
      } else {
        console.warn('API 응답이 예상 형식이 아닙니다:', response);
        this.columns = [];
      }
      
      console.log('처리된 컬럼 목록 (숫자형만):', this.columns);
      
      if (this.columns.length === 0) {
        console.warn('선택 가능한 숫자형 컬럼이 없습니다.');
      }
      
      this.updateColumnOptions();
    } catch (error) {
      console.error(`${tableName} 테이블의 컬럼 로드 실패:`, error);
      this.columns = [];
      this.updateColumnOptions();
    }
  }
  
  /**
   * 컬럼 선택 옵션 업데이트
   */
  updateColumnOptions() {
    const columnSelect = this.container.querySelector('#columnName');
    if (!columnSelect) return;
    
    // 기본 옵션은 유지
    let html = '<option value="">선택...</option>';
    
    // 컬럼 목록 추가
    this.columns.forEach(column => {
      html += `<option value="${column.id || column.name}">${column.name || column.id}</option>`;
    });
    
    columnSelect.innerHTML = html;
  }
  
  /**
   * 컴포넌트 렌더링
   */
  render() {
    this.container.innerHTML = `
      <div class="index-settings-container">
        <div class="index-settings-form">
          <div class="settings-row">
            <div class="setting-item time-range-group">
              <label>이동시간</label>
              <div class="time-range-selector">
                <button class="time-option" data-value="5">5</button>
                <button class="time-option" data-value="10">10</button>
                <button class="time-option active" data-value="15">15</button>
                <button class="time-option" data-value="30">30</button>
                <button class="time-option" data-value="45">45</button>
                <button class="time-option" data-value="60">60</button>
              </div>
            </div>
          </div>
          
          <div class="settings-row table-column-row">
            <div class="setting-item flex-grow">
              <label>테이블</label>
              <select id="gridTable" class="form-control form-control-sm">
                <option value="">선택...</option>
              </select>
            </div>
            
            <div class="setting-item flex-grow">
              <label>컬럼</label>
              <select id="columnName" class="form-control form-control-sm">
                <option value="">선택...</option>
              </select>
            </div>
            
            <div class="setting-item add-index-btn-container">
              <button class="btn btn-sm btn-outline-secondary add-index-btn" id="addIndexBtn" title="평가 지수 추가">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div class="index-settings-list" id="indexSettingsList">
          <!-- 동적으로 생성됩니다 -->
        </div>
      </div>
    `;
  }
  
  /**
   * 이벤트 리스너 연결
   */
  attachEventListeners() {
    // 이동시간 선택 버튼 이벤트
    this.container.querySelectorAll('.time-option').forEach(button => {
      button.addEventListener('click', (e) => {
        // 모든 버튼에서 active 클래스 제거
        this.container.querySelectorAll('.time-option').forEach(btn => {
          btn.classList.remove('active');
        });
        
        // 클릭된 버튼에 active 클래스 추가
        e.target.classList.add('active');
        console.log('이동시간 선택:', e.target.dataset.value);
      });
    });
    
    // 테이블 선택 이벤트 - 컬럼 로드
    const tableSelect = this.container.querySelector('#gridTable');
    if (tableSelect) {
      tableSelect.addEventListener('change', (e) => {
        const tableName = e.target.value;
        if (tableName) {
          this.loadTableColumns(tableName);
        } else {
          // 테이블을 선택하지 않았을 때는 컬럼 목록 초기화
          this.columns = [];
          this.updateColumnOptions();
        }
      });
    }
    
    // 평가 지수 추가 버튼 이벤트
    this.container.querySelector('#addIndexBtn')?.addEventListener('click', () => {
      this.addNewIndex();
    });
    
    // 초기 데이터를 추가한 후 이벤트 리스너 등록
    this.updateIndexList();
  }
  
  /**
   * 신규 평가 지수 추가
   */
  addNewIndex() {
    const timeElement = this.container.querySelector('.time-option.active');
    const tableElement = this.container.querySelector('#gridTable');
    const columnElement = this.container.querySelector('#columnName');
    
    if (!timeElement || !tableElement.value || !columnElement.value) {
      alert('모든 값을 선택해주세요.');
      return;
    }
    
    const timeValue = timeElement.dataset.value;
    const tableValue = tableElement.value;
    const tableName = tableElement.options[tableElement.selectedIndex].text;
    const columnValue = columnElement.value;
    const columnName = columnElement.options[columnElement.selectedIndex].text;
    
    // 새 설정 추가
    this.settings.push({
      id: Date.now(),
      index: this.nextIndex,
      name: `지수 ${this.nextIndex}`,
      time: timeValue,
      table: tableValue,
      tableName: tableName,
      column: columnValue,
      columnName: columnName
    });
    
    this.nextIndex++;
    
    // 인덱스 목록 업데이트
    this.updateIndexList();
    
    // 이벤트 발행: 평가 지수 변경
    eventBus.publish('indexSettings.updated', this.getSettings());
    
    console.log('평가 지수 추가:', this.settings[this.settings.length - 1]);
  }
  
  /**
   * 평가 지수 목록 업데이트
   */
  updateIndexList() {
    const listContainer = this.container.querySelector('#indexSettingsList');
    
    // 목록이 비어있는 경우 처리
    if (this.settings.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-settings-message">
          아직 추가된 평가 지수가 없습니다.
        </div>
      `;
      return;
    }
    
    // 설정 목록 생성
    let html = '';
    this.settings.forEach(setting => {
      html += `
        <div class="index-setting-item" data-id="${setting.id}">
          <div class="setting-index-name" data-index="${setting.index}" title="더블클릭하여 이름 변경">${setting.name}</div>
          <div class="setting-badges">
            <span class="setting-badge">${setting.time}분</span>
            <span class="setting-badge">${setting.tableName}</span>
            <span class="setting-badge">${setting.columnName}</span>
          </div>
          <button class="btn btn-sm btn-outline-danger remove-setting-btn">
            <i class="fas fa-times"></i>
          </button>
        </div>
      `;
    });
    
    listContainer.innerHTML = html;
    
    // 평가 지수 이름 더블클릭 이벤트 (이름 변경)
    this.container.querySelectorAll('.setting-index-name').forEach(element => {
      element.addEventListener('dblclick', (e) => {
        const currentName = e.target.textContent;
        const newName = prompt('평가 지수 이름을 입력하세요:', currentName);
        
        if (newName !== null && newName.trim() !== '') {
          // UI 업데이트
          e.target.textContent = newName;
          
          // 데이터 업데이트
          const id = e.target.closest('.index-setting-item').dataset.id;
          const setting = this.settings.find(s => s.id == id);
          if (setting) {
            setting.name = newName;
            
            // 이벤트 발행: 평가 지수 변경
            eventBus.publish('indexSettings.updated', this.getSettings());
          }
          
          console.log(`평가 지수 이름 변경: ${currentName} -> ${newName}`);
        }
      });
    });
    
    // 평가 지수 삭제 버튼 이벤트
    this.container.querySelectorAll('.remove-setting-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        const itemElement = e.target.closest('.index-setting-item');
        const id = itemElement.dataset.id;
        const setting = this.settings.find(s => s.id == id);
        
        if (confirm(`"${setting?.name || '이 평가 지수'}"를 삭제하시겠습니까?`)) {
          // UI에서 삭제
          itemElement.remove();
          
          // 데이터에서 삭제
          this.settings = this.settings.filter(s => s.id != id);
          
          // 목록이 비어있는 경우 빈 메시지 표시
          if (this.settings.length === 0) {
            this.updateIndexList();
          }
          
          // 이벤트 발행: 평가 지수 변경
          eventBus.publish('indexSettings.updated', this.getSettings());
          
          console.log(`평가 지수 삭제: ${setting?.name}`);
        }
      });
    });
  }
  
  /**
   * 현재 설정 가져오기
   * @returns {Array} 현재 설정 목록
   */
  getSettings() {
    return [...this.settings];
  }
} 