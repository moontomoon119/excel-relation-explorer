// src/scripts/runNumericColumnsCheck.js
const numericColumnsModel = require('../models/numericColumnsModel');

async function run() {
  try {
    console.log('===== 숫자형 컬럼 정보 조회 =====');
    const numericColumns = await numericColumnsModel.getNumericColumns();
    console.table(numericColumns);

    console.log('\n===== 숫자형 컬럼 최소/최대값 조회 =====');
    const minMaxValues = await numericColumnsModel.getNumericColumnsMinMax();
    console.table(minMaxValues);
  } catch (error) {
    console.error('실행 중 오류 발생:', error);
  }
}

run();