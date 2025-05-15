//excel-relations-api/src/controllers/fileController.js
const excelService = require('../services/excelService');
const fs = require('fs');

const pnuFileController = {
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
      
      // Excel 파일 처리
      const result = await excelService.processFile(filePath, originalFilename);
      
      res.status(200).json({
        success: true,
        message: 'PNU file processed successfully',
        data: result
      });
      
    } catch (error) {
      console.error('PNU file processing error:', error);
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to process PNU file'
      });
    }
  }
};

module.exports = pnuFileController;