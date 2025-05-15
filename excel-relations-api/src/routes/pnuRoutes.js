//excel-relations-api/src/routes/pnuRoutes.js
const express = require('express');
const router = express.Router();
const tableModel = require('../models/tableModel');

// PNU 목록 조회
router.get('/list', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 100;
    const offset = parseInt(req.query.offset) || 0;
    
    const pnus = await tableModel.getAllPnus(limit, offset);
    const total = await tableModel.getPnuCount();
    
    res.json({
      success: true,
      total,
      count: pnus.length,
      data: pnus
    });
  } catch (error) {
    console.error('Error fetching PNU list:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// 단일 PNU 데이터 조회
router.get('/:pnu', async (req, res) => {
  try {
    const { pnu } = req.params;
    const options = {};
    
    // 소스 필터링 옵션
    if (req.query.sources) {
      options.sourcesFilter = req.query.sources.split(',');
    }
    
    // 결과 제한 옵션
    if (req.query.limit) {
      options.limit = parseInt(req.query.limit);
    }
    
    const result = await tableModel.getDataByPnu(pnu, options);
    
    if (!result.exists) {
      return res.status(404).json({
        success: false,
        message: `PNU ${pnu} not found`
      });
    }
    
    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error(`Error fetching data for PNU ${req.params.pnu}:`, error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// 다중 PNU 데이터 조회
router.post('/bulk', async (req, res) => {
  try {
    const { pnuList } = req.body;
    
    if (!Array.isArray(pnuList) || pnuList.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Request must include a non-empty pnuList array'
      });
    }
    
    if (pnuList.length > 1000) {
      return res.status(400).json({
        success: false,
        message: 'PNU list cannot exceed 1000 items'
      });
    }
    
    const options = {};
    
    // 소스 필터링 옵션
    if (req.body.sources) {
      options.sourcesFilter = req.body.sources;
    }
    
    const results = await tableModel.getBulkDataByPnu(pnuList, options);
    
    res.json({
      success: true,
      count: results.length,
      data: results
    });
  } catch (error) {
    console.error('Error fetching bulk PNU data:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// 테이블 메타데이터 조회
router.get('/tables/:tableName', async (req, res) => {
  try {
    const { tableName } = req.params;
    
    const metadata = await tableModel.getTableMetadata(tableName);
    
    if (metadata.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Table '${tableName}' not found or has no columns`
      });
    }
    
    res.json({
      success: true,
      table: tableName,
      columns: metadata
    });
  } catch (error) {
    console.error(`Error fetching metadata for table ${req.params.tableName}:`, error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// 여러 테이블 메타데이터 조회
router.post('/tables/bulk', async (req, res) => {
  try {
    const { tableNames } = req.body;
    
    if (!Array.isArray(tableNames) || tableNames.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Request must include a non-empty tableNames array'
      });
    }
    
    if (tableNames.length > 50) {
      return res.status(400).json({
        success: false,
        message: 'Table names list cannot exceed 50 items'
      });
    }
    
    const results = {};
    
    for (const tableName of tableNames) {
      try {
        const metadata = await tableModel.getTableMetadata(tableName);
        if (metadata.length > 0) {
          results[tableName] = metadata;
        }
      } catch (error) {
        console.error(`Error fetching metadata for table ${tableName}:`, error);
        results[tableName] = { error: error.message };
      }
    }
    
    res.json({
      success: true,
      count: Object.keys(results).length,
      data: results
    });
  } catch (error) {
    console.error('Error fetching bulk table metadata:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// 모든 테이블 메타데이터 조회
router.get('/tables', async (req, res) => {
  try {
    const tables = await tableModel.getAllTables();
    
    if (tables.length === 0) {
      return res.json({
        success: true,
        count: 0,
        data: []
      });
    }
    
    const results = {};
    
    // 테이블별 메타데이터 조회
    for (const table of tables) {
      try {
        const metadata = await tableModel.getTableMetadata(table.table_name);
        if (metadata.length > 0) {
          results[table.table_name] = {
            source_id: table.source_id,
            source_name: table.source_name,
            source_type: table.source_type,
            columns: metadata
          };
        }
      } catch (error) {
        console.error(`Error fetching metadata for table ${table.table_name}:`, error);
      }
    }
    
    res.json({
      success: true,
      count: Object.keys(results).length,
      data: results
    });
  } catch (error) {
    console.error('Error fetching all table metadata:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// 특정 소스의 모든 테이블 메타데이터 조회
router.get('/sources/:sourceId', async (req, res) => {
  try {
    const { sourceId } = req.params;
    
    // 소스 존재 확인
    const source = await tableModel.getSourceById(sourceId);
    if (!source) {
      return res.status(404).json({
        success: false,
        message: `Source with ID ${sourceId} not found`
      });
    }
    
    // 소스의 모든 테이블 조회
    const tables = await tableModel.getSourceTables(sourceId);
    
    if (tables.length === 0) {
      return res.json({
        success: true,
        source: source,
        count: 0,
        data: []
      });
    }
    
    const results = {};
    
    // 테이블별 메타데이터 조회
    for (const table of tables) {
      try {
        const metadata = await tableModel.getTableMetadata(table.table_name);
        if (metadata.length > 0) {
          results[table.table_name] = {
            source_name: table.source_name,
            source_type: table.source_type,
            columns: metadata
          };
        }
      } catch (error) {
        console.error(`Error fetching metadata for table ${table.table_name}:`, error);
      }
    }
    
    res.json({
      success: true,
      source: source,
      count: Object.keys(results).length,
      data: results
    });
  } catch (error) {
    console.error(`Error fetching metadata for source ${req.params.sourceId}:`, error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;