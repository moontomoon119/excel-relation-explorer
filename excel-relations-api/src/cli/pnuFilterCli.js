#!/usr/bin/env node
// src/cli/pnuFilterCli.js
const readline = require('readline');
const pnuFilterService = require('../services/pnuFilterService');

// 터미널 입출력 설정
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 색상 코드
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

/**
 * 컬럼 정보 출력 함수
 */
function printColumns(columns) {
  if (!columns || columns.length === 0) {
    console.log(`${colors.yellow}조회된 컬럼이 없습니다.${colors.reset}`);
    return;
  }
  
  // 콘솔 테이블 헤더
  console.log('┌─────────────────────────────┬─────────────────┬──────────────┬───────────────┬───────────────┬───────────────┐');
  console.log(`│ ${colors.bright}테이블명${colors.reset}                    │ ${colors.bright}컬럼명${colors.reset}          │ ${colors.bright}데이터타입${colors.reset}    │ ${colors.bright}최소값${colors.reset}        │ ${colors.bright}최대값${colors.reset}        │ ${colors.bright}평균값${colors.reset}        │`);
  console.log('├─────────────────────────────┼─────────────────┼──────────────┼───────────────┼───────────────┼───────────────┤');
  
  // 데이터 행
  columns.forEach(col => {
    const tableName = col.table_name.padEnd(25).substring(0, 25);
    const columnName = col.column_name.padEnd(15).substring(0, 15);
    const dataType = col.data_type.padEnd(12).substring(0, 12);
    const minValue = col.min_value !== null ? String(col.min_value).padEnd(13).substring(0, 13) : 'NULL'.padEnd(13);
    const maxValue = col.max_value !== null ? String(col.max_value).padEnd(13).substring(0, 13) : 'NULL'.padEnd(13);
    const avgValue = col.avg_value !== null ? String(col.avg_value.toFixed(2)).padEnd(13).substring(0, 13) : 'NULL'.padEnd(13);
    
    console.log(`│ ${tableName} │ ${columnName} │ ${dataType} │ ${minValue} │ ${maxValue} │ ${avgValue} │`);
  });
  
  console.log('└─────────────────────────────┴─────────────────┴──────────────┴───────────────┴───────────────┴───────────────┘');
}

/**
 * PNU 목록 출력 함수
 */
function printPnuList(result, limit = 10) {
  console.log(`\n${colors.green}[필터링 정보]${colors.reset}`);
  console.log(`- 테이블/컬럼: ${result.table_name}.${result.column_name}`);
  console.log(`- 전체 범위: ${result.min_value} ~ ${result.max_value}`);
  
  if (result.center_value) {
    console.log(`- 중심값: ${result.center_value}`);
    console.log(`- 범위 백분율: ${result.range_percent}%`);
  }
  
  console.log(`- 필터 범위: ${result.filter_min.toFixed(2)} ~ ${result.filter_max.toFixed(2)}`);
  console.log(`- 필터링된 PNU 개수: ${result.pnu_count}`);
  
  if (result.pnu_count > 0) {
    console.log(`\n${colors.green}[필터링된 PNU 목록 (최대 ${limit}개)]${colors.reset}`);
    
    console.log('┌─────────────────────────────┐');
    console.log(`│ ${colors.bright}PNU${colors.reset}                       │`);
    console.log('├─────────────────────────────┤');
    
    result.pnu_list.slice(0, limit).forEach(row => {
      console.log(`│ ${row.pnu.padEnd(25)} │`);
    });
    
    console.log('└─────────────────────────────┘');
    
    if (result.pnu_count > limit) {
      console.log(`... 외 ${result.pnu_count - limit}개`);
    }
  }
}

/**
 * 명령어 도움말 출력
 */
