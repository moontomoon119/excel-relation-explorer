/**
 * 분석 결과 렌더링 모듈
 * 아이소크론맵 분석 결과를 렌더링하는 기능을 담당합니다.
 */
export default class AnalysisResultRenderer {
  /**
   * 생성자
   * @param {Object} component 메인 컴포넌트 인스턴스
   */
  constructor(component) {
    this.component = component;
  }
  
  /**
   * 전체 HTML 생성
   * @returns {string} 분석 결과 컴포넌트 HTML
   */
  generateHtml() {
    return `
      <div class="analysis-results-container">
        <div class="analysis-info">
          <h5>분석 정보</h5>
          <div id="analysisParamsInfo" class="analysis-params-info">
            ${this.getAnalysisParamsHtml()}
          </div>
          
          ${this.component.pnuList.length > 0 && this.component.indexSettings.length > 0 ? `
            <div class="analyze-actions">
              <button class="btn btn-sm btn-outline-secondary export-btn" id="exportBtn" title="결과 내보내기">
                <i class="fas fa-download"></i> 내보내기
              </button>
            </div>
          ` : ''}
        </div>

        ${this.component.pnuList.length > 0 && this.component.indexSettings.length > 0 ? `
          <div class="ranking-actions">
            <button class="btn btn-primary calculate-ranking-btn" id="calculateRankingBtn" 
              ${this.component.isAnalyzing ? 'disabled' : ''}>
              ${this.component.isAnalyzing ? 
                '<i class="fas fa-spinner fa-spin"></i> 분석 중...' : 
                '<i class="fas fa-sort-amount-down"></i> 순위 계산하기'}
            </button>
            ${this.component.pnuRankingCalculated ? 
              '<div class="ranking-status"><i class="fas fa-check-circle"></i> 순위 계산 완료</div>' : ''}
          </div>
        ` : ''}

        <div class="pnu-toggle-list">
          <div class="pnu-toggle-header">
            <span class="pnu-header-title">PNU 목록</span>
            <span class="pnu-header-count">(총 ${this.component.pnuList.length}개)</span>
          </div>
          <div class="pnu-toggle-body" id="pnuToggleList">
            ${this.getPnuListHtml()}
          </div>
        </div>
        
        <div class="result-comparison">
          <h5>분석 결과 차트</h5>
          <div class="comparison-chart">
            <div class="placeholder-chart" id="resultChart">
              ${this.component.pnuList.length > 0 ? '선택된 PNU의 분석 결과 차트가 여기에 표시됩니다.' : '분석을 실행하여 결과를 확인하세요.'}
            </div>
          </div>
        </div>
        
        <div class="statistics-toggle">
          <button class="btn btn-sm btn-outline-secondary" id="toggleStatsBtn">
            <i class="fas fa-chevron-down"></i> 통계 요약 보기
          </button>
        </div>
        
        <div class="analysis-stats" style="display: none;">
          <h5>통계 요약 (선택된 PNU)</h5>
          <div class="stats-grid" id="statsGrid">
            ${this.getStatisticsHtml()}
          </div>
        </div>
      </div>
    `;
  }
  
  /**
   * 분석 정보 HTML 생성
   * @returns {string} 분석 정보 HTML
   */
  getAnalysisParamsHtml() {
    if (!this.component.analysisParams) {
      if (this.component.indexSettings.length === 0) {
        return `<div class="empty-analysis-message">평가 지수 설정이 필요합니다.</div>`;
      } else if (this.component.pnuList.length === 0) {
        return `<div class="empty-analysis-message">PNU 데이터가 없습니다.</div>`;
      } else {
        return `<div class="empty-analysis-message">PNU 토글을 켜서 분석을 시작하세요.</div>`;
      }
    }
    
    return `
      <div class="params-grid">
        <div class="param-item">
          <span class="param-label">PNU</span>
          <span class="param-value">${this.component.analysisParams.pnu}</span>
        </div>
        <div class="param-item">
          <span class="param-label">이동시간</span>
          <span class="param-value">${this.component.analysisParams.rangeMinutes}분</span>
        </div>
        <div class="param-item">
          <span class="param-label">테이블</span>
          <span class="param-value">${this.component.analysisParams.gridTable}</span>
        </div>
        <div class="param-item">
          <span class="param-label">컬럼</span>
          <span class="param-value">${this.component.analysisParams.columnName}</span>
        </div>
        <div class="param-item">
          <span class="param-label">분석시간</span>
          <span class="param-value">${new Date().toLocaleString()}</span>
        </div>
      </div>
    `;
  }
  
  /**
   * PNU 목록 HTML 생성
   * @returns {string} PNU 목록 HTML
   */
  getPnuListHtml() {
    // 목록이 없거나 비어있는 경우
    if (!this.component.pnuList || !this.component.pnuList.length) {
      return `
        <div class="empty-pnu-message">
          분석된 PNU가 없습니다.
        </div>
      `;
    }
    
    // PNU 목록 생성
    let html = '';
    this.component.pnuList.forEach((pnu, index) => {
      const rank = index + 1;
      const rankClass = rank <= 3 ? `rank-${rank}` : '';
      
      // PNU 객체의 구조에 따라 적절히 처리
      let pnuId, pnuCode, pnuValue, isAnalyzed, isActive, isFailed;
      
      if (typeof pnu === 'object') {
        // 객체인 경우
        pnuCode = pnu.code || pnu.pnu || '';
        pnuValue = pnu.value !== undefined ? pnu.value : (pnu.score !== undefined ? pnu.score : '');
        isAnalyzed = pnu.analyzed === true || this.component.analyzedPnus.has(pnuCode);
        isActive = pnu.active === true || this.component.activeToggles.has(pnuCode);
        isFailed = pnu.failed === true;
      } else {
        // 문자열인 경우
        pnuCode = pnu;
        pnuValue = '';
        isAnalyzed = this.component.analyzedPnus.has(pnuCode);
        isActive = this.component.activeToggles.has(pnuCode);
        isFailed = false;
      }
      
      // 토글 ID를 toggle-{pnuCode} 형식으로 생성
      const toggleId = `toggle-${pnuCode}`;
      
      // API 응답에서 통계 정보 가져오기 (값이 있는 경우)
      let scoreValue = '';
      if (typeof pnu === 'object' && pnu.score) {
        scoreValue = pnu.score;
      } else if (isAnalyzed && !isFailed && this.component.analyzedPnus.has(pnuCode)) {
        const analysisData = this.component.analyzedPnus.get(pnuCode);
        if (analysisData && analysisData.statistics && analysisData.statistics.sum) {
          scoreValue = analysisData.statistics.sum;
        }
      }
      
      html += `
        <div class="pnu-toggle-item ${isAnalyzed ? 'analyzed' : ''} ${isActive ? 'active' : ''} ${isFailed ? 'failed' : ''}" data-pnu="${pnuCode}">
          <div class="toggle-switch">
            <input type="checkbox" id="${toggleId}" class="toggle-input" ${isActive ? 'checked' : ''}>
            <label for="${toggleId}" class="toggle-label"></label>
          </div>
          <span class="pnu-code">${pnuCode}</span>
          ${pnuValue !== '' ? `<span class="pnu-value">${pnuValue}</span>` : ''}
          ${scoreValue !== '' ? `<span class="pnu-score">점수: ${scoreValue}</span>` : ''}
          <span class="pnu-rank ${rankClass}">${rank}위</span>
          ${isAnalyzed && !isFailed ? '<span class="pnu-analyzed-badge"><i class="fas fa-check"></i></span>' : ''}
          ${isFailed ? '<span class="pnu-failed-badge" title="분석 실패"><i class="fas fa-times-circle"></i></span>' : ''}
        </div>
      `;
    });
    
    return html;
  }
  
  /**
   * 통계 정보 HTML 생성
   * @returns {string} 통계 정보 HTML
   */
  getStatisticsHtml() {
    if (!this.component.statistics) {
      return `<div class="empty-stats-message">통계 정보가 없습니다.</div>`;
    }
    
    // 숫자 포맷팅 함수
    const formatNumber = (num) => {
      if (num === undefined || num === null) return '-';
      return new Intl.NumberFormat('ko-KR').format(num);
    };
    
    // 통계 항목 설정
    const stats = [
      { label: '합계', value: formatNumber(this.component.statistics.sum) },
      { label: '평균', value: formatNumber(this.component.statistics.avg || this.component.statistics.average) },
      { label: '최소', value: formatNumber(this.component.statistics.min) },
      { label: '최대', value: formatNumber(this.component.statistics.max) },
      { label: '데이터 수', value: formatNumber(this.component.statistics.count) },
      { label: '면적(km²)', value: formatNumber(this.component.statistics.area) }
    ];
    
    // HTML 생성
    let html = '';
    stats.forEach(stat => {
      html += `
        <div class="stat-item">
          <span class="stat-label">${stat.label}</span>
          <span class="stat-value">${stat.value}</span>
        </div>
      `;
    });
    
    return html;
  }
} 