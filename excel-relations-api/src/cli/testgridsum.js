const readline = require('readline');
const axios = require('axios');
const db = require('../config/db');

async function callOpenRouteAPI(x, y, rangeMinutes) {
  const url = 'http://localhost:8081/ors/v2/isochrones/driving-car';
  
  const body = {
    locations: [[parseFloat(x), parseFloat(y)]],
    range: [rangeMinutes],
    smoothing: 0,
    range_type: "time",
    attributes: ["area", "reachfactor"],
    area_units: "km"
  };

  try {
    const response = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('❗ OpenRoute API 호출 오류:', error.message);
    throw error;
  }
}

function coordinatesToWKT(coordinates) {
  if (!Array.isArray(coordinates) || coordinates.length === 0) {
    throw new Error('Invalid coordinates data');
  }

  const points = coordinates[0];
  const pointStrings = points.map(([x, y]) => `${x} ${y}`);
  const wkt = `POLYGON((${pointStrings.join(', ')}))`;
  return wkt;
}

async function getGridTables() {
  const query = `
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = 'public'
      AND table_name LIKE 'grid_%';
  `;

  try {
    const { rows } = await db.query(query);
    return rows.map(row => row.table_name);
  } catch (error) {
    console.error('❗ 그리드 테이블 목록 조회 중 오류:', error.message);
    throw error;
  }
}

async function getNumericColumns(tableName) {
  const query = `
    SELECT column_name
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = $1
      AND data_type IN ('integer', 'numeric', 'real', 'double precision', 'smallint', 'bigint');
  `;

  try {
    const { rows } = await db.query(query, [tableName]);
    return rows.map(row => row.column_name);
  } catch (error) {
    console.error(`❗ ${tableName} 테이블의 숫자형 컬럼 조회 중 오류:`, error.message);
    throw error;
  }
}

function createReadline() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

async function askPNU() {
  const rl = createReadline();
  return new Promise((resolve) => {
    rl.question('PNU 값을 입력하세요 (뒤로가기: b): ', (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function askRange() {
  const rl = createReadline();
  return new Promise((resolve) => {
    rl.question('이동시간(분)을 입력하세요 (예: 15, 뒤로가기: b): ', (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function selectGridTable(tables) {
  const rl = createReadline();
  return new Promise((resolve) => {
    console.log('사용 가능한 그리드 테이블 목록:');
    tables.forEach((table, idx) => {
      console.log(`[${idx + 1}] ${table}`);
    });

    rl.question('사용할 테이블 번호를 선택하세요 (뒤로가기: b): ', (answer) => {
      rl.close();
      if (answer.trim().toLowerCase() === 'b' || answer.trim().toLowerCase() === 'back') {
        resolve('back');
      } else {
        const selectedIdx = parseInt(answer, 10) - 1;
        if (selectedIdx >= 0 && selectedIdx < tables.length) {
          resolve(tables[selectedIdx]);
        } else {
          console.error('❗ 잘못된 번호입니다. 다시 시도하세요.');
          resolve('invalid');
        }
      }
    });
  });
}

async function selectNumericColumn(columns) {
  const rl = createReadline();
  return new Promise((resolve) => {
    console.log('사용 가능한 숫자형 컬럼 목록:');
    columns.forEach((column, idx) => {
      console.log(`[${idx + 1}] ${column}`);
    });

    rl.question('사용할 컬럼 번호를 선택하세요 (뒤로가기: b): ', (answer) => {
      rl.close();
      if (answer.trim().toLowerCase() === 'b' || answer.trim().toLowerCase() === 'back') {
        resolve('back');
      } else {
        const selectedIdx = parseInt(answer, 10) - 1;
        if (selectedIdx >= 0 && selectedIdx < columns.length) {
          resolve(columns[selectedIdx]);
        } else {
          console.error('❗ 잘못된 번호입니다. 다시 시도하세요.');
          resolve('invalid');
        }
      }
    });
  });
}

async function sumColumnInPolygon(tableName, columnName, wktPolygon) {
  const query = `
    SELECT SUM(${columnName}) AS total_value
    FROM ${tableName}
    WHERE ST_Contains(
      ST_SetSRID(
        ST_GeomFromText($1), 4326
      ),
      geom
    );
  `;

  try {
    const { rows } = await db.query(query, [wktPolygon]);
    return rows[0].total_value;
  } catch (error) {
    console.error('❗ 그리드 합산 쿼리 중 오류:', error.message);
    throw error;
  }
}

async function startCli() {
  console.log('PNU를 입력하면 해당 영역의 데이터를 조회하고 분석합니다.');
  console.log('각 단계에서 "b"를 입력하면 이전 단계로 돌아갑니다.');

  let pnu, rangeMinutes, x, y, apiResult, wktPolygon, selectedTable, selectedColumn;
  let tables = [];
  let columns = [];

  // PNU 입력 단계
  while (true) {
    pnu = await askPNU();
    
    if (pnu.toLowerCase() === 'exit' || pnu.toLowerCase() === 'e') {
      console.log('프로그램을 종료합니다.');
      break;
    }

    // 이동시간 입력 단계
    while (true) {
      const rangeInput = await askRange();
      
      if (rangeInput.toLowerCase() === 'b' || rangeInput.toLowerCase() === 'back') {
        console.log('PNU 입력 단계로 돌아갑니다.');
        break;
      }
      
      rangeMinutes = parseInt(rangeInput, 10);
      
      if (isNaN(rangeMinutes) || rangeMinutes <= 0) {
        console.error('❗ 잘못된 이동시간 입력입니다. 숫자를 입력해주세요.');
        continue;
      }

      try {
        const { rows } = await db.query(
          `SELECT x, y FROM src_pnu_cen_4 WHERE pnu = $1`,
          [pnu]
        );

        if (rows.length === 0) {
          console.error('❗ 입력한 PNU에 해당하는 데이터가 없습니다.');
          console.log('PNU 입력 단계로 돌아갑니다.');
          break;
        }

        ({ x, y } = rows[0]);
        console.log(`조회된 좌표: x=${x}, y=${y}`);

        apiResult = await callOpenRouteAPI(x, y, rangeMinutes);
        const coordinates = apiResult.features[0].geometry.coordinates;
        
        console.log('OpenRoute API로 받은 아이소크론맵 폴리곤 좌표:');
        console.dir(coordinates, { depth: null });

        wktPolygon = coordinatesToWKT(coordinates);
        console.log('변환된 WKT POLYGON:');
        console.log(wktPolygon);

        // 테이블 선택 단계
        tables = await getGridTables();
        if (tables.length === 0) {
          console.error('❗ 사용 가능한 그리드 테이블이 없습니다.');
          console.log('PNU 입력 단계로 돌아갑니다.');
          break;
        }

        // 테이블 선택 루프
        while (true) {
          selectedTable = await selectGridTable(tables);
          
          if (selectedTable === 'back' || selectedTable === 'b') {
            console.log('이동시간 입력 단계로 돌아갑니다.');
            break;
          }
          
          if (selectedTable === 'invalid') {
            continue;
          }

          console.log(`선택한 테이블: ${selectedTable}`);

          // 숫자형 컬럼 선택 단계
          columns = await getNumericColumns(selectedTable);
          if (columns.length === 0) {
            console.error(`❗ ${selectedTable} 테이블에 사용 가능한 숫자형 컬럼이 없습니다.`);
            console.log('테이블 선택 단계로 돌아갑니다.');
            continue;
          }

          // 컬럼 선택 루프
          while (true) {
            selectedColumn = await selectNumericColumn(columns);

            if (selectedColumn === 'back' || selectedColumn === 'b') {
              console.log('테이블 선택 단계로 돌아갑니다.');
              break;
            }

            if (selectedColumn === 'invalid') {
              continue;
            }

            console.log(`선택한 컬럼: ${selectedColumn}`);

            const totalValue = await sumColumnInPolygon(selectedTable, selectedColumn, wktPolygon);
            console.log(`선택한 영역 내 ${selectedColumn} 총합: ${totalValue !== null ? totalValue : 0}`);
            
            // 결과 표시 후 처음부터 다시 시작할지 물어보기
            const rl = createReadline();
            const continueAnswer = await new Promise((resolve) => {
              rl.question('분석을 계속하시겠습니까? (y/n): ', (answer) => {
                rl.close();
                resolve(answer.trim().toLowerCase());
              });
            });
            
            if (continueAnswer === 'y') {
              console.log('컬럼 선택 단계로 돌아갑니다.');
              continue;
            } else {
              console.log('PNU 입력 단계로 돌아갑니다.');
              break;
            }
          }

          // 컬럼 선택 단계에서 back을 선택한 경우
          if (selectedColumn === 'back' || selectedColumn === 'b') {
            continue;
          }

          break;
        }
        
        // 테이블 선택 단계에서 back을 선택한 경우
        if (selectedTable === 'back' || selectedTable === 'b') {
          continue;
        }
        
        break;
      } catch (error) {
        console.error('❗ 처리 중 오류가 발생했습니다:', error.message);
        console.log('이동시간 입력 단계로 돌아갑니다.');
        continue;
      }
    }
  }

  await db.pool.end();
  console.log('데이터베이스 연결을 종료했습니다.');
}

startCli();