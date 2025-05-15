/**
 * WKT 형식의 폴리곤 문자열을 만듭니다.
 * @param {Array} coordinates 좌표 배열
 * @returns {String} WKT 형식의 폴리곤 문자열
 */
function coordinatesToWKT(coordinates) {
  if (!Array.isArray(coordinates) || coordinates.length === 0) {
    throw new Error('유효하지 않은 좌표 데이터입니다.');
  }

  const points = coordinates[0];
  const pointStrings = points.map(([x, y]) => `${x} ${y}`);
  return `POLYGON((${pointStrings.join(', ')}))`;
}

/**
 * SQL 인젝션을 방지하기 위한 테이블명 검증
 * @param {String} tableName 테이블명
 * @returns {Boolean} 검증 결과
 */
function isValidTableName(tableName) {
  return /^[a-zA-Z0-9_]+$/.test(tableName);
}

/**
 * 숫자형 데이터 타입 확인
 * @param {String} dataType 데이터 타입
 * @returns {Boolean} 숫자형 여부
 */
function isNumericType(dataType) {
  return ['integer', 'numeric', 'real', 'double precision', 'smallint', 'bigint'].includes(dataType);
}

/**
 * 문자형 데이터 타입 확인
 * @param {String} dataType 데이터 타입
 * @returns {Boolean} 문자형 여부
 */
function isStringType(dataType) {
  return ['character varying', 'varchar', 'text', 'char', 'character'].includes(dataType);
}

/**
 * 데이터 타입에 따른 카테고리 반환
 * @param {String} dataType 데이터 타입
 * @returns {String} 타입 카테고리 (number, string, other)
 */
function getTypeCategory(dataType) {
  if (isNumericType(dataType)) {
    return 'number';
  } else if (isStringType(dataType)) {
    return 'string';
  } else {
    return 'other';
  }
}

module.exports = {
  coordinatesToWKT,
  isValidTableName,
  isNumericType,
  isStringType,
  getTypeCategory
}; 