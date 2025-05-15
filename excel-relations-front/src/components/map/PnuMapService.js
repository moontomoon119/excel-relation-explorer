/**
 * PNU 맵 서비스
 * PNU 데이터를 맵에 표시하기 위한 통합 서비스를 제공합니다.
 */

import StrategyRegistry from './strategies/StrategyRegistry.js';
import PnuCoordinateService from '../../services/PnuCoordinateService.js';

export default class PnuMapService {
  constructor() {
    this.coordinateService = new PnuCoordinateService();
    this.initialized = false;
    this.isLoadingCoordinates = false;
  }
  
  /**
   * 서비스 초기화
   * @param {string} csvUrl PNU-좌표 CSV 파일 URL
   * @returns {Promise<void>}
   */
  async initialize(csvUrl = '/data/pnu_coordinates.csv') {
    if (this.initialized || this.isLoadingCoordinates) return;
    
    this.isLoadingCoordinates = true;
    
    try {
      console.log('PNU-좌표 데이터 로드 URL:', csvUrl);
      
      await this.coordinateService.loadFromCsv(csvUrl);
      
      this.initialized = true;
      console.log(`PNU-좌표 데이터 로드 완료: ${this.coordinateService.pnuCoordinateMap.size}개 항목`);
      if (this.coordinateService.pnuCoordinateMap.size > 0) {
        const firstKey = Array.from(this.coordinateService.pnuCoordinateMap.keys())[0];
        console.log('첫 번째 PNU 코드:', firstKey);
        console.log('해당 좌표:', this.coordinateService.pnuCoordinateMap.get(firstKey));
      } else {
        console.warn('PNU-좌표 매핑 데이터가 비어 있습니다!');
      }
    } catch (error) {
      console.error('PNU-좌표 데이터 로드 오류:', error);
      throw error;
    } finally {
      this.isLoadingCoordinates = false;
    }
  }
  
