const isochroneService = require('../services/isochroneService');
const isochroneUtils = require('../utils/isochroneUtils');

/**
 * 아이소크론 분석을 수행하는 컨트롤러
 */
async function analyzeIsochrone(req, res) {
  try {
    const { pnu, rangeMinutes, gridTable, columnName } = req.body;
    
    // 필수 파라미터 검증
    if (!pnu || !rangeMinutes || !gridTable || !columnName) {
      return res.status(400).json({
        success: false,
        message: '필수 파라미터가 누락되었습니다 (pnu, rangeMinutes, gridTable, columnName)'
      });
    }
    
    // 테이블명 검증
    if (!isochroneUtils.isValidTableName(gridTable)) {
      return res.status(400).json({
        success: false,
        message: '유효하지 않은 테이블명입니다.'
      });
    }
    
    const result = await isochroneService.analyzeIsochrone(
      pnu, 
      parseInt(rangeMinutes, 10), 
      gridTable, 
      columnName
    );
    
    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error('아이소크론 분석 컨트롤러 오류:', error);
    res.status(500).json({
      success: false,
      message: error.message || '서버 오류가 발생했습니다.'
    });
  }
}

/**
 * 그리드 테이블 목록을 조회하는 컨트롤러
 */
async function getGridTables(req, res) {
  try {
    const tables = await isochroneService.getGridTables();
    
    res.json({
      success: true,
      data: tables
    });
  } catch (error) {
    console.error('그리드 테이블 목록 조회 컨트롤러 오류:', error);
    res.status(500).json({
      success: false,
      message: error.message || '서버 오류가 발생했습니다.'
    });
  }
}

/**
 * 테이블 컬럼 목록을 조회하는 컨트롤러
 */
async function getTableColumns(req, res) {
  try {
    const { tableName } = req.params;
    
    // SQL 인젝션 방지를 위한 검증
    if (!isochroneUtils.isValidTableName(tableName)) {
      return res.status(400).json({ 
        success: false, 
        message: '유효하지 않은 테이블명입니다.' 
      });
    }
    
    const columns = await isochroneService.getTableColumns(tableName);
    
    res.json({
      success: true,
      data: columns
    });
  } catch (error) {
    console.error('테이블 컬럼 목록 조회 컨트롤러 오류:', error);
    res.status(500).json({
      success: false,
      message: error.message || '서버 오류가 발생했습니다.'
    });
  }
}

/**
 * PNU로 좌표를 조회하는 컨트롤러
 */
async function getCoordinatesFromPNU(req, res) {
  try {
    const { pnu } = req.params;
    
    if (!pnu) {
      return res.status(400).json({
        success: false,
        message: 'PNU가 필요합니다.'
      });
    }
    
    const coordinates = await isochroneService.getCoordinatesFromPNU(pnu);
    
    res.json({
      success: true,
      data: coordinates
    });
  } catch (error) {
    console.error('PNU 좌표 조회 컨트롤러 오류:', error);
    res.status(500).json({
      success: false,
      message: error.message || '서버 오류가 발생했습니다.'
    });
  }
}

module.exports = {
  analyzeIsochrone,
  getGridTables,
  getTableColumns,
  getCoordinatesFromPNU
}; 