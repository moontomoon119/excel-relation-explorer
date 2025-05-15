/**
 * PNU 좌표 서비스
 * PNU 코드와 좌표 데이터를 관리합니다.
 */
export default class PnuCoordinateService {
  constructor() {
    this.pnuCoordinateMap = new Map();
    this.isLoaded = false;
    this.isLoading = false;
    
    // 메서드를 명시적으로 인스턴스에 바인딩
    this._parseCsvData = this._parseCsvData.bind(this);
  }
  
  /**
   * CSV 데이터에서 PNU-좌표 매핑 로드
   * @param {string} csvUrl PNU-좌표 CSV 파일 URL
   * @returns {Promise<void>}
   */
  async loadFromCsv(csvUrl) {
    if (this.isLoaded || this.isLoading) return;
    
    this.isLoading = true;
    
    try {
      console.log('PNU-좌표 데이터 로드 시작:', csvUrl);
      
      const response = await fetch(csvUrl);
      if (!response.ok) {
        throw new Error(`CSV 로드 실패: ${response.status} ${response.statusText}`);
      }
      
      const csvText = await response.text();
      this._parseCsvData(csvText);
      
      this.isLoaded = true;
      console.log(`PNU-좌표 데이터 로드 완료: ${this.pnuCoordinateMap.size}개 항목`);
    } catch (error) {
      console.error('PNU-좌표 데이터 로드 오류:', error);
      throw error;
    } finally {
      this.isLoading = false;
    }
  }
  
  /**
   * CSV 데이터 파싱
   * @private
   * @param {string} csvText CSV 텍스트 데이터
   */
  _parseCsvData(csvText) {
    console.log('CSV 파싱 시작');
    // CSV 헤더 및 레코드 파싱
    const lines = csvText.split('\n');
    
    if (lines.length <= 1) {
      console.warn('CSV 데이터가 비어있거나 헤더만 있습니다.');
      return;
    }
    
    console.log('CSV 줄 수:', lines.length);
    console.log('첫 줄(헤더):', lines[0]);
    console.log('두 번째 줄(첫 데이터):', lines[1]);
    
    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
    console.log('파싱된 헤더:', headers);
    
    // PNU 코드, x, y 컬럼 인덱스 찾기
    const pnuIndex = headers.findIndex(h => 
      h.toLowerCase().includes('pnu') || h.toLowerCase().includes('code'));
    const xIndex = headers.findIndex(h => h.toLowerCase() === 'x');
    const yIndex = headers.findIndex(h => h.toLowerCase() === 'y');
    
    console.log('컬럼 인덱스:', { pnuIndex, xIndex, yIndex });
    
    if (pnuIndex === -1 || xIndex === -1 || yIndex === -1) {
      console.error('CSV 필수 컬럼 누락:', { pnuIndex, xIndex, yIndex });
      throw new Error('CSV 데이터에서 필요한 열(PNU, x, y)을 찾을 수 없습니다.');
    }
    
    // 데이터 매핑
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      // 따옴표가 포함된 CSV를 올바르게 파싱
      const values = this._parseCSVLine(line);
      
      const pnuCode = values[pnuIndex].replace(/"/g, '');
      const longitude = parseFloat(values[xIndex]); // x 좌표는 경도(longitude)
      const latitude = parseFloat(values[yIndex]);  // y 좌표는 위도(latitude)
      
      if (pnuCode && !isNaN(longitude) && !isNaN(latitude)) {
        this.pnuCoordinateMap.set(pnuCode, { 
          latitude: latitude, 
          longitude: longitude 
        });
      }
    }
  }
  
  /**
   * CSV 라인 파싱 (따옴표 처리)
   * @private
   * @param {string} line CSV 라인
   * @returns {Array<string>} 파싱된 값 배열
   */
  _parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        result.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    
    // 마지막 필드 추가
    result.push(current);
    
    return result;
  }
  
  /**
   * PNU 코드로 좌표 조회
   * @param {string} pnuCode PNU 코드
   * @returns {Object|null} 좌표 객체 또는 null
   */
  getCoordinatesByPnu(pnuCode) {
    return this.pnuCoordinateMap.get(pnuCode) || null;
  }
  
  /**
   * 여러 PNU 코드에 대한 좌표 일괄 조회
   * @param {Array<string>} pnuCodes PNU 코드 배열
   * @returns {Map<string, Object>} PNU 코드를 키로 하는 좌표 맵
   */
  getCoordinatesForPnuList(pnuCodes) {
    const result = new Map();
    
    for (const pnuCode of pnuCodes) {
      const coords = this.getCoordinatesByPnu(pnuCode);
      if (coords) {
        result.set(pnuCode, coords);
      }
    }
    
    return result;
  }
} 