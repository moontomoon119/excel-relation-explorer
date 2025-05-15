const express = require('express');
const router = express.Router();
const pnuFilterService = require('../services/pnuFilterService');

/**
 * 모든 숫자형 컬럼 목록 조회
 */
router.get('/numeric-columns', async (req, res) => {
  try {
    const columns = await pnuFilterService.getAllNumericColumns();
    res.json({ success: true, data: columns });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * 특정 테이블의 숫자형 컬럼 목록 조회
 */
router.get('/numeric-columns/:tableName', async (req, res) => {
  try {
    const { tableName } = req.params;
    const columns = await pnuFilterService.getTableNumericColumns(tableName);
    res.json({ success: true, data: columns });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * 범위로 PNU 필터링
 */
router.post('/filter-by-range', async (req, res) => {
  try {
    const { tableName, columnName, minValue, maxValue } = req.body;
    const result = await pnuFilterService.filterPnuByRange(tableName, columnName, minValue, maxValue);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * 백분율로 PNU 필터링
 */
router.post('/filter-by-percentage', async (req, res) => {
  try {
    const { tableName, columnName, centerValue, rangePercent } = req.body;
    const result = await pnuFilterService.filterPnuByPercentage(tableName, columnName, centerValue, rangePercent);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * 모든 글자형 컬럼 목록 조회
 */
router.get('/text-columns', async (req, res) => {
  try {
    const columns = await pnuFilterService.getAllTextColumns();
    res.json({ success: true, data: columns });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * 특정 테이블의 글자형 컬럼 목록 조회
 */
router.get('/text-columns/:tableName', async (req, res) => {
  try {
    const { tableName } = req.params;
    const columns = await pnuFilterService.getTableTextColumns(tableName);
    res.json({ success: true, data: columns });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * 글자형 컬럼의 고유값 통계 조회
 */
router.get('/text-column-info/:tableName/:columnName', async (req, res) => {
  try {
    const { tableName, columnName } = req.params;
    const columnInfo = await pnuFilterService.getTextColumnInfo(tableName, columnName);
    res.json({ success: true, data: columnInfo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * 선택된 값들로 PNU 필터링
 */
router.post('/filter-by-values', async (req, res) => {
  try {
    const { tableName, columnName, selectedValues } = req.body;
    const result = await pnuFilterService.filterPnuByValues(tableName, columnName, selectedValues);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * 모든 날짜형 컬럼 목록 조회
 */
router.get('/date-columns', async (req, res) => {
  try {
    const columns = await pnuFilterService.getAllDateColumns();
    res.json({ success: true, data: columns });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * 특정 테이블의 날짜형 컬럼 목록 조회
 */
router.get('/date-columns/:tableName', async (req, res) => {
  try {
    const { tableName } = req.params;
    const columns = await pnuFilterService.getTableDateColumns(tableName);
    res.json({ success: true, data: columns });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * 날짜형 컬럼 정보 조회
 */
router.get('/date-column-info/:tableName/:columnName', async (req, res) => {
  try {
    const { tableName, columnName } = req.params;
    const columnInfo = await pnuFilterService.getDateColumnInfo(tableName, columnName);
    res.json({ success: true, data: columnInfo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * 날짜 범위로 PNU 필터링
 */
router.post('/filter-by-date-range', async (req, res) => {
  try {
    const { tableName, columnName, startDate, endDate } = req.body;
    const result = await pnuFilterService.filterPnuByDateRange(tableName, columnName, startDate, endDate);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
