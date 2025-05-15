//excel-relations-api/src/services/pnuManager.js

const db = require('../config/db');

// PNU 마스터 테이블 업데이트 (UTF-8)
async function updatePnuMaster(pnuValues) {
  const uniquePnuValues = [...new Set(pnuValues.filter(Boolean))];
  
  if (uniquePnuValues.length === 0) {
    return 0;
  }
  
  try {
    // 각 PNU에 대해 개별적으로 삽입 (SQL 인젝션 방지 및 오류 처리 향상)
    for (const pnu of uniquePnuValues) {
      await db.query(`
        INSERT INTO pnu_master(pnu) 
        VALUES($1)
        ON CONFLICT(pnu) DO UPDATE SET updated_at = NOW()
      `, [pnu]);
    }
    
    console.log(`Updated ${uniquePnuValues.length} PNUs in master table`);
    return uniquePnuValues.length;
  } catch (error) {
    console.error('Error updating PNU master:', error);
    throw new Error(`Failed to update PNU master: ${error.message}`);
  }
}

async function registerDataSource(sourceName, sourceType) {
  try {
    const result = await db.query(
      'INSERT INTO data_sources(source_name, source_type) VALUES($1, $2) ON CONFLICT(source_name) DO UPDATE SET source_type = $2 RETURNING id',
      [sourceName, sourceType]
    );
    return result.rows[0].id;
  } catch (error) {
    console.error('Error registering data source:', error);
    throw new Error(`Failed to register data source: ${error.message}`);
  }
}

module.exports = {
  updatePnuMaster,
  registerDataSource
};