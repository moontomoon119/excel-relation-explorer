/**
 * MapProviderManager.js
 * 맵 프로바이더 관리 모듈
 * 맵 프로바이더의 초기화, 변경, 저장 등을 관리합니다.
 */

import { MAP_CONFIG, STORAGE_KEYS } from '../../core/config.js';
import MapFactory from './MapFactory.js';

export default class MapProviderManager {
  /**
   * MapProviderManager 생성자
   * @param {string} [initialProviderType=null] 초기 맵 프로바이더 타입
   */
  constructor(initialProviderType = null) {
    // 기본 맵 프로바이더 결정 (저장된 설정 또는 기본값)
    this.providerType = initialProviderType || this.getSavedProviderType() || MapFactory.PROVIDER_TYPES.LEAFLET;
    
    this.mapProvider = null;
    this.isInitialized = false;
    this.isInitializing = false;
    
    // 사용 가능한 프로바이더 목록
    this.availableProviders = MapFactory.getAvailableProviders();
  }
  
  /**
   * 저장된 맵 프로바이더 타입 가져오기
   * @returns {string|null} 저장된 맵 프로바이더 타입 또는 null
   */
  getSavedProviderType() {
    try {
      return localStorage.getItem(STORAGE_KEYS.MAP_PROVIDER);
    } catch (e) {
      console.error('로컬 스토리지 접근 실패:', e);
      return null;
    }
  }
  
  /**
   * 맵 프로바이더 타입 저장
   * @param {string} providerType 맵 프로바이더 타입
   */
  saveProviderType(providerType) {
    try {
      localStorage.setItem(STORAGE_KEYS.MAP_PROVIDER, providerType);
    } catch (e) {
      console.error('로컬 스토리지 저장 실패:', e);
    }
  }
  
  /**
   * 맵 프로바이더 초기화
   * @param {HTMLElement} containerElement 맵을 표시할 컨테이너 요소
   * @returns {Promise<Object>} 초기화된 맵 프로바이더
   */
  async initializeProvider(containerElement) {
    if (this.isInitializing || this.isInitialized) {
      return this.mapProvider;
    }
    
    this.isInitializing = true;
    
    try {
      // 맵 프로바이더 생성
      this.mapProvider = MapFactory.createProvider(
        this.providerType,
        containerElement,
        MAP_CONFIG
      );
      
      // 맵 프로바이더 비동기 초기화
      await this.mapProvider.initialize();
      
      // 초기화 성공
      this.isInitialized = true;
      
      // 맵 프로바이더 타입 저장
      this.saveProviderType(this.providerType);
      
      console.log('맵 프로바이더 초기화 성공:', this.providerType);
      
      return this.mapProvider;
    } catch (error) {
      console.error('맵 프로바이더 초기화 실패:', error);
      throw error;
    } finally {
      this.isInitializing = false;
    }
  }
  
  /**
   * 맵 프로바이더 변경
   * @param {string} providerType 새 맵 프로바이더 타입
   * @param {HTMLElement} containerElement 맵을 표시할 컨테이너 요소
   * @returns {Promise<Object>} 변경된 맵 프로바이더
   */
  async changeProvider(providerType, containerElement) {
    if (this.isInitializing || providerType === this.providerType) {
      return this.mapProvider;
    }
    
    console.log(`맵 프로바이더 변경: ${this.providerType} -> ${providerType}`);
    
    this.isInitializing = true;
    this.isInitialized = false;
    
    // 이전 맵 프로바이더 정리
    if (this.mapProvider) {
      try {
        // 맵 요소 제거 (필요시 추가 정리 작업)
        if (this.providerType === MapFactory.PROVIDER_TYPES.LEAFLET) {
          // Leaflet 맵 제거 작업
          if (this.mapProvider.leafletMap) {
            this.mapProvider.leafletMap.remove();
          }
        } else if (this.providerType === MapFactory.PROVIDER_TYPES.OPENLAYERS) {
          // OpenLayers 맵 제거 작업
          if (this.mapProvider.map) {
            this.mapProvider.map.setTarget(null);
          }
        }
      } catch (error) {
        console.error('이전 맵 정리 중 오류 발생:', error);
      }
    }
    
    // 새 프로바이더 타입 설정
    this.providerType = providerType;
    
    try {
      // 맵 프로바이더 생성
      this.mapProvider = MapFactory.createProvider(
        this.providerType,
        containerElement,
        MAP_CONFIG
      );
      
      // 맵 프로바이더 비동기 초기화
      await this.mapProvider.initialize();
      
      // 초기화 성공
      this.isInitialized = true;
      
      // 맵 프로바이더 타입 저장
      this.saveProviderType(this.providerType);
      
      console.log('맵 프로바이더 변경 성공:', this.providerType);
      
      return this.mapProvider;
    } catch (error) {
      console.error('맵 프로바이더 변경 실패:', error);
      throw error;
    } finally {
      this.isInitializing = false;
    }
  }
  
  /**
   * 현재 맵 프로바이더 가져오기
   * @returns {Object} 맵 프로바이더
   */
  getProvider() {
    return this.mapProvider;
  }
  
  /**
   * 현재 맵 프로바이더 타입 가져오기
   * @returns {string} 맵 프로바이더 타입
   */
  getProviderType() {
    return this.providerType;
  }
  
  /**
   * 맵 프로바이더 초기화 상태 확인
   * @returns {boolean} 초기화 여부
   */
  isProviderInitialized() {
    return this.isInitialized;
  }
  
  /**
   * 사용 가능한 프로바이더 목록 가져오기
   * @returns {Array} 사용 가능한 프로바이더 목록
   */
  getAvailableProviders() {
    return this.availableProviders;
  }
} 