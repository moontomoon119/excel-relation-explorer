//excel-relations-api/server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// 라우트 가져오기
const fileRoutes = require('./src/routes/fileRoutes');
const pnuRoutes = require('./src/routes/pnuRoutes');
const pnuFilterRoutes = require('./src/routes/pnuFilterRoutes');
const isochroneRoutes = require('./src/routes/isochrone');

// DB 연결
const db = require('./src/config/db');


// PNU 필터 서비스 초기화
const pnuFilterService = require('./src/services/pnuFilterService');

// 미들웨어
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 정적 파일 (개발 테스트용)
app.use(express.static(path.join(__dirname, 'public')));

// 라우트 설정
app.use('/api/src_files', fileRoutes);
app.use('/api/pnu', pnuRoutes);
app.use('/api/pnu-filter', pnuFilterRoutes);
app.use('/api/isochrone', isochroneRoutes);

// 기본 라우트
app.get('/', (req, res) => {
  res.json({ message: 'Excel Relations API 서버가 실행 중입니다.' });
});

// 오류 처리 미들웨어
app.use((req, res, next) => {
  const error = new Error('요청한 리소스를 찾을 수 없습니다.');
  error.status = 404;
  next(error);
});

// 오류 처리 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || '서버 오류가 발생했습니다.'
  });
});

// 서버 시작 전 스키마 초기화 함수
async function initDatabase() {
  try {
    // PNU 마스터 테이블
    await db.query(`
      CREATE TABLE IF NOT EXISTS pnu_master (
        pnu TEXT PRIMARY KEY,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // 데이터 소스 정보
    await db.query(`
      CREATE TABLE IF NOT EXISTS data_sources (
        id SERIAL PRIMARY KEY,
        source_name TEXT NOT NULL UNIQUE,
        source_type TEXT NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // 데이터 소스와 테이블 매핑
    await db.query(`
      CREATE TABLE IF NOT EXISTS source_table_mappings (
        source_id INTEGER REFERENCES data_sources(id),
        table_name TEXT NOT NULL,
        PRIMARY KEY (source_id, table_name)
      )
    `);

    // 그리드 소스 테이블
    await db.query(`
      CREATE TABLE IF NOT EXISTS grid_sources (
        id SERIAL PRIMARY KEY,
        source_name VARCHAR(255) NOT NULL,
        source_type VARCHAR(50),
        import_date TIMESTAMP NOT NULL DEFAULT NOW(),
        description TEXT,
        metadata JSONB
      )
    `);
  
    // 그리드 소스와 테이블 매핑 테이블
    await db.query(`
      CREATE TABLE IF NOT EXISTS grid_source_tables (
        source_id INTEGER REFERENCES grid_sources(id),
        table_name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        PRIMARY KEY (source_id, table_name)
      )
    `);

    console.log('Database schema initialized successfully');
  } catch (error) {
    console.error('Error initializing database schema:', error);
  }
}

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await initDatabase();

  // PNU 필터링 초기화
  try {
    await pnuFilterService.initialize();
    console.log('PNU Filter Service initialized');
  } catch (err) {
    console.error('PNU Filter Service init error:', err);
  }

  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});