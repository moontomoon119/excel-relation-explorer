/**
 * MapEventHandler.js
 * 맵 이벤트 처리 모듈
 * 이벤트 구독 및 처리를 담당합니다.
 */

import eventBus from '../../utils/eventBus.js';

export default class MapEventHandler {
  /**
   * MapEventHandler 생성자
   * @param {Object} callbacks 콜백 함수 모음
   */
  constructor(callbacks = {}) {
    this.callbacks = {
      onPnuFiltered: callbacks.onPnuFiltered || (() => {}),
      onAnalysisMapData: callbacks.onAnalysisMapData || (() => {}),
      onAnalysisToggleOff: callbacks.onAnalysisToggleOff || (() => {}),
      onAnalysisToggle: callbacks.onAnalysisToggle || (() => {})
    };
    
    this.subscribeToEvents();
  }
  
  /**
   * 이벤트 구독 설정
   */
  subscribeToEvents() {
    // PNU 필터링 이벤트 구독
    eventBus.subscribe('pnuFiltered', data => {
      this.callbacks.onPnuFiltered(data);
    });
    
    // 분석 결과의 polygon과 gridPoints 데이터 구독
    eventBus.subscribe('analysis.mapData', data => {
      this.callbacks.onAnalysisMapData(data);
    });
    
    // PNU 토글이 꺼졌을 때 해당 PNU의 분석 결과 제거
    eventBus.subscribe('analysis.toggleOff', data => {
      if (data && data.pnu) {
        this.callbacks.onAnalysisToggleOff(data.pnu);
      }
    });
    
    // PNU 토글 상태 변경 구독
    eventBus.subscribe('analysis.toggle', data => {
      if (data && data.pnu !== undefined) {
        this.callbacks.onAnalysisToggle(data);
      }
    });
  }
  
  /**
   * 맵 프로바이더 이벤트 리스너 등록
   * @param {Object} mapProvider 맵 프로바이더 객체
   * @param {Object} listeners 이벤트 리스너 객체
   */
  registerMapProviderListeners(mapProvider, listeners = {}) {
    if (!mapProvider) return;
    
    // 클릭 이벤트 처리
    if (listeners.onClick) {
      mapProvider.on('click', listeners.onClick);
    }
    
    // 추가 이벤트 리스너 등록 (필요시)
    if (listeners.onZoomEnd) {
      mapProvider.on('zoomend', listeners.onZoomEnd);
    }
    
    if (listeners.onMoveEnd) {
      mapProvider.on('moveend', listeners.onMoveEnd);
    }
  }
  
  /**
   * 맵 이벤트 발생시키기
   * @param {string} eventName 이벤트 이름
   * @param {Object} data 이벤트 데이터
   */
  emitEvent(eventName, data) {
    eventBus.publish(eventName, data);
  }
} 