/**
 * 분석 결과 이벤트 핸들러 모듈
 * 아이소크론맵 분석 결과 컴포넌트의 이벤트 처리를 담당합니다.
 */
import eventBus from '../../../utils/eventBus.js';

export default class AnalysisResultEventsHandler {
  /**
   * 생성자
   * @param {Object} component 메인 컴포넌트 인스턴스
   */
  constructor(component) {
    this.component = component;
  }
  
  /**
   * 토글 입력 이벤트 리스너 업데이트
   */
  updatePnuToggles() {
    // PNU 목록이 비어있으면 스킵
    if (!this.component.pnuList || this.component.pnuList.length === 0) {
      return;
    }
    
    // 각 토글에 이벤트 리스너 추가
    this.component.container.querySelectorAll('.toggle-input').forEach(toggle => {
      toggle.addEventListener('change', async (e) => {
        const pnuId = e.target.id;
        const isChecked = e.target.checked;
        
        console.log('토글 변경:', pnuId, isChecked);
        
        // 토글 ID에서 PNU 코드 추출 
        // (toggle-{pnuCode} 또는 다른 형식일 수 있으므로 부모 요소의 data-pnu 속성도 확인)
        let pnuCode = null;
        
        if (pnuId && pnuId.startsWith('toggle-')) {
          // toggle-{pnuCode} 형식의 경우
          pnuCode = pnuId.replace('toggle-', '');
        } else {
          // 부모 요소의 data-pnu 속성 확인
          const pnuItem = e.target.closest('[data-pnu]');
          if (pnuItem) {
            pnuCode = pnuItem.getAttribute('data-pnu');
          }
        }
        
        console.log('추출된 PNU 코드:', pnuCode);
        
        if (pnuCode) {
          // 컴포넌트의 togglePnu 메서드 호출
          try {
            console.log(`PNU ${pnuCode} 토글 처리 시작 (${isChecked ? '활성화' : '비활성화'})`);
            await this.component.togglePnu(pnuCode, isChecked);
            console.log(`PNU ${pnuCode} 토글 처리 완료`);
          } catch (error) {
            console.error(`PNU ${pnuCode} 토글 처리 실패:`, error);
            // 실패 시 토글 상태 원복
            e.target.checked = !isChecked;
          }
        } else {
          console.error('토글 이벤트에서 PNU 코드를 찾을 수 없습니다:', e.target);
        }
      });
    });
  }
  
  /**
   * 이벤트 리스너 연결
   */
  attachEventListeners() {
    this.updatePnuToggles();
    this.updateExportButton();
    this.updatePnuSelectListener();
    this.updateRankingButton();
    this.updateToggleStatsButton();
  }
  
  /**
   * 다운로드 버튼 이벤트 리스너 연결
   */
  updateExportButton() {
    const exportButton = this.component.container.querySelector('#exportResults');
    if (exportButton) {
      exportButton.addEventListener('click', () => {
        this.exportResults();
      });
    }
  }
  
  /**
   * PNU 선택 이벤트 리스너 연결
   */
  updatePnuSelectListener() {
    // PNU 선택 이벤트 리스너 추가
    this.component.container.querySelectorAll('.pnu-item').forEach(item => {
      item.addEventListener('click', (e) => {
        // 토글 스위치가 클릭된 경우 이벤트 중단
        if (e.target.closest('.toggle-switch')) {
          return;
        }
        
        const pnuId = item.getAttribute('data-pnu');
        if (pnuId) {
          // 선택된 PNU 저장
          this.component.selectedPnu = pnuId;
          
          // 모든 아이템에서 선택 클래스 제거
          this.component.container.querySelectorAll('.pnu-item').forEach(el => {
            el.classList.remove('selected');
          });
          
          // 현재 아이템에 선택 클래스 추가
          item.classList.add('selected');
          
          // 선택 콜백 호출
          if (typeof this.component.onPnuSelect === 'function') {
            const pnuIndex = this.component.pnuList.findIndex(p => {
              if (typeof p === 'object') {
                return (p.pnu === pnuId || p.code === pnuId);
              } else {
                return p === pnuId;
              }
            });
            
            if (pnuIndex !== -1) {
              this.component.onPnuSelect(this.component.pnuList[pnuIndex]);
            } else {
              this.component.onPnuSelect({ pnu: pnuId, code: pnuId });
            }
          }
        }
      });
    });
  }
  
  /**
   * 분석 결과 내보내기
   */
  exportResults() {
    if (!this.component.pnuList || this.component.pnuList.length === 0) {
      alert('내보낼 데이터가 없습니다.');
      return;
    }
    
    // CSV 파일로 내보내기
    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + 
                      '순위,PNU,값,점수\n' + 
                      this.component.pnuList.map((pnu, index) => {
                        const pnuCode = typeof pnu === 'object' ? (pnu.code || pnu.pnu) : pnu;
                        const pnuValue = typeof pnu === 'object' ? 
                          (pnu.value !== undefined ? pnu.value : '') : '';
                        
                        // 점수 정보 가져오기
                        let scoreValue = '';
                        if (typeof pnu === 'object' && pnu.score) {
                          scoreValue = pnu.score;
                        } else if (this.component.analyzedPnus.has(pnuCode)) {
                          const analysisData = this.component.analyzedPnus.get(pnuCode);
                          if (analysisData && analysisData.statistics && analysisData.statistics.sum) {
                            scoreValue = analysisData.statistics.sum;
                          }
                        }
                        
                        return `${index + 1},${pnuCode},${pnuValue},${scoreValue}`;
                      }).join('\n');
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `analysis_results_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  /**
   * 순위 계산 버튼 이벤트 리스너 연결
   */
  updateRankingButton() {
    const rankingButton = this.component.container.querySelector('#calculateRankingBtn');
    if (rankingButton) {
      rankingButton.addEventListener('click', async () => {
        // 분석 중인 경우 중복 실행 방지
        if (this.component.isAnalyzing) {
          return;
        }
        
        // 계산 확인 메시지
        if (confirm('모든 PNU에 대한 분석을 실행하고 순위를 계산합니다.\n이 작업은 PNU 수에 따라 다소 시간이 소요될 수 있습니다.\n계속하시겠습니까?')) {
          try {
            // 순위 계산 실행
            await this.component.calculateRankings();
          } catch (error) {
            console.error('순위 계산 실행 중 오류 발생:', error);
            alert(`순위 계산 중 오류가 발생했습니다: ${error.message}`);
          }
        }
      });
    }
  }
  
  /**
   * 통계 토글 버튼 이벤트 리스너 연결
   */
  updateToggleStatsButton() {
    const toggleStatsButton = this.component.container.querySelector('#toggleStatsBtn');
    if (toggleStatsButton) {
      toggleStatsButton.addEventListener('click', () => {
        const statsSection = this.component.container.querySelector('.analysis-stats');
        if (statsSection) {
          const isVisible = statsSection.style.display !== 'none';
          statsSection.style.display = isVisible ? 'none' : 'block';
          
          // 버튼 아이콘과 텍스트 변경
          toggleStatsButton.innerHTML = isVisible ?
            '<i class="fas fa-chevron-down"></i> 통계 요약 보기' :
            '<i class="fas fa-chevron-up"></i> 통계 요약 숨기기';
        }
      });
    }
  }
} 