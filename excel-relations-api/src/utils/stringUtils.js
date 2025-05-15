//excel-relations-api/src/utils/stringUtils.js

// 컬럼명 정규화 (UTF-8)
function normalizeColumnName(columnName) {
  return columnName.toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '')
    .substring(0, 63);
}

// 소스 타입 추론
function inferSourceType(filename) {
  if (filename.toLowerCase().includes('excel') || 
      filename.toLowerCase().includes('xls')) {
    return 'EXCEL';
  }
  if (filename.toLowerCase().includes('csv')) {
    return 'CSV';
  }
  return 'UNKNOWN';
}

// PNU 컬럼 찾기
function findPnuColumn(data) {
  if (!data || data.length === 0) return null;
  
  const firstRow = data[0];
  // 정확한 'pnu' 또는 끝에 'pnu'가 있는 컬럼명
  return Object.keys(firstRow).find(key => 
    key.toLowerCase() === 'pnu' || key.toLowerCase().endsWith('pnu')
  );
}

module.exports = {
  normalizeColumnName,
  inferSourceType,
  findPnuColumn
};