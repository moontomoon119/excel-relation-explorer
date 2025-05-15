/**
 * 애플리케이션 전역 설정
 */

// API 설정
export const API_CONFIG = {
  BASE_URL: 'http://localhost:5000/api',
  PNU_FILTER_URL: 'http://localhost:5000/api/pnu-filter',
  TIMEOUT: 30000 // 30초
};

// 맵 설정 (향후 Leaflet 등 맵 라이브러리 사용 시 필요)
export const MAP_CONFIG = {
  defaultCenter: [37.5665, 126.9780], // 서울 좌표
  defaultZoom: 10,
  tileProvider: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', // Leaflet용 URL
  openlayersTileProvider: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png', // OpenLayers용 URL
  // CartoDB 타일 제공자 (다양한 스타일)
  cartoDB: {
    voyager: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', // 컬러 스타일
    positron: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', // 라이트 스타일
    dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', // 다크 스타일
    voyagerNoLabels: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', // 라벨 없는 컬러 스타일
    positronNoLabels: 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', // 라벨 없는 라이트 스타일
    darkNoLabels: 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png' // 라벨 없는 다크 스타일
  },
  // OpenLayers용 CartoDB 타일 URL (서브도메인 변수 없는 버전)
  cartoDBOL: {
    voyager: 'https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
    positron: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
    dark: 'https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
    voyagerNoLabels: 'https://basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png',
    positronNoLabels: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png',
    darkNoLabels: 'https://cartodb-basemaps-a.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png'
  },
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | &copy; <a href="https://carto.com/attributions">CARTO</a>'
};

// UI 설정
export const UI_CONFIG = {
  MAX_DISPLAY_PNU: 100, // 결과 화면에 표시할 최대 PNU 개수
  SIDEBAR_WIDTH: 300, // 사이드바 너비 (px)
  ANIMATION_DURATION: 300 // 애니메이션 지속 시간 (ms)
};

// 로컬 스토리지 키
export const STORAGE_KEYS = {
  RECENT_FILTERS: 'excel_relations.recent_filters',
  USER_PREFERENCES: 'excel_relations.preferences',
  MAP_PROVIDER: 'excel_relations.map_provider',
  MAP_STYLE: 'excel_relations.map_style'
}; 