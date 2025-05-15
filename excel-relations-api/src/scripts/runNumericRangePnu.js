// src/scripts/runNumericRangePnu.js
const numericColumnsModel = require('../models/numericColumnsModel');
const numericRangePnuModel = require('../models/numericRangePnuModel');

// 명령행 인자 파싱
const args = process.argv.slice(2);
const tableName = args[0] || 'src_lxmap_demo_2'; // 기본값 설정
const columnName = args[1] || 'ai_price'; // 기본값 설정
const rangePercent = parseFloat(args[2] || 10); // 기본값 10%

async function run() {
  try {
    // 1. 모든 숫자형 컬럼 정보 조회
    console.log('===== 숫자형 컬럼 정보 조회 =====');
    const numericColumns = await numericColumnsModel.getNumericColumns();
    console.table(numericColumns);

    // 2. 대상 테이블/컬럼 확인
    const targetColumn = numericColumns.find(
      col => col.table_name === tableName && col.column_name === columnName
    );
    
    if (!targetColumn) {
      console.error(`오류: ${tableName} 테이블의 ${columnName} 컬럼을 찾을 수 없습니다.`);
      console.log('유효한 테이블과 컬럼을 지정해주세요:');
      console.table(numericColumns);
      return;
    }

    // 3. 지정된 범위에 따른 PNU 목록 조회
    console.log(`\n===== ${tableName}.${columnName} 컬럼 기준 PNU 필터링 (${rangePercent}%) =====`);
    const result = await numericRangePnuModel.getFilteredPnuByPercentage(
      tableName, 
      columnName, 
      rangePercent
    );
    
    // 4. 결과 출력
    console.log(`\n[필터링 정보]`);
    console.log(`- 테이블/컬럼: ${result.table_name}.${result.column_name}`);
    console.log(`- 전체 범위: ${result.min_value} ~ ${result.max_value} (평균: ${result.avg_value.toFixed(2)})`);
    console.log(`- 필터 범위: ${result.filter_min.toFixed(2)} ~ ${result.filter_max.toFixed(2)} (평균 기준 ±${result.range_percent}%)`);
    console.log(`- 필터링된 PNU 개수: ${result.pnu_count}`);
    
    if (result.pnu_count > 0) {
      console.log(`\n[필터링된 PNU 목록 (최대 10개)]`);
      console.table(result.pnu_list.slice(0, 10));
      
      if (result.pnu_count > 10) {
        console.log(`... 외 ${result.pnu_count - 10}개`);
      }
    }
  } catch (error) {
    console.error('실행 중 오류 발생:', error);
  }
}

run();