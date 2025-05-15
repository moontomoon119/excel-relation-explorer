//excel-relations-api/src/utils/excelChecker.js
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');
const { findPnuColumn } = require('./stringUtils');

/**
 * 엑셀/CSV 파일의 컬럼 구조를 분석하는 함수
 * @param {string} filePath - 업로드된 파일 경로
 * @param {string} originalFilename - 원본 파일명
 * @returns {Object} - 파일 분석 결과
 */
async function analyzeExcelFile(filePath, originalFilename) {
  const ext = path.extname(originalFilename).toLowerCase();
  let jsonData;
  
  try {
    // CSV 파일 처리
    if (ext === '.csv') {
      const csvOptions = {
        type: 'string',
        cellDates: true,
        raw: true,
        codepage: 65001,
        dateNF: 'yyyy-mm-dd'
      };
      const fileBuffer = fs.readFileSync(filePath);
      const fileContent = Buffer.from(fileBuffer).toString('utf8');
      const workbook = xlsx.read(fileContent, csvOptions);
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      jsonData = xlsx.utils.sheet_to_json(worksheet);
    } else {
      // Excel 파일 처리
      const workbook = xlsx.readFile(filePath, {
        type: 'binary',
        cellDates: true,
        cellNF: true,
        cellStyles: true,
        raw: true,
        codepage: 65001
      });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      jsonData = xlsx.utils.sheet_to_json(worksheet);
    }
    
    if (jsonData.length === 0) {
      return {
        success: false,
        message: 'File contains no data',
        fileType: 'unknown'
      };
    }
    
    // 컬럼 분석
    const columns = Object.keys(jsonData[0]);
    const result = {
      success: true,
      jsonData,
      columns,
      fileType: 'unknown'
    };
    
    // PNU 컬럼 확인
    const pnuColumnName = findPnuColumn(jsonData);
    if (pnuColumnName) {
      result.fileType = 'pnu';
      result.pnuColumnName = pnuColumnName;
      return result;
    }
    
    // X, Y 좌표 컬럼 확인
    const hasXColumn = columns.some(col => 
      /^x$/i.test(col) || col.toLowerCase().includes('longitude') || 
      col.toLowerCase().includes('경도') || col.toLowerCase().includes('x좌표')
    );
    
    const hasYColumn = columns.some(col => 
      /^y$/i.test(col) || col.toLowerCase().includes('latitude') || 
      col.toLowerCase().includes('위도') || col.toLowerCase().includes('y좌표')
    );
    
    if (hasXColumn && hasYColumn) {
      result.fileType = 'grid';
      result.xColumn = columns.find(col => 
        /^x$/i.test(col) || col.toLowerCase().includes('longitude') || 
        col.toLowerCase().includes('경도') || col.toLowerCase().includes('x좌표')
      );
      result.yColumn = columns.find(col => 
        /^y$/i.test(col) || col.toLowerCase().includes('latitude') || 
        col.toLowerCase().includes('위도') || col.toLowerCase().includes('y좌표')
      );
      return result;
    }
    
    // 그 외의 경우
    return result;
    
  } catch (error) {
    return {
      success: false,
      message: `Failed to process file: ${error.message}`,
      fileType: 'unknown'
    };
  }
}

module.exports = {
  analyzeExcelFile
};