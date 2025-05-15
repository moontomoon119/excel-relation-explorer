import MainLayout from './layouts/MainLayout.js';
import './styles/main.css';

// 애플리케이션 초기화
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM 로드 완료, 애플리케이션 초기화 시작');
  
  // 애플리케이션 컨테이너 생성
  const appContainer = document.getElementById('app') || createAppContainer();
  
  // 메인 레이아웃 초기화
  const mainLayout = new MainLayout(appContainer);
  
  console.log('애플리케이션 초기화 완료');
});

/**
 * 앱 컨테이너 생성 (없는 경우)
 * @returns {HTMLElement} 앱 컨테이너 요소
 */
function createAppContainer() {
  const appContainer = document.createElement('div');
  appContainer.id = 'app';
  document.body.appendChild(appContainer);
  console.log('앱 컨테이너 생성됨');
  return appContainer;
} 