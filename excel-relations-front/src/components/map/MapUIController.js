/**
 * MapUIController.js
 * 맵 UI 컨트롤러 모듈
 * 맵 관련 UI 요소 렌더링 및 이벤트 처리를 담당합니다.
 */

export default class MapUIController {
  /**
   * MapUIController 생성자
   * @param {HTMLElement} container 컴포넌트를 추가할 컨테이너
   * @param {Object} callbacks 콜백 함수 모음
   */
  constructor(container, callbacks = {}) {
    this.container = container;
    this.mapView = null;
    this.callbacks = {
      onProviderChange: callbacks.onProviderChange || (() => {}),
      onReset: callbacks.onReset || (() => {}),
      onStyleChange: callbacks.onStyleChange || (() => {})
    };
  }
  
  /**
   * 맵 컨테이너 UI 렌더링
   * @param {Object} initialData 초기 데이터
   */
  renderMapContainer(initialData = {}) {
    const { providerName = '지도 로드 중...' } = initialData;
    
    this.container.innerHTML = `
      <div class="map-container">
        <div class="map-header">
          <div class="map-header-left">
            <h4>지도 뷰</h4>
          </div>
          <div class="map-header-right">
            <div class="map-provider-selector">
              <button class="btn btn-sm btn-outline-secondary" id="currentProvider">
                <span class="provider-name">${providerName}</span>
                <i class="fas fa-chevron-down"></i>
              </button>
              <div class="map-provider-dropdown" id="providerDropdown">
                <ul class="map-provider-list" id="providerList">
                  <!-- 동적으로 채워짐 -->
                </ul>
              </div>
            </div>
            <div id="mapStyleControlPlaceholder" class="map-style-control-placeholder"></div>
            <button class="btn btn-sm btn-outline-secondary" id="resetMapBtn">
              <i class="fas fa-redo"></i>
            </button>
          </div>
        </div>
        <div id="mapView" class="map-view">
          <div class="map-placeholder">
            <div class="placeholder-content">
              <p>지도가 여기에 표시됩니다.</p>
              <p class="text-muted">PNU 필터를 적용하면 결과가 지도에 표시됩니다.</p>
            </div>
          </div>
        </div>
      </div>
    `;
    
    this.mapView = document.getElementById('mapView');
    
    // 이벤트 리스너 연결
    this.attachEventListeners();
  }
  
  /**
   * 이벤트 리스너 연결
   */
  attachEventListeners() {
    // 리셋 버튼 이벤트
    document.getElementById('resetMapBtn')?.addEventListener('click', () => {
      this.callbacks.onReset();
    });
    
    // 맵 프로바이더 선택기 이벤트 연결
    this.setupProviderSelector();
  }
  
  /**
   * 맵 프로바이더 선택기 설정
   */
  setupProviderSelector() {
    const currentProvider = document.getElementById('currentProvider');
    const providerDropdown = document.getElementById('providerDropdown');
    
    if (!currentProvider || !providerDropdown) return;
    
    // 드롭다운 토글
    currentProvider.addEventListener('click', () => {
      providerDropdown.classList.toggle('show');
    });
    
    // 드롭다운 외부 클릭 시 닫기
    document.addEventListener('click', (event) => {
      if (!currentProvider.contains(event.target) && !providerDropdown.contains(event.target)) {
        providerDropdown.classList.remove('show');
      }
    });
  }
  
  /**
   * 프로바이더 목록 채우기
   * @param {Array} providers 사용 가능한 프로바이더 목록
   * @param {string} activeProviderId 현재 활성화된 프로바이더 ID
   */
  populateProviderList(providers, activeProviderId) {
    const providerList = document.getElementById('providerList');
    if (!providerList) return;
    
    // 프로바이더 목록 생성
    providerList.innerHTML = providers.map(provider => `
      <li class="map-provider-item ${provider.id === activeProviderId ? 'active' : ''}" data-provider="${provider.id}">
        <span class="provider-name">${provider.name}</span>
        <span class="provider-description">${provider.description}</span>
      </li>
    `).join('');
    
    // 프로바이더 항목 클릭 이벤트
    providerList.querySelectorAll('.map-provider-item').forEach(item => {
      item.addEventListener('click', () => {
        const providerId = item.getAttribute('data-provider');
        
        // 현재 프로바이더와 다른 경우에만 콜백 호출
        if (providerId !== activeProviderId) {
          this.callbacks.onProviderChange(providerId);
        }
        
        // 드롭다운 닫기
        document.getElementById('providerDropdown')?.classList.remove('show');
      });
    });
    
    // 현재 프로바이더 표시 업데이트
    this.updateProviderDisplay(providers.find(p => p.id === activeProviderId)?.name || '');
  }
  
  /**
   * 현재 프로바이더 표시 업데이트
   * @param {string} providerName 프로바이더 이름
   */
  updateProviderDisplay(providerName) {
    const currentProvider = document.getElementById('currentProvider');
    if (currentProvider) {
      const nameElement = currentProvider.querySelector('.provider-name');
      if (nameElement) {
        nameElement.textContent = providerName;
      }
    }
  }
  
  /**
   * 로딩 플레이스홀더 표시
   * @param {string} message 로딩 메시지
   */
  showLoadingPlaceholder(message = '지도 라이브러리를 불러오는 중...') {
    const placeholder = this.mapView?.querySelector('.map-placeholder');
    if (placeholder) {
      placeholder.style.display = 'flex';
      placeholder.innerHTML = `
        <div class="placeholder-content">
          <p>${message}</p>
          <div class="loading-spinner"></div>
        </div>
      `;
    }
  }
  
  /**
   * 플레이스홀더 숨기기
   */
  hidePlaceholder() {
    const placeholder = this.mapView?.querySelector('.map-placeholder');
    if (placeholder) {
      placeholder.style.display = 'none';
    }
  }
  
  /**
   * 오류 메시지 표시
   * @param {string} errorMessage 오류 메시지
   */
  showErrorPlaceholder(errorMessage) {
    const placeholder = this.mapView?.querySelector('.map-placeholder');
    if (placeholder) {
      placeholder.style.display = 'flex';
      placeholder.innerHTML = `
        <div class="placeholder-content error">
          <p><i class="fas fa-exclamation-triangle"></i> 오류</p>
          <p>${errorMessage}</p>
        </div>
      `;
    }
  }
  
  /**
   * PNU 데이터 정보 플레이스홀더 표시
   * @param {Object} data PNU 데이터
   */
  updatePlaceholderWithPnuData(data) {
    const placeholder = this.mapView?.querySelector('.map-placeholder');
    if (placeholder) {
      placeholder.innerHTML = `
        <div class="placeholder-content">
          <p>PNU 데이터 로드됨</p>
          <p>총 ${data.count}개의 PNU가 지도에 표시됩니다.</p>
          <div class="pnu-sample">
            <p><strong>첫 5개 PNU:</strong></p>
            <ul>
              ${data.pnuList.slice(0, 5).map(pnu => `<li>${pnu.code || pnu.id || '알 수 없음'}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
    }
  }
  
  /**
   * 맵 컨테이너 요소 생성
   * @returns {HTMLElement} 맵 컨테이너 요소
   */
  createMapElement() {
    const mapViewElement = document.getElementById('mapView');
    if (!mapViewElement) return null;
    
    // 맵 컨테이너 요소 생성
    const mapContainerDiv = document.createElement('div');
    mapContainerDiv.id = 'mapViewContent';
    mapContainerDiv.className = 'map-view-content';
    mapContainerDiv.style.width = '100%';
    mapContainerDiv.style.height = '100%';
    
    // 자식 요소 중 플레이스홀더를 제외한 모든 요소 제거
    Array.from(mapViewElement.children).forEach(child => {
      if (!child.classList.contains('map-placeholder')) {
        mapViewElement.removeChild(child);
      }
    });
    
    // 새 맵 컨테이너 요소 추가
    mapViewElement.appendChild(mapContainerDiv);
    
    return mapContainerDiv;
  }
  
  /**
   * 지도 스타일 컨트롤 추가
   * @param {HTMLElement} controlElement 스타일 컨트롤 요소
   */
  addStyleControl(controlElement) {
    const placeholder = document.getElementById('mapStyleControlPlaceholder');
    if (!placeholder) return;
    
    placeholder.innerHTML = ''; // 기존 내용 제거
    
    // 스타일 컨트롤 요소가 있으면 추가
    if (controlElement) {
      placeholder.appendChild(controlElement);
    }
  }
} 