  /**
   * PNU 데이터와 좌표 정보 병합
   * @param {Array<Object>} pnuItems PNU 항목 배열
   * @returns {Array<Object>} 좌표 정보가 추가된 PNU 항목 배열
   */
  enrichWithCoordinates(pnuItems) {
    if (!Array.isArray(pnuItems)) {
      return [];
    }
    
    const enriched = pnuItems.map(item => {
      // 이미 좌표 정보가 있는 경우 그대로 반환
      if (item.latitude && item.longitude) {
        return item;
      }
      
      // 직접 객체 자체가 PNU 코드인 경우 처리
      if (typeof item === 'string') {
        const coordinates = this.coordinateService.getCoordinatesByPnu(item);
        if (coordinates) {
          return { pnu: item, ...coordinates };
        }
        return { pnu: item };
      }
      
      // 객체에서 PNU 코드 필드 찾기
      const pnuCode = item.pnu || item.code || item.id;
      
      if (!pnuCode) {
        console.warn('PNU 코드를 찾을 수 없는 항목:', item);
        return item;
      }
      
      // 먼저 정확히 일치하는 PNU 코드 검색
      let coordinates = this.coordinateService.getCoordinatesByPnu(pnuCode);
      
      // 찾지 못한 경우 따옴표 추가/제거 버전 시도
      if (!coordinates) {
        const withQuotes = `"${pnuCode.replace(/"/g, '')}"`;
        const withoutQuotes = pnuCode.replace(/"/g, '');
        
        coordinates = 
          this.coordinateService.getCoordinatesByPnu(withQuotes) ||
          this.coordinateService.getCoordinatesByPnu(withoutQuotes);
      }
      
      if (coordinates) {
        console.log('PNU 코드 매핑 성공:', pnuCode);
        return { ...item, ...coordinates };
      }
      
      console.warn('좌표를 찾지 못한 PNU 코드:', pnuCode);
      return item;
    });
    
    console.log(`좌표 보강 결과: ${enriched.filter(i => i.latitude && i.longitude).length}/${pnuItems.length} 항목에 좌표 추가`);
    return enriched;
  }
  
  /**
   * PNU 데이터를 마커로 변환
   * @param {string} providerType 맵 공급자 유형
   * @param {Array<Object>} pnuItems PNU 항목 배열
   * @returns {Array<Object>} 맵 공급자 형식의 마커 객체 배열
   */
  toMarkers(providerType, pnuItems) {
    // 좌표 정보 병합
    const enrichedItems = this.enrichWithCoordinates(pnuItems);
    
    console.log(`PNU 마커 변환 시작 - 좌표 있는 항목: ${enrichedItems.filter(i => i.latitude && i.longitude).length}/${enrichedItems.length}`);
    
    // 샘플 데이터 로깅
    if (enrichedItems.length > 0 && enrichedItems[0].latitude && enrichedItems[0].longitude) {
      console.log('좌표 샘플:', {
        pnu: enrichedItems[0].pnu,
        latitude: enrichedItems[0].latitude,
        longitude: enrichedItems[0].longitude
      });
    }
    
    // 전략 레지스트리를 통해 맵 공급자별 변환
    const markers = StrategyRegistry.toMarkers(providerType, enrichedItems);
    console.log(`${providerType} 마커 변환 결과: ${markers.length}개 생성됨`);
    
    return markers;
  }
  
  /**
   * PNU 데이터를 폴리곤으로 변환
   * @param {string} providerType 맵 공급자 유형
   * @param {Array<Object>} pnuItems PNU 항목 배열
   * @returns {Array<Object>} 맵 공급자 형식의 폴리곤 객체 배열
   */
  toPolygons(providerType, pnuItems) {
    // 좌표 정보 병합
    const enrichedItems = this.enrichWithCoordinates(pnuItems);
    
    // 전략 레지스트리를 통해 맵 공급자별 변환
    return StrategyRegistry.toPolygons(providerType, enrichedItems);
  }
  
  /**
   * PNU 데이터를 레이어로 변환
   * @param {string} providerType 맵 공급자 유형
   * @param {string} layerType 레이어 유형
   * @param {Array<Object>} pnuItems PNU 항목 배열
   * @param {Object} options 레이어 옵션
   * @returns {Object} 맵 공급자 형식의 레이어 설정 객체
   */
  toLayer(providerType, layerType, pnuItems, options = {}) {
    // 좌표 정보 병합
    const enrichedItems = this.enrichWithCoordinates(pnuItems);
    
    // 전략 레지스트리를 통해 맵 공급자별 변환
    return StrategyRegistry.toLayer(providerType, layerType, enrichedItems, options);
  }
  
  /**
   * PNU 데이터 세트 처리
   * @param {object} pnuDataSet PNU 데이터 세트 (pnuList, count, hasPolygons 등 포함)
   * @param {string} providerType 맵 공급자 유형
   * @returns {object} 처리된 맵 객체 세트
   */
  processPnuDataSet(pnuDataSet, providerType) {
    if (!pnuDataSet || !Array.isArray(pnuDataSet.pnuList)) {
      console.warn('processPnuDataSet: 유효하지 않은 PNU 데이터 세트');
      return { markers: [], polygons: [] };
    }
    
    console.log(`processPnuDataSet: ${pnuDataSet.pnuList.length}개 항목 처리 시작 (폴리곤: ${pnuDataSet.hasPolygons ? '예' : '아니오'})`);
    
    const result = {};
    
    // 데이터 유형에 따라 처리
    if (pnuDataSet.hasPolygons) {
      // 폴리곤 데이터가 있는 경우
      result.polygons = this.toPolygons(providerType, pnuDataSet.pnuList);
      result.markers = []; // 폴리곤과 마커 중복 방지
      console.log(`폴리곤 데이터 생성: ${result.polygons.length}개`);
    } else {
      // 점 데이터로 표시
      result.markers = this.toMarkers(providerType, pnuDataSet.pnuList);
      result.polygons = []; // 마커만 사용
      console.log(`마커 데이터 생성: ${result.markers.length}개`);
    }
    
    // 사용자 추가 데이터 (히트맵, 클러스터 등이 필요한 경우)
    if (pnuDataSet.useHeatmap) {
      result.heatmap = this.toLayer(providerType, 'heatmap', pnuDataSet.pnuList, 
        pnuDataSet.heatmapOptions || {});
      console.log('히트맵 레이어 생성됨');
    }
    
    if (pnuDataSet.useCluster) {
      result.cluster = this.toLayer(providerType, 'cluster', pnuDataSet.pnuList,
        pnuDataSet.clusterOptions || {});
      console.log('클러스터 레이어 생성됨');
    }
    
    return result;
  }
} 