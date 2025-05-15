//excel-relations-api/src/controllers/gridFileController.js
const fs = require('fs');
const gridService = require('../services/gridService');
const { analyzeExcelFile } = require('../utils/excelChecker');

/**
 * 그리드(X,Y 좌표) 파일 처리 컨트롤러
 */
const gridFileController = {
  uploadFile: async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ 
          success: false, 
          message: 'No file uploaded'
        });
      }
      
      const filePath = req.file.path;
      const originalFilename = req.file.originalname;
      
      // 파일 분석하여 X,Y 컬럼 찾기
      const analysisResult = await analyzeExcelFile(filePath, originalFilename);
      
      if (!analysisResult.success || analysisResult.fileType !== 'grid') {
        return res.status(400).json({
          success: false,
          message: 'Invalid grid file format. File must contain X and Y coordinates.'
        });
      }
      
      // 그리드 파일 처리
      const result = await gridService.processFile(
        filePath, 
        originalFilename,
        analysisResult.xColumn,
        analysisResult.yColumn
      );
      
      // 처리 완료 후 응답
      res.status(200).json({
        success: true,
        message: 'Grid file processed successfully',
        data: result
      });
      
    } catch (error) {
      console.error('Grid file processing error:', error);
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to process grid file'
      });
    }
  }
};

module.exports = gridFileController;