function printHelp() {
  console.log(`\n${colors.bright}${colors.cyan}PNU 필터링 CLI 도움말${colors.reset}`);
  console.log(`${colors.cyan}-------------------${colors.reset}`);
  console.log(`${colors.bright}ls${colors.reset} - 모든 숫자형 컬럼 목록 조회`);
  console.log(`${colors.bright}ls [테이블명]${colors.reset} - 특정 테이블의 숫자형 컬럼 조회`);
  console.log(`${colors.bright}info [테이블명] [컬럼명]${colors.reset} - 특정 컬럼 정보 조회`);
  console.log(`${colors.bright}filter [테이블명] [컬럼명] [최소값] [최대값]${colors.reset} - 범위 기준 PNU 필터링`);
  console.log(`${colors.bright}percent [테이블명] [컬럼명] [중심값] [범위%]${colors.reset} - 백분율 기준 PNU 필터링`);
  console.log(`${colors.bright}help${colors.reset} - 도움말 표시`);
  console.log(`${colors.bright}exit${colors.reset} - 프로그램 종료`);
}

/**
 * CLI 메인 함수
 */
async function startCli() {
  console.log(`${colors.bright}${colors.green}PNU 필터링 CLI 시작 - 데이터 로딩 중...${colors.reset}`);
  
  try {
    // 서비스 초기화
    await pnuFilterService.initialize();
    console.log(`${colors.green}데이터 로딩 완료. 'help' 명령어로 도움말을 확인하세요.${colors.reset}`);
    
    // 명령 프롬프트 표시 및 처리
    const promptUser = () => {
      rl.question(`\n${colors.bright}${colors.blue}pnu-filter>${colors.reset} `, async (input) => {
        const args = input.trim().split(/\s+/);
        const command = args[0].toLowerCase();
        
        try {
          switch (command) {
            case 'ls':
              if (args[1]) {
                const tableColumns = await pnuFilterService.getTableNumericColumns(args[1]);
                console.log(`\n${colors.bright}'${args[1]}' 테이블의 숫자형 컬럼:${colors.reset}`);
                printColumns(tableColumns);
              } else {
                const allColumns = await pnuFilterService.getAllNumericColumns();
                console.log(`\n${colors.bright}모든 숫자형 컬럼:${colors.reset}`);
                printColumns(allColumns);
              }
              break;
              
            case 'info':
              if (args.length < 3) {
                console.log(`${colors.red}테이블명과 컬럼명을 모두 입력하세요.${colors.reset}`);
                break;
              }
              const columnInfo = await pnuFilterService.getColumnInfo(args[1], args[2]);
              if (columnInfo) {
                console.log(`\n${colors.bright}'${args[1]}.${args[2]}' 컬럼 정보:${colors.reset}`);
                printColumns([columnInfo]);
              } else {
                console.log(`${colors.red}컬럼 정보를 찾을 수 없습니다.${colors.reset}`);
              }
              break;
              
            case 'filter':
              if (args.length < 5) {
                console.log(`${colors.red}사용법: filter [테이블명] [컬럼명] [최소값] [최대값]${colors.reset}`);
                break;
              }
              const filterResult = await pnuFilterService.filterPnuByRange(
                args[1], args[2], args[3], args[4]
              );
              printPnuList(filterResult);
              break;
              
            case 'percent':
              if (args.length < 3) {
                console.log(`${colors.red}테이블명과 컬럼명을 입력하세요.${colors.reset}`);
                break;
              }
              // 선택적 매개변수 (중심값, 범위%)
              const centerValue = args.length >= 4 ? args[3] : null;
              const rangePercent = args.length >= 5 ? args[4] : 10;
              
              const percentResult = await pnuFilterService.filterPnuByPercentage(
                args[1], args[2], centerValue, rangePercent
              );
              printPnuList(percentResult);
              break;
              
            case 'help':
              printHelp();
              break;
              
            case 'exit':
            case 'quit':
              console.log(`${colors.green}프로그램을 종료합니다.${colors.reset}`);
              rl.close();
              process.exit(0);
              return;
              
            default:
              if (command) {
                console.log(`${colors.red}알 수 없는 명령어입니다. 'help'를 입력하여 도움말을 확인하세요.${colors.reset}`);
              }
          }
        } catch (error) {
          console.log(`${colors.red}오류: ${error.message}${colors.reset}`);
        }
        
        promptUser();
      });
    };
    
    promptUser();
    
  } catch (error) {
    console.error(`${colors.red}초기화 오류: ${error.message}${colors.reset}`);
    rl.close();
    process.exit(1);
  }
}

// CLI 시작
startCli();