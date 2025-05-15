/**
 * 분석 결과 컴포넌트
 * 아이소크론맵 분석 결과를 표시합니다.
 */

import eventBus from '../../utils/eventBus.js';
import IsochroneApiService from '../../services/IsochroneApiService.js';
import AnalysisResultRenderer from './analysis/AnalysisResultRenderer.js';
import AnalysisResultEventsHandler from './analysis/AnalysisResultEventsHandler.js';
import PnuAnalysisService from './analysis/PnuAnalysisService.js';

export default class AnalysisResultComponent {
  /**
   * 분석 결과 컴포넌트 생성
   * @param {HTMLElement} container 컴포넌트를 추가할 컨테이너
   * @param {Function} onPnuToggle PNU 토글 상태 변경시 호출될 콜백 함수
   * @param {Function} onPnuSelect PNU 선택 시 호출될 콜백 함수
   * @param {IsochroneApiService} apiService API 서비스 인스턴스
   */
  constructor(container, onPnuToggle, onPnuSelect, apiService) {
    this.container = container;
    this.onPnuToggle = onPnuToggle || (() => {});
    this.onPnuSelect = onPnuSelect || (() => {});
    
    // API 서비스 설정
    this.apiService = apiService || new IsochroneApiService();
    
    // 클래스 데이터 초기화
    this.pnuList = [];
    this.statistics = null;
    this.selectedPnu = null;
    this.analysisParams = null;
    this.indexSettings = []; // 평가 지수 설정
    this.isAnalyzing = false; // 분석 중 상태
    this.analyzedPnus = new Map(); // 이미 분석된 PNU와 결과 데이터를 저장하는 Map
    this.activeToggles = new Set(); // 활성화된 토글 상태를 저장하는 Set
    this.pnuRankingCalculated = false; // 순위 계산 여부
    
    // 컴포넌트 모듈 초기화
    this.initializeModules();
    
    // 이벤트 구독 설정
    this.setupEventSubscriptions();
    
    this.init();
  }
  
  /**
   * 컴포넌트 모듈 초기화
   */
  initializeModules() {
    // 렌더링 모듈
    this.renderer = new AnalysisResultRenderer(this);
    
    // 이벤트 핸들러 모듈
    this.eventsHandler = new AnalysisResultEventsHandler(this);
    
    // PNU 분석 서비스 모듈
    this.analysisService = new PnuAnalysisService(this.apiService);
  }
  
  /**
   * 이벤트 구독 설정
   */
  setupEventSubscriptions() {
    // 평가 지수 설정 업데이트 구독
    this.unsubscribeIndexSettings = eventBus.subscribe('indexSettings.updated', (settings) => {
      this.indexSettings = settings;
      
      // PNU 목록에 적용된 설정이 있다면 UI 업데이트
      if (this.pnuList.length > 0) {
        this.render();
        this.eventsHandler.attachEventListeners();
      }
    });
    
    // PNU 필터링 결과 구독 - 기존 이벤트
    this.unsubscribePnuFilter = eventBus.subscribe('pnuFilter.results', (pnuList) => {
      // 데이터 할당
      if (pnuList?.pnuList) {
        this.pnuList = [...pnuList.pnuList]; // 배열 복사로 참조 문제 방지
      } else if (Array.isArray(pnuList)) {
        this.pnuList = [...pnuList]; // 배열 복사
      } else {
        this.pnuList = []; // 유효한 데이터가 없으면 빈 배열로 초기화
      }
      
      // 기존 토글 상태 유지를 위해 활성화된 토글 정보 적용
      this.applyActiveToggles();
      
      // UI 업데이트
      this.render();
      this.eventsHandler.attachEventListeners();
    });
    
    // pnuFiltered 이벤트 구독 추가 (MapContainer에서 사용하는 이벤트)
    this.unsubscribePnuFiltered = eventBus.subscribe('pnuFiltered', (data) => {
      // 데이터 할당
      if (data?.pnuList) {
        this.pnuList = [...data.pnuList]; // 배열 복사로 참조 문제 방지
      } else {
        this.pnuList = []; // 유효한 데이터가 없으면 빈 배열로 초기화
      }
      
      // 기존 토글 상태 유지를 위해 활성화된 토글 정보 적용
      this.applyActiveToggles();
      
      // UI 업데이트
      this.render();
      this.eventsHandler.attachEventListeners();
    });
  }
  
