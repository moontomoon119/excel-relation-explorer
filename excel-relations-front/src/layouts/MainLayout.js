/**
 * 메인 레이아웃 컴포넌트
 * 애플리케이션의 전체 레이아웃을 관리합니다.
 */

import FilterList from '../components/filter/FilterList.js';
import MapContainer from '../components/map/MapContainer.js';
import GridContainer from '../components/grid/GridContainer.js';

export default class MainLayout {
  /**
   * 메인 레이아웃 컴포넌트 생성
   * @param {HTMLElement} container 전체 앱 컨테이너
   */
  constructor(container) {
    this.container = container || document.getElementById('app');
    
    if (!this.container) {
      console.error('앱 컨테이너를 찾을 수 없습니다.');
      return;
    }
    
    this.init();
  }
  
  /**
   * 컴포넌트 초기화
   */
  init() {
    console.log('메인 레이아웃 초기화 시작');
    
    this.renderLayout();
    this.initializeComponents();
    
    console.log('메인 레이아웃 초기화 완료');
  }
  
  /**
   * 메인 레이아웃 UI 렌더링
   */
  renderLayout() {
    this.container.innerHTML = `
      <div class="main-layout">
        <div class="left-sidebar" id="leftSidebar"></div>
        <div class="main-content" id="mainContent"></div>
        <div class="right-sidebar" id="rightSidebar"></div>
      </div>
    `;
    
    this.leftSidebar = document.getElementById('leftSidebar');
    this.mainContent = document.getElementById('mainContent');
    this.rightSidebar = document.getElementById('rightSidebar');
  }
  
  /**
   * 컴포넌트 초기화
   */
  initializeComponents() {
    console.log('컴포넌트 초기화 시작');
    
    // 필터 목록 컴포넌트 초기화
    this.filterList = new FilterList(this.leftSidebar);
    
    // 맵 컨테이너 컴포넌트 초기화
    this.mapContainer = new MapContainer(this.mainContent);
    
    // 그리드 컨테이너 컴포넌트 초기화
    this.gridContainer = new GridContainer(this.rightSidebar);
    
    console.log('컴포넌트 초기화 완료');
  }
} 