/**
 * 맵 프로바이더 추상 클래스
 * 모든 맵 라이브러리 구현체는 이 추상 클래스를 상속해야 합니다.
 */

export default class MapProvider {
  /**
   * 맵 프로바이더 생성
   * @param {HTMLElement} container 맵을 표시할 컨테이너 요소
   * @param {Object} config 맵 설정
   */
  constructor(container, config) {
    this.container = container;
    this.config = config;
    
    if (this.constructor === MapProvider) {
      throw new Error('MapProvider는 추상 클래스이므로 직접 인스턴스화할 수 없습니다.');
    }
  }
  
  /**
   * 맵 초기화
   * @abstract
   */
  initialize() {
    throw new Error('initialize 메서드는 반드시 상속 클래스에서 구현해야 합니다.');
  }
  
  /**
   * 맵 확대
   * @abstract
   */
  zoomIn() {
    throw new Error('zoomIn 메서드는 반드시 상속 클래스에서 구현해야 합니다.');
  }
  
  /**
   * 맵 축소
   * @abstract
   */
  zoomOut() {
    throw new Error('zoomOut 메서드는 반드시 상속 클래스에서 구현해야 합니다.');
  }
  
  /**
   * 맵 초기화 (원래 위치와 줌 레벨로 복귀)
   * @abstract
   */
  resetView() {
    throw new Error('resetView 메서드는 반드시 상속 클래스에서 구현해야 합니다.');
  }
  
  /**
   * 마커 추가
   * @abstract
   * @param {Array<Object>} markers 표시할 마커 정보 배열
   */
  addMarkers(markers) {
    throw new Error('addMarkers 메서드는 반드시 상속 클래스에서 구현해야 합니다.');
  }
  
  /**
   * 마커 제거
   * @abstract
   */
  clearMarkers() {
    throw new Error('clearMarkers 메서드는 반드시 상속 클래스에서 구현해야 합니다.');
  }
  
  /**
   * 폴리곤 추가
   * @abstract
   * @param {Array<Object>} polygons 표시할 폴리곤 정보 배열
   */
  addPolygons(polygons) {
    throw new Error('addPolygons 메서드는 반드시 상속 클래스에서 구현해야 합니다.');
  }
  
  /**
   * 폴리곤 제거
   * @abstract
   */
  clearPolygons() {
    throw new Error('clearPolygons 메서드는 반드시 상속 클래스에서 구현해야 합니다.');
  }
  
  /**
   * 맵 이벤트 리스너 등록
   * @abstract
   * @param {string} event 이벤트 이름
   * @param {Function} callback 콜백 함수
   */
  on(event, callback) {
    throw new Error('on 메서드는 반드시 상속 클래스에서 구현해야 합니다.');
  }
  
  /**
   * 맵 이벤트 리스너 제거
   * @abstract
   * @param {string} event 이벤트 이름
   * @param {Function} callback 콜백 함수
   */
  off(event, callback) {
    throw new Error('off 메서드는 반드시 상속 클래스에서 구현해야 합니다.');
  }
} 