  /**
   * 활성화된 토글 정보를 적용하는 메서드
   */
  applyActiveToggles() {
    // 활성화된 토글 정보가 있는 경우 PNU 목록에 적용
    if (this.activeToggles.size > 0) {
      this.pnuList.forEach((pnu, index) => {
        const pnuCode = typeof pnu === 'object' ? (pnu.code || pnu.pnu) : pnu;
        
        // 이미 분석된 PNU인 경우 analyzed 상태와 value 설정
        if (this.analyzedPnus.has(pnuCode)) {
          const analysisData = this.analyzedPnus.get(pnuCode);
          
          // 객체인 경우 속성 업데이트
          if (typeof this.pnuList[index] === 'object') {
            this.pnuList[index].analyzed = true;
            if (analysisData && analysisData.value !== undefined) {
              this.pnuList[index].value = analysisData.value;
            }
          } else {
            // 문자열인 경우 객체로 변환
            this.pnuList[index] = {
              pnu: pnuCode,
              code: pnuCode,
              analyzed: true,
              value: analysisData?.value
            };
          }
        }
        
        // 활성화된 토글 상태 적용
        if (typeof this.pnuList[index] === 'object') {
          this.pnuList[index].active = this.activeToggles.has(pnuCode);
        }
      });
    }
  }
  
  /**
   * 구독 해제
   */
  unsubscribe() {
    if (this.unsubscribeIndexSettings) {
      this.unsubscribeIndexSettings();
    }
    
    if (this.unsubscribePnuFilter) {
      this.unsubscribePnuFilter();
    }
    
    if (this.unsubscribePnuFiltered) {
      this.unsubscribePnuFiltered();
    }
  }
  
  /**
   * 컴포넌트 초기화
   */
  init() {
    // 초기 렌더링
    this.render();
    this.eventsHandler.attachEventListeners();
    
    // 디버깅용 빈 PNU 항목 추가 (테스트 목적)
    if (this.pnuList.length === 0) {
      // 이벤트 버스 통해 샘플 PNU 가져오기 시도
      eventBus.publish('pnu.getSample', {});
    }
  }
  
  /**
   * 컴포넌트 렌더링
   */
  render() {
    this.container.innerHTML = this.renderer.generateHtml();
  }
  
  /**
   * PNU 토글 상태 변경 처리
   * @param {string} pnu PNU 코드
   * @param {boolean} isActive 활성화 여부
   */
  async togglePnu(pnu, isActive) {
    console.log(`토글 변경: PNU=${pnu}, isActive=${isActive}, 분석여부=${this.analyzedPnus.has(pnu)}`);
    console.log('현재 분석된 PNU 목록:', Array.from(this.analyzedPnus.keys()));
    
    // 토글 상태 업데이트
    if (isActive) {
      this.activeToggles.add(pnu);
      
      // 아직 분석되지 않은 PNU인 경우에만 분석 실행
      if (!this.analyzedPnus.has(pnu)) {
        console.log(`PNU ${pnu} 분석 시작 (API 요청)`);
        try {
          // 분석 실행
          const analysisData = await this.analyzePnu(pnu);
          
          // 분석 데이터 저장
          this.analyzedPnus.set(pnu, analysisData);
          console.log(`PNU ${pnu} 분석 완료 및 데이터 저장됨`);
          
          // 맵에 표시하기 위한 이벤트 발행
          eventBus.publish('analysis.toggle', {
            pnu,
            isActive: true,
            data: analysisData
          });
        } catch (error) {
          console.error(`PNU ${pnu} 분석 실패:`, error);
          
          // 실패 시 토글 상태 롤백
          this.activeToggles.delete(pnu);
        }
      } else {
        console.log(`PNU ${pnu} 이미 분석됨, 캐시된 데이터 사용`);
        // 이미 분석된 PNU는 저장된 데이터를 사용하여 맵에 표시
        const analysisData = this.analyzedPnus.get(pnu);
        
        // 맵에 표시하기 위한 이벤트 발행
        eventBus.publish('analysis.toggle', {
          pnu,
          isActive: true,
          data: analysisData
        });
      }
    } else {
      // 비활성화 (토글 off)
      this.activeToggles.delete(pnu);
      
      // 맵에서 제거하기 위한 이벤트 발행
      eventBus.publish('analysis.toggle', {
        pnu,
        isActive: false
      });
    }
    
    // UI 업데이트를 위해 토글 상태 적용
    this.applyActiveToggles();
    
    // 순위를 점수 기준으로 다시 정렬
    if (this.analyzedPnus.size > 1) {
      console.log('토글 상태 변경 후 점수 기준으로 정렬합니다.');
      this.sortPnuListByScore();
    }
    
    // UI 다시 렌더링
    this.render();
    this.eventsHandler.attachEventListeners();
    
    // 콜백 호출
    this.onPnuToggle(pnu, isActive);
  }
  
