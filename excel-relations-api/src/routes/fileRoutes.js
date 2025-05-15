//excel-relations-api/src/routes/fileRoutes.js
const express = require('express');
const router = express.Router();
const pnuFileController = require('../controllers/pnuFileController'); // 이름 변경됨
const gridFileController = require('../controllers/gridFileController'); // 새로 추가될 컨트롤러
const upload = require('../config/multer');
const { analyzeExcelFile } = require('../utils/excelChecker');

// 파일 업로드 라우트 - 파일 타입에 따라 적절한 컨트롤러로 라우팅
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ 
        success: false, 
        message: 'No file uploaded'
      });
    }
    
    const filePath = req.file.path;
    const originalFilename = req.file.originalname;
    
    // 파일 분석
    const analysisResult = await analyzeExcelFile(filePath, originalFilename);
    
    if (!analysisResult.success) {
      return res.status(400).json({
        success: false,
        message: analysisResult.message
      });
    }
    
    // 파일 타입에 따라 다른 컨트롤러로 라우팅
    switch (analysisResult.fileType) {
      case 'pnu':
        // PNU 파일 컨트롤러로 처리
        return pnuFileController.uploadFile(req, res);
        
      case 'grid':
        // 그리드 파일 컨트롤러로 처리 (개발 예정)
        if (typeof gridFileController !== 'undefined' && gridFileController.uploadFile) {
          return gridFileController.uploadFile(req, res);
        } else {
          // 그리드 컨트롤러가 아직 구현되지 않은 경우
          return res.status(200).json({
            success: true,
            message: 'Grid file detected. Grid file processing will be implemented soon.',
            data: {
              fileType: 'grid',
              xColumn: analysisResult.xColumn,
              yColumn: analysisResult.yColumn
            }
          });
        }
        
      default:
        // 지원되지 않는 파일 형식
        return res.status(400).json({
          success: false,
          message: 'Unsupported file format. File must contain either PNU codes or X/Y coordinates.',
          data: {
            columns: analysisResult.columns
          }
        });
    }
  } catch (error) {
    console.error('File routing error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Failed to process file'
    });
  }
});

module.exports = router;