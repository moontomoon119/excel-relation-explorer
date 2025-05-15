/**
 * PNU 데이터 어댑터
 * 백엔드에서 받은 PNU 데이터를 맵 프로바이더가 이해할 수 있는 형식으로 변환합니다.
 */

import PopupUtils from './utils/PopupUtils.js';

export default class PnuDataAdapter {
  /**
   * PNU 데이터를 맵 마커 형식으로 변환
   * @param {Object} pnuData PNU 데이터 (pnuList, count 등 포함)
   * @returns {Array<Object>} 마커 형식의 데이터 배열
   */
  static toMarkers(pnuData) {
    if (!pnuData || !Array.isArray(pnuData.pnuList)) {
      return [];
    }
    
    // PNU 데이터 포맷: 백엔드에서 제공하는 형식에 따라 조정 필요
    // 예시: PNU 데이터에 좌표 정보가 포함되어 있다고 가정
    return pnuData.pnuList
      .filter(pnu => pnu.latitude && pnu.longitude) // 좌표가 있는 PNU만 필터링
      .map(pnu => ({
        position: [pnu.latitude, pnu.longitude],
        title: `PNU: ${pnu.code || pnu.id || ''}`,
        popup: PopupUtils.createPopupContent(pnu),
        options: {
          // 필요에 따라 마커 옵션 추가
        }
      }));
  }
  
  /**
   * PNU 데이터를 맵 폴리곤 형식으로 변환
   * @param {Object} pnuData PNU 데이터 (pnuList, count 등 포함)
   * @returns {Array<Object>} 폴리곤 형식의 데이터 배열
   */
  static toPolygons(pnuData) {
    if (!pnuData || !Array.isArray(pnuData.pnuList)) {
      return [];
    }
    
    // PNU 데이터 포맷: 백엔드에서 제공하는 형식에 따라 조정 필요
    // 예시: PNU 데이터에 경계 좌표 배열이 포함되어 있다고 가정
    return pnuData.pnuList
      .filter(pnu => pnu.boundaries && pnu.boundaries.length >= 3) // 유효한 폴리곤 경계가 있는 PNU만 필터링
      .map(pnu => ({
        positions: pnu.boundaries, // [[lat1, lng1], [lat2, lng2], ...] 형식
        popup: PopupUtils.createPopupContent(pnu),
        options: {
          color: this._getPolygonColor(pnu),
          fillColor: this._getPolygonFillColor(pnu),
          fillOpacity: 0.5,
          weight: 2
        }
      }));
  }
  
  /**
   * PNU 데이터에 따라 폴리곤 색상 반환
   * @private
   * @param {Object} pnu PNU 데이터
   * @returns {string} 색상 코드
   */
  static _getPolygonColor(pnu) {
    // 유형별로 다른 색상 지정 가능
    // 예: 지목에 따라 다른 색상 지정
    const typeColors = {
      '대지': '#FF5733',
      '전': '#33FF57',
      '답': '#3357FF',
      '임야': '#57FF33',
      '도로': '#AAAAAA',
      // 기타 지목에 따른 색상...
    };
    
    return typeColors[pnu.type] || '#3388ff'; // 기본 색상
  }
  
  /**
   * PNU 데이터에 따라 폴리곤 채우기 색상 반환
   * @private
   * @param {Object} pnu PNU 데이터
   * @returns {string} 색상 코드
   */
  static _getPolygonFillColor(pnu) {
    // 기본적으로 외곽선과 같은 색상 사용하되, 사용자 데이터에 따라 조정 가능
    return this._getPolygonColor(pnu);
  }
} 