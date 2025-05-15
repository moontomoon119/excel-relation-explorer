//excel-relations-api/src/utils/datatypeUtils.js

// 데이터 타입 추론 함수 (UTF-8)
function inferDataType(value) {
  if (value === null || value === undefined) return null;

  if (typeof value === 'number') {
    if (Number.isInteger(value)) {
      if (value > 2147483647 || value < -2147483648) return 'TEXT';
      return 'INTEGER';
    }
    return 'NUMERIC';
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();
    
    // 숫자가 아닌 문자가 포함된 경우 무조건 TEXT
    if (/[^-\d.]/.test(trimmed)) return 'TEXT';

    // 정수 확인
    if (/^-?\d+$/.test(trimmed)) {
      if (trimmed.length >= 10) return 'TEXT';
      
      try {
        const numVal = parseInt(trimmed, 10);
        if (numVal > 2147483647 || numVal < -2147483648) return 'TEXT';
        return 'INTEGER';
      } catch (e) {
        return 'TEXT';
      }
    }

    // 소수 - 개선된 부분
    if (/^-?\d+\.\d+$/.test(trimmed)) {
      try {
        // 길이 제한을 하지 않고 모든 유효한 소수를 NUMERIC으로 처리
        return 'NUMERIC';
      } catch (e) {
        return 'TEXT';
      }
    }

    // 날짜
    const dateRegex = /^\d{4}[-/](0?[1-9]|1[012])[-/](0?[1-9]|[12][0-9]|3[01])$/;
    if (dateRegex.test(trimmed)) return 'DATE';
    
    return 'TEXT';
  }

  if (typeof value === 'boolean') return 'BOOLEAN';
  if (value instanceof Date) return 'TIMESTAMP';

  return 'TEXT';
}

// PostgreSQL 타입 변환
function getPgType(dataType) {
  if (!dataType) return 'TEXT';
  
  const typeMap = {
    'INTEGER': 'INTEGER',
    'BIGINT': 'TEXT',
    'NUMERIC': 'NUMERIC',
    'FLOAT': 'NUMERIC',
    'DOUBLE': 'NUMERIC',
    'BOOLEAN': 'BOOLEAN',
    'DATE': 'DATE',
    'TIMESTAMP': 'TIMESTAMP',
    'DATETIME': 'TIMESTAMP',
    'TEXT': 'TEXT'
  };
  
  return typeMap[dataType.toUpperCase()] || 'TEXT';
}

module.exports = {
  inferDataType,
  getPgType
};