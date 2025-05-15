/**
 * 팝업 관련 유틸리티 함수
 */

import { loadPnuDetails } from '../../../services/api.js';
import { API_CONFIG } from '../../../core/config.js';

/**
 * API 키 설정
 * 실제 프로젝트에서는 환경 변수나 안전한 방법으로 관리해야 함
 */
const API_KEYS = {
  // Google Maps API 키 (정적 지도, 위성 이미지 등에 필요)
  GOOGLE_MAPS: 'AIzaSyAriZRiDztzGO_WMbFAlwn4kYuUvpZgyd8'
};

// 활성화된 팝업을 추적하기 위한 객체
const activePopups = {};

/**
 * 위치 이미지 로드 스크립트와 스타일을 초기화합니다.
 * 한 번만 실행되어야 합니다.
 */
export function initLocationImageUtils() {
  if (window.locationImageUtilsInitialized) return;
  
  // PNU 코드 복사 함수
  window.copyPnuCode = function(pnuCode) {
    navigator.clipboard.writeText(pnuCode)
      .then(() => {
        const copyMsg = document.getElementById('copy-msg-' + pnuCode);
        copyMsg.style.display = 'inline';
        setTimeout(() => {
          copyMsg.style.display = 'none';
        }, 1500);
      })
      .catch(err => {
        console.error('클립보드 복사 실패:', err);
      });
  };
  
  // PNU 정보 로드 함수 - 전역 함수로 만들어 Leaflet에서 호출 가능하게 함
  window.loadPnuInfo = function(pnuCode, popupId) {
    console.log('PNU 정보 로드 요청:', pnuCode, popupId);
    
    const addressElement = document.getElementById(`address-content-${popupId}`);
    if (!addressElement) {
      console.error('주소 요소를 찾을 수 없음:', popupId);
      return;
    }
    
    // 로딩 메시지 표시
    addressElement.textContent = '주소 정보를 불러오는 중...';
    
    // config.js에서 BASE_URL 사용하여 API URL 구성
    // 설정 파일을 사용하므로 백엔드 URL이 변경되어도 자동 반영됨
    const apiUrl = `${API_CONFIG.BASE_URL}/pnu/${pnuCode}`;
    console.log('API 요청 URL:', apiUrl);
    
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`API 오류: ${response.status}`);
        }
        
        // 응답이 JSON인지 확인
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error(`응답이 JSON이 아닙니다: ${contentType}`);
        }
        
        return response.json();
      })
      .then(result => {
        console.log('PNU API 응답:', result);
        if (result && result.success && result.data) {
          const data = result.data;
          // LXMAP_DEMO 데이터가 있는 경우
          const lxmapData = data.data && data.data.LXMAP_DEMO ? data.data.LXMAP_DEMO[0] : null;
          
          if (lxmapData && lxmapData.juso) {
            addressElement.textContent = lxmapData.juso;
          } else {
            addressElement.textContent = `PNU: ${pnuCode}`;
          }
        } else {
          addressElement.textContent = `PNU: ${pnuCode}`;
        }
      })
      .catch(error => {
        console.error('주소 정보 로드 실패:', error);
        addressElement.textContent = `PNU: ${pnuCode}`;
        
        // 개발 환경에서만 디버깅 정보 표시
        if (process.env.NODE_ENV !== 'production') {
          console.warn('API 호출 디버깅 정보:', {
            url: apiUrl,
            pnuCode,
            error: error.message
          });
        }
      });
  };
  
  // Leaflet 팝업 열림 감지 및 처리
  // MutationObserver를 사용하여 DOM에 팝업이 추가되는 것을 감지
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) { // 요소 노드인 경우
            // pnu-popup-trigger 클래스를 가진 요소 찾기
            const popupTriggers = node.querySelectorAll('.pnu-popup-trigger');
            
            popupTriggers.forEach(trigger => {
              const pnuCode = trigger.getAttribute('data-pnu');
              const popupId = trigger.getAttribute('data-popup-id');
              
              // 이미 처리된 팝업인지 확인
              if (!activePopups[popupId]) {
                console.log('새 팝업 감지:', popupId, pnuCode);
                activePopups[popupId] = true;
                window.loadPnuInfo(pnuCode, popupId);
              }
            });
          }
        });
      }
    });
  });
  
  // 전체 문서에 대해 감시 시작
  observer.observe(document.body, { childList: true, subtree: true });
  
  // 스타일 추가
  const style = document.createElement('style');
  style.textContent = `
    .pnu-popup {
      min-width: 300px;
    }
    .pnu-link {
      display: inline-block;
      margin-right: 10px;
      color: #0078A8;
      text-decoration: none;
    }
    .pnu-link:hover {
      text-decoration: underline;
    }
    .pnu-code {
      cursor: pointer;
      color: #0078A8;
      text-decoration: underline;
    }
    .pnu-code:hover {
      color: #00557A;
    }
    .copy-msg {
      display: none;
      color: green;
      font-size: 12px;
      margin-left: 5px;
    }
    .street-view {
      width: 100%;
      height: 200px;
      border: none;
      border-radius: 3px;
      margin-top: 10px;
    }
    .loading-address {
      padding: 5px 0;
      color: #666;
      font-size: 12px;
    }
  `;
  document.head.appendChild(style);
  
  window.locationImageUtilsInitialized = true;
}

/**
 * 스트리트 뷰 임베드 URL 생성
 * @param {string} lat 위도
 * @param {string} lng 경도
 * @returns {string} 스트리트 뷰 URL
 */
function createStreetViewUrl(lat, lng) {
  return `https://www.google.com/maps/embed/v1/streetview?key=${API_KEYS.GOOGLE_MAPS}&location=${lat},${lng}&heading=210&pitch=10&fov=90`;
}

/**
 * PNU 항목에 대한 팝업 HTML 콘텐츠 생성
 * @param {Object} item PNU 데이터 항목
 * @returns {string} HTML 팝업 콘텐츠
 */
export function createPopupContent(item) {
  // 유틸리티 초기화
  initLocationImageUtils();
  
  const popupId = `popup-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  const pnuCode = item.code || item.id || item.pnu || '';
  
  // 좌표가 있는 경우 구글 맵 링크 생성
  let googleMapsLink = '';
  let streetViewHtml = '';
  
  if (item.latitude && item.longitude) {
    const coords = `${item.latitude},${item.longitude}`;
    googleMapsLink = `<a href="https://www.google.com/maps?q=${coords}" target="_blank" class="pnu-link">구글 지도에서 보기</a>`;
    
    // 스트리트 뷰만 생성
    const streetViewUrl = createStreetViewUrl(item.latitude, item.longitude);
    streetViewHtml = `<iframe id="street-view-${pnuCode}" src="${streetViewUrl}" class="street-view" allowfullscreen></iframe>`;
  }
  
  const popupContent = `
    <div class="pnu-popup">
      <!-- 팝업 트리거 요소 추가 -->
      <div class="pnu-popup-trigger" data-pnu="${pnuCode}" data-popup-id="${popupId}" style="display:none;"></div>
      
      <h4 id="title-${popupId}">
        <span id="address-content-${popupId}">PNU: ${pnuCode}</span>
      </h4>
      <p>
        <strong>PNU 코드:</strong> 
        <span class="pnu-code" onclick="copyPnuCode('${pnuCode}')">${pnuCode}</span>
        <span id="copy-msg-${pnuCode}" class="copy-msg">복사됨!</span>
      </p>
      ${item.latitude && item.longitude ? `
        <p><strong>좌표:</strong> ${item.latitude.toFixed(6)}, ${item.longitude.toFixed(6)}</p>
        <div class="pnu-links">
          ${googleMapsLink}
        </div>
        ${streetViewHtml}
      ` : ''}
    </div>
  `;
  
  return popupContent;
}

export default {
  initLocationImageUtils,
  createPopupContent
}; 