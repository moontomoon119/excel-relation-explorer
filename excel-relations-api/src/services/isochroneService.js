const axios = require('axios');
const db = require('../config/db');
const isochroneUtils = require('../utils/isochroneUtils');

/**
 * OpenRoute API를 호출하여 아이소크론 맵 폴리곤을 가져옵니다.
 */
async function callOpenRouteAPI(x, y, rangeMinutes) {
  const url = process.env.OPENROUTE_API_URL || 'http://localhost:8081/ors/v2/isochrones/foot-walking';
  
  const body = {
    locations: [[parseFloat(x), parseFloat(y)]],
    range: [rangeMinutes*60],
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

/**
 * PNU로부터 중심점 좌표를 조회합니다.
 */
async function getCoordinatesFromPNU(pnu) {
  try {
    const { rows } = await db.query(
      `SELECT x, y FROM pnu_cen_4 WHERE pnu = $1`,
      [pnu]
    );

    if (rows.length === 0) {
      throw new Error('입력한 PNU에 해당하는 데이터가 없습니다.');
    }

    return rows[0];
  } catch (error) {
    console.error('❗ PNU로 좌표 조회 중 오류:', error.message);
    throw error;
  }
}

/**
 * 폴리곤 내에 있는 그리드 데이터를 조회합니다.
 */
async function getGridPointsInPolygon(tableName, columnName, wktPolygon) {
  if (!isochroneUtils.isValidTableName(tableName)) {
    throw new Error('유효하지 않은 테이블명입니다.');
  }

  const query = `
    SELECT 
      ST_X(ST_Transform(geom, 4326)) as lon, 
      ST_Y(ST_Transform(geom, 4326)) as lat, 
      ${columnName} as value
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
    return rows;
  } catch (error) {
    console.error('❗ 그리드 포인트 조회 중 오류:', error.message);
    throw error;
  }
}

/**
 * 폴리곤 내 그리드 데이터의 합계를 계산합니다.
 */
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
    return rows[0].total_value || 0;
  } catch (error) {
    console.error('❗ 그리드 합산 쿼리 중 오류:', error.message);
    throw error;
  }
}

/**
 * 통계 데이터를 계산합니다. 데이터 타입에 따라 다른 통계를 제공합니다.
 */
async function calculateStatistics(tableName, columnName, wktPolygon) {
  if (!isochroneUtils.isValidTableName(tableName)) {
    throw new Error('유효하지 않은 테이블명입니다.');
  }

  try {
    // 데이터 타입 확인
    const { rows: typeInfo } = await db.query(`
      SELECT data_type 
      FROM information_schema.columns 
      WHERE table_name = $1 AND column_name = $2
    `, [tableName, columnName]);
    
    const dataType = typeInfo[0]?.data_type;
    let statistics = {};
    
    // 숫자형 데이터인 경우
    if (isochroneUtils.isNumericType(dataType)) {
      // 합계
      const sumQuery = `
        SELECT 
          SUM(${columnName}) AS sum,
          AVG(${columnName}) AS avg,
          MIN(${columnName}) AS min,
          MAX(${columnName}) AS max,
          COUNT(${columnName}) AS count
        FROM ${tableName}
        WHERE ST_Contains(
          ST_SetSRID(ST_GeomFromText($1), 4326),
          geom
        );
      `;
      const { rows: sumResult } = await db.query(sumQuery, [wktPolygon]);
      statistics = sumResult[0];
    } 
    // 문자형 데이터인 경우
    else if (isochroneUtils.isStringType(dataType)) {
      // 각 값의 출현 빈도 계산
      const frequencyQuery = `
        SELECT 
          ${columnName} AS value,
          COUNT(*) AS frequency
        FROM ${tableName}
        WHERE ST_Contains(
          ST_SetSRID(ST_GeomFromText($1), 4326),
          geom
        )
        GROUP BY ${columnName}
        ORDER BY frequency DESC;
      `;
      const { rows: freqResult } = await db.query(frequencyQuery, [wktPolygon]);
      statistics = {
        frequency: freqResult,
        count: freqResult.reduce((sum, item) => sum + parseInt(item.frequency), 0)
      };
    }
    
    return statistics;
  } catch (error) {
    console.error('❗ 통계 계산 중 오류:', error.message);
    throw error;
  }
}

/**
 * 그리드 테이블 목록을 조회합니다.
 */
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

/**
 * 테이블의 컬럼 정보를 조회합니다.
 */
async function getTableColumns(tableName) {
  if (!isochroneUtils.isValidTableName(tableName)) {
    throw new Error('유효하지 않은 테이블명입니다.');
  }

  const query = `
    SELECT 
      column_name, 
      data_type,
      CASE 
        WHEN data_type IN ('integer', 'numeric', 'real', 'double precision', 'smallint', 'bigint') THEN 'number'
        WHEN data_type IN ('character varying', 'varchar', 'text', 'char', 'character') THEN 'string'
        ELSE 'other'
      END as type_category
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = $1
    ORDER BY ordinal_position;
  `;

  try {
    const { rows } = await db.query(query, [tableName]);
    return rows;
  } catch (error) {
    console.error(`❗ ${tableName} 테이블의 컬럼 정보 조회 중 오류:`, error.message);
    throw error;
  }
}

/**
 * 아이소크론 분석을 수행합니다.
 */
async function analyzeIsochrone(pnu, rangeMinutes, gridTable, columnName) {
  if (!isochroneUtils.isValidTableName(gridTable)) {
    throw new Error('유효하지 않은 테이블명입니다.');
  }

  // 1. PNU에서 좌표값 가져오기
  const { x, y } = await getCoordinatesFromPNU(pnu);
  
  // 2. OpenRoute API 호출하여 아이소크론맵 폴리곤 가져오기
  const apiResult = await callOpenRouteAPI(x, y, parseInt(rangeMinutes, 10));
  const coordinates = apiResult.features[0].geometry.coordinates;
  
  // 3. 폴리곤을 WKT 형식으로 변환
  const wktPolygon = isochroneUtils.coordinatesToWKT(coordinates);
  
  // 4. 폴리곤 내의 그리드 포인트 데이터 가져오기
  const gridPoints = await getGridPointsInPolygon(gridTable, columnName, wktPolygon);
  
  // 5. 통계 계산
  const statistics = await calculateStatistics(gridTable, columnName, wktPolygon);
  
  return {
    pnu,
    center: { x, y },
    rangeMinutes,
    polygon: apiResult.features[0].geometry,
    gridPoints,
    statistics,
    isochroneInfo: {
      area: apiResult.features[0].properties.area,
      reachfactor: apiResult.features[0].properties.reachfactor
    }
  };
}

module.exports = {
  analyzeIsochrone,
  getGridTables,
  getTableColumns,
  getCoordinatesFromPNU,
  callOpenRouteAPI,
  getGridPointsInPolygon,
  calculateStatistics
}; 