/**
 * 이벤트 버스 클래스
 * 컴포넌트 간 통신을 위한 이벤트 발행/구독 시스템
 */

class EventBus {
  constructor() {
    this.events = {};
  }
  
  /**
   * 이벤트 구독
   * @param {string} event 이벤트 이름
   * @param {Function} callback 콜백 함수
   * @returns {Function} 구독 취소 함수
   */
  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    
    this.events[event].push(callback);
    
    // 구독 취소 함수 반환
    return () => this.unsubscribe(event, callback);
  }
  
  /**
   * 이벤트 발행
   * @param {string} event 이벤트 이름
   * @param {any} data 이벤트 데이터
   */
  publish(event, data) {
    console.log(`이벤트 발행: ${event}`, data);
    
    if (!this.events[event]) {
      console.warn(`'${event}' 이벤트에 대한 구독자가 없습니다.`);
      return;
    }
    
    console.log(`'${event}' 이벤트 구독자 수: ${this.events[event].length}`);
    
    this.events[event].forEach((callback, index) => {
      try {
        console.log(`'${event}' 이벤트 구독자[${index}] 호출 시작`);
        callback(data);
        console.log(`'${event}' 이벤트 구독자[${index}] 호출 완료`);
      } catch (error) {
        console.error(`이벤트 처리 오류 (${event}, 구독자[${index}]):`, error);
      }
    });
  }
  
  /**
   * 이벤트 구독 취소
   * @param {string} event 이벤트 이름
   * @param {Function} callback 취소할 콜백 함수
   */
  unsubscribe(event, callback) {
    if (!this.events[event]) return;
    
    this.events[event] = this.events[event].filter(cb => cb !== callback);
    
    // 배열이 비었으면 객체에서 제거
    if (this.events[event].length === 0) {
      delete this.events[event];
    }
  }
  
  /**
   * 특정 이벤트의 모든 구독 취소
   * @param {string} event 이벤트 이름
   */
  clearEvent(event) {
    if (this.events[event]) {
      delete this.events[event];
    }
  }
  
  /**
   * 모든 이벤트 구독 취소
   */
  clearAllEvents() {
    this.events = {};
  }
}

// 싱글톤 인스턴스 생성 및 내보내기
const eventBus = new EventBus();
export default eventBus; 