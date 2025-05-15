//excel-relations-api/src/config/db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'excel_relations_db',
  password: process.env.DB_PASSWORD || 'your_password',
  port: process.env.DB_PORT || 5432,
  client_encoding: 'UTF8'
});

// 쿼리 실행 전 인코딩 설정을 강제하는 래퍼 함수
async function query(text, params) {
  const client = await pool.connect();
  try {
    // 연결 시 인코딩 명시적 설정
    await client.query('SET client_encoding = \'UTF8\'');
    const result = await client.query(text, params);
    return result;
  } finally {
    client.release();
  }
}

module.exports = {
  query,
  pool
};