  /**
   * PNU 분석 실행
   * @param {string} pnu PNU 코드
   * @returns {Promise<void>}
   */
  async analyzePnu(pnu) {
    // 평가 지수 설정 확인
    if (!this.indexSettings || this.indexSettings.length === 0) {
      throw new Error('평가 지수 설정이 없습니다. 평가 지수를 먼저 추가해주세요.');
    }
    
    // 선택된 평가 지수 중 첫 번째 항목 사용
    const indexSetting = this.indexSettings[0];
    const rangeMinutes = indexSetting.time;
    const gridTable = indexSetting.table;
    const columnName = indexSetting.column;
    
    try {
      // 분석 서비스를 통해 API 요청
      const response = await this.analysisService.analyze(
        pnu, 
        rangeMinutes, 
        gridTable, 
        columnName
      );
      
      // 분석 결과 처리
      if (response.success) {
        // 분석된 PNU 데이터 업데이트
        const pnuIndex = this.pnuList.findIndex(p => {
          if (typeof p === 'object') {
            return (p.code === pnu || p.pnu === pnu);
          } else {
            return p === pnu;
          }
        });
        
        if (pnuIndex !== -1) {
          // PNU 항목 찾기
          const pnuItem = this.pnuList[pnuIndex];
          
          // 객체인 경우 속성 업데이트
          if (typeof pnuItem === 'object') {
            pnuItem.analyzed = true;
            pnuItem.active = true; // 토글 활성화 상태로 설정
            if (response.data && response.data.value !== undefined) {
              pnuItem.value = response.data.value;
            }
          } else {
            // 문자열인 경우 객체로 변환
            this.pnuList[pnuIndex] = {
              pnu: pnu,
              code: pnu,
              analyzed: true,
              active: true, // 토글 활성화 상태로 설정
              value: response.data?.value
            };
          }
        }
        
        // 분석된 PNU 데이터 저장
        this.analyzedPnus.set(pnu, response.data);
        
        // 분석 파라미터 저장
        this.analysisParams = {
          pnu,
          rangeMinutes,
          gridTable,
          columnName,
          timestamp: new Date()
        };
        
        // 통계 정보 업데이트
        if (response.data && response.data.statistics) {
          this.statistics = response.data.statistics;
        }
        
        // 분석 완료 후 점수 기준으로 정렬 (2개 이상일 때만)
        if (this.analyzedPnus.size > 1) {
          console.log('분석 완료 후 점수 기준으로 정렬합니다.');
          this.sortPnuListByScore();
        }
        
        // UI 업데이트 (결과 표시 부분만)
        const statsGrid = this.container.querySelector('#statsGrid');
        if (statsGrid) {
          statsGrid.innerHTML = this.renderer.getStatisticsHtml();
        }
        
        // 분석정보 업데이트
        const analysisParamsInfo = this.container.querySelector('#analysisParamsInfo');
        if (analysisParamsInfo) {
          analysisParamsInfo.innerHTML = this.renderer.getAnalysisParamsHtml();
        }
        
        // 이벤트 발행: 분석 결과 업데이트
        eventBus.publish('analysis.results', {
          pnu,
          settings: indexSetting,
          results: response.data
        });
        
        // polygon과 gridPoints를 지도에 표시하기 위한 이벤트 발행
        if (response.data.polygon || response.data.gridPoints) {
          eventBus.publish('analysis.mapData', {
            pnu,
            polygon: response.data.polygon,
            gridPoints: response.data.gridPoints
          });
        }
        
        return response.data;
      } else {
        throw new Error(response.message || '분석 처리 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error(`${pnu} 분석 실패:`, error);
      throw error;
    }
  }
  
  /**
   * 분석 결과 데이터 설정
   * @param {Array} pnuList PNU 목록
   * @param {Object} statistics 통계 정보
   * @param {Object} params 분석 매개변수
   */
  setAnalysisResults(pnuList, statistics, params) {
    this.pnuList = pnuList || [];
    this.statistics = statistics || null;
    this.analysisParams = params || null;
    
    // 기존 토글 상태 유지를 위해 활성화된 토글 정보 적용
    this.applyActiveToggles();
    
    // 컴포넌트 다시 렌더링
    this.render();
    this.eventsHandler.attachEventListeners();
  }
  
  /**
   * 분석 결과 초기화
   */
  resetResults() {
    this.pnuList = [];
    this.statistics = null;
    this.analysisParams = null;
    this.selectedPnu = null;
    this.analyzedPnus.clear();
    this.activeToggles.clear();
    this.pnuRankingCalculated = false;
    
    // 컴포넌트 다시 렌더링
    this.render();
    this.eventsHandler.attachEventListeners();
  }
  
  /**
   * PNU 목록 설정
   * @param {Array} pnuList PNU 목록
   */
  setPnuList(pnuList) {
    // 데이터 유효성 검사 및 할당
    if (pnuList?.pnuList) {
      this.pnuList = [...pnuList.pnuList]; // 배열 복사
    } else if (Array.isArray(pnuList)) {
      this.pnuList = [...pnuList]; // 배열 복사
    } else {
      this.pnuList = []; // 데이터가 없으면 빈 배열
    }
    
    // 기존 토글 상태 유지를 위해 활성화된 토글 정보 적용
    this.applyActiveToggles();
    
    // UI 업데이트
    this.render();
    this.eventsHandler.attachEventListeners();
  }
  
  /**
   * 모든 PNU에 대한 순위 계산 실행
   */
  async calculateRankings() {
    // 평가 지수 설정 확인
    if (!this.indexSettings || this.indexSettings.length === 0) {
      alert('평가 지수 설정이 없습니다. 평가 지수를 먼저 추가해주세요.');
      return;
    }
    
    // PNU 목록 확인
    if (!this.pnuList || this.pnuList.length === 0) {
      alert('PNU 데이터가 없습니다.');
      return;
    }
    
    try {
      // 분석 진행 중 상태로 설정
      this.isAnalyzing = true;
      
      // UI 업데이트 - 분석 중 상태 표시
      this.render();
      
      // 선택된 평가 지수 중 첫 번째 항목 사용
      const indexSetting = this.indexSettings[0];
      const rangeMinutes = indexSetting.time;
      const gridTable = indexSetting.table;
      const columnName = indexSetting.column;
      
      // 아직 분석되지 않은 PNU 목록
      const unanalyzedPnus = this.pnuList.filter(pnu => {
        const pnuCode = typeof pnu === 'object' ? (pnu.code || pnu.pnu) : pnu;
        return !this.analyzedPnus.has(pnuCode);
      });
      
      console.log(`순위 계산 시작: 전체 ${this.pnuList.length}개 중 ${unanalyzedPnus.length}개 미분석`);
      
      // 분석되지 않은 모든 PNU에 대해 분석 수행
      let successCount = 0;
      let failedPnus = [];
      let currentProgress = 0;
      const totalPnus = unanalyzedPnus.length;
      
      // 순차적으로 처리하되, 각 PNU의 처리 결과 기록
      for (const pnu of unanalyzedPnus) {
        const pnuCode = typeof pnu === 'object' ? (pnu.code || pnu.pnu) : pnu;
        currentProgress++;
        
        try {
          // 현재 분석중인 PNU 출력
          console.log(`PNU ${pnuCode} 분석 중... (${currentProgress}/${totalPnus})`);
          
          try {
            // 분석 API 호출
            const response = await this.analysisService.analyze(
              pnuCode, 
              rangeMinutes,
              gridTable,
              columnName
            );
            
            // 성공한 경우 데이터 저장
            if (response.success) {
              this.analyzedPnus.set(pnuCode, response.data);
              successCount++;
              
              // PnuList에 값 업데이트
              this.updatePnuValue(pnuCode, response.data?.value);
            } else {
              // 실패한 경우 목록에 추가
              failedPnus.push({ pnuCode, reason: response.message || '알 수 없는 오류' });
              console.warn(`PNU ${pnuCode} 분석 실패: ${response.message}`);
              
              // 실패한 경우에도 PNU 객체 업데이트 (실패 상태로)
              this.updatePnuValue(pnuCode, null, true);
            }
          } catch (error) {
            // API 오류 발생 시 처리
            failedPnus.push({ pnuCode, reason: error.message || '요청 오류' });
            console.error(`PNU ${pnuCode} 분석 오류:`, error);
            
            // 오류가 발생한 경우에도 PNU 객체 업데이트 (실패 상태로)
            this.updatePnuValue(pnuCode, null, true);
          }
        } catch (unexpectedError) {
          // 예상치 못한 오류 발생 시에도 계속 진행
          console.error(`PNU ${pnuCode} 처리 중 예상치 못한 오류:`, unexpectedError);
          failedPnus.push({ pnuCode, reason: '내부 처리 오류' });
        }
      }
      
      console.log(`분석 완료: 성공=${successCount}, 실패=${failedPnus.length}`);
      
      // 모든 분석이 완료된 후에 순위 처리
      console.log('점수 기준으로 내림차순 정렬 시작');
      
      // 모든 PNU(이미 분석된 것 포함) 점수 기준으로 내림차순 정렬
      this.sortPnuListByScore();
      
      // 데이터가 없는 실패한 PNU는 맨 뒤로 정렬
      this.moveFailedPnusToEnd(failedPnus.map(item => item.pnuCode));
      
      // 순위 계산 완료 표시
      this.pnuRankingCalculated = true;
      
      console.log('점수 기준 정렬 완료, UI 업데이트');
      
      // UI 업데이트
      this.render();
      this.eventsHandler.attachEventListeners();
      
      // 분석 완료 메시지
      if (failedPnus.length > 0) {
        const failMessage = failedPnus.length <= 3 
          ? failedPnus.map(item => `${item.pnuCode}: ${item.reason}`).join('\n') 
          : `${failedPnus.length}개 PNU (자세한 내용은 콘솔을 확인하세요)`;
          
        alert(`순위 계산 완료!\n성공: ${successCount}개, 실패: ${failedPnus.length}개\n\n실패한 항목: \n${failMessage}\n\n(실패한 항목은 후순위로 정렬됩니다)`);
      } else {
        alert(`순위 계산 완료!\n총 ${successCount}개의 PNU 분석 완료`);
      }
    } catch (error) {
      console.error('순위 계산 중 오류 발생:', error);
      alert(`순위 계산 중 오류가 발생했습니다: ${error.message}`);
    } finally {
      // 분석 완료 후 상태 변경
      this.isAnalyzing = false;
      
      // UI 업데이트
      this.render();
      this.eventsHandler.attachEventListeners();
    }
  }
  
  /**
   * PNU 값 업데이트
   * @param {string} pnuCode PNU 코드
   * @param {number} value 분석 값
   * @param {boolean} isFailed 분석 실패 여부
   */
  updatePnuValue(pnuCode, value, isFailed = false) {
    const pnuIndex = this.pnuList.findIndex(p => {
      if (typeof p === 'object') {
        return (p.code === pnuCode || p.pnu === pnuCode);
      } else {
        return p === pnuCode;
      }
    });
    
    if (pnuIndex !== -1) {
      const pnuItem = this.pnuList[pnuIndex];
      
      // 점수 정보 가져오기
      let score = '';
      const analysisData = this.analyzedPnus.get(pnuCode);
      if (analysisData && analysisData.statistics && analysisData.statistics.sum) {
        score = analysisData.statistics.sum;
      }
      
      if (typeof pnuItem === 'object') {
        pnuItem.analyzed = true;
        pnuItem.value = value;
        pnuItem.score = score; // 점수 정보 추가
        if (isFailed) {
          pnuItem.failed = true;
        }
      } else {
        this.pnuList[pnuIndex] = {
          pnu: pnuCode,
          code: pnuCode,
          analyzed: true,
          value: value,
          score: score, // 점수 정보 추가
          failed: isFailed
        };
      }
    }
  }
  
  /**
   * PNU 목록을 점수 기준으로 내림차순 정렬
   */
  sortPnuListByScore() {
    this.pnuList.sort((a, b) => {
      // 점수 값 가져오기 (score 필드 우선, 없으면 분석 데이터에서 가져오기)
      let scoreA = 0;
      let scoreB = 0;
      
      if (typeof a === 'object') {
        // 객체에 score 값이 있으면 사용
        if (a.score !== undefined && a.score !== '') {
          scoreA = Number(a.score);
        } 
        // 객체에 score 값이 없고 pnu/code가 있으면 분석 데이터에서 가져오기
        else if ((a.pnu || a.code) && this.analyzedPnus.has(a.pnu || a.code)) {
          const analysisData = this.analyzedPnus.get(a.pnu || a.code);
          if (analysisData && analysisData.statistics && analysisData.statistics.sum) {
            scoreA = Number(analysisData.statistics.sum);
          }
        }
      } else if (typeof a === 'string' && this.analyzedPnus.has(a)) {
        // 문자열인 경우 PNU 코드로 분석 데이터에서 가져오기
        const analysisData = this.analyzedPnus.get(a);
        if (analysisData && analysisData.statistics && analysisData.statistics.sum) {
          scoreA = Number(analysisData.statistics.sum);
        }
      }
      
      if (typeof b === 'object') {
        if (b.score !== undefined && b.score !== '') {
          scoreB = Number(b.score);
        } 
        else if ((b.pnu || b.code) && this.analyzedPnus.has(b.pnu || b.code)) {
          const analysisData = this.analyzedPnus.get(b.pnu || b.code);
          if (analysisData && analysisData.statistics && analysisData.statistics.sum) {
            scoreB = Number(analysisData.statistics.sum);
          }
        }
      } else if (typeof b === 'string' && this.analyzedPnus.has(b)) {
        const analysisData = this.analyzedPnus.get(b);
        if (analysisData && analysisData.statistics && analysisData.statistics.sum) {
          scoreB = Number(analysisData.statistics.sum);
        }
      }
      
      // NaN 값 처리
      if (isNaN(scoreA)) scoreA = 0;
      if (isNaN(scoreB)) scoreB = 0;
      
      // 내림차순 정렬 (큰 값이 먼저 오도록)
      return scoreB - scoreA;
    });
  }
  
  /**
   * 분석 실패한 PNU를 목록 맨 뒤로 이동
   * @param {Array} failedPnus 분석 실패한 PNU 코드 목록
   */
  moveFailedPnusToEnd(failedPnus) {
    // 실패한 PNU가 없으면 처리하지 않음
    if (!failedPnus || failedPnus.length === 0) return;
    
    // 실패한 PNU를 맨 뒤로 이동
    this.pnuList.sort((a, b) => {
      const codeA = typeof a === 'object' ? (a.code || a.pnu) : a;
      const codeB = typeof b === 'object' ? (b.code || b.pnu) : b;
      
      const isFailedA = failedPnus.includes(codeA);
      const isFailedB = failedPnus.includes(codeB);
      
      if (isFailedA && !isFailedB) return 1; // a가 실패한 경우 뒤로
      if (!isFailedA && isFailedB) return -1; // b가 실패한 경우 뒤로
      return 0; // 둘 다 실패했거나 둘 다 성공한 경우 현재 순서 유지
    });
  }
} 