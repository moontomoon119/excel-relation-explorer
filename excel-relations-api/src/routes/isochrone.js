const express = require('express');
const router = express.Router();
const isochroneController = require('../controllers/isochroneController');

/**
 * @api {post} /isochrone/analyze 아이소크론맵 기반 그리드 데이터 분석
 * @apiDescription PNU, 이동시간, 그리드 테이블, 컬럼을 입력받아 아이소크론맵 내의 그리드 데이터를 분석
 * @apiBody {String} pnu PNU 코드
 * @apiBody {Number} rangeMinutes 이동시간(분)
 * @apiBody {String} gridTable 분석할 그리드 테이블명
 * @apiBody {String} columnName 분석할 컬럼명
 */
router.post('/analyze', isochroneController.analyzeIsochrone);

/**
 * @api {get} /isochrone/grid-tables 그리드 테이블 목록 조회
 * @apiDescription 사용 가능한 그리드 테이블 목록을 조회
 */
router.get('/grid-tables', isochroneController.getGridTables);

/**
 * @api {get} /isochrone/columns/:tableName 테이블 컬럼 목록 조회
 * @apiDescription 지정된 테이블의 컬럼 목록을 데이터 타입과 함께 조회
 * @apiParam {String} tableName 테이블명
 */
router.get('/columns/:tableName', isochroneController.getTableColumns);

/**
 * @api {get} /isochrone/coordinates/:pnu PNU로 좌표 조회
 * @apiDescription PNU로 좌표를 조회
 * @apiParam {String} pnu PNU 코드
 */
router.get('/coordinates/:pnu', isochroneController.getCoordinatesFromPNU);

module.exports = router; 