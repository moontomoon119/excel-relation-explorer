//excel-relations-api/src/models/tableModel.js
const db = require('../config/db');

const tableModel = {
  // 데이터 소스 조회
  getAllSources: async () => {
    const query = 'SELECT * FROM data_sources ORDER BY source_name';
    const result = await db.query(query);
    return result.rows;
  },
  
  // 특정 소스 조회
  getSourceById: async (id) => {
    const query = 'SELECT * FROM data_sources WHERE id = $1';
    const result = await db.query(query, [id]);
    return result.rows[0];
  },
  
  // 소스별 테이블 조회
  getSourceTables: async (sourceId) => {
    const query = `
      SELECT m.source_id, m.table_name, s.source_name, s.source_type
      FROM source_table_mappings m
      JOIN data_sources s ON m.source_id = s.id
      WHERE m.source_id = $1
    `;
    const result = await db.query(query, [sourceId]);
    return result.rows;
  },
  
  // 모든 테이블 조회
  getAllTables: async () => {
    const query = `
      SELECT m.source_id, m.table_name, s.source_name, s.source_type
      FROM source_table_mappings m
      JOIN data_sources s ON m.source_id = s.id
      ORDER BY s.source_name
    `;
    const result = await db.query(query);
    return result.rows;
  },
  
  // PNU 목록 조회
  getAllPnus: async (limit = 1000, offset = 0) => {
    const query = `
      SELECT pnu, created_at, updated_at
      FROM pnu_master
      ORDER BY updated_at DESC
      LIMIT $1 OFFSET $2
    `;
    const result = await db.query(query, [limit, offset]);
    return result.rows;
  },
  
  // PNU 개수 조회
  getPnuCount: async () => {
    const query = 'SELECT COUNT(*) as count FROM pnu_master';
    const result = await db.query(query);
    return parseInt(result.rows[0].count);
  },
  
  // 단일 PNU 데이터 조회
  getDataByPnu: async (pnu, options = {}) => {
    // PNU 유효성 확인
    const pnuExists = await db.query('SELECT 1 FROM pnu_master WHERE pnu = $1', [pnu]);
    if (pnuExists.rows.length === 0) {
      return { exists: false };
    }
    
    // 모든 소스 테이블 조회
    const tablesQuery = `
      SELECT s.source_name, m.table_name 
      FROM data_sources s
      JOIN source_table_mappings m ON s.id = m.source_id
      ${options.sourcesFilter ? 'WHERE s.source_name = ANY($1)' : ''}
    `;
    
    const tablesParams = options.sourcesFilter ? [options.sourcesFilter] : [];
    const tablesResult = await db.query(tablesQuery, tablesParams);
    
    // 결과 객체 초기화
    const result = { 
      pnu,
      exists: true,
      data: {}
    };
    
    // 각 테이블에서 데이터 조회
    for (const table of tablesResult.rows) {
      try {
        const dataQuery = `
          SELECT * FROM ${table.table_name} 
          WHERE pnu = $1
          ${options.limit ? 'LIMIT ' + options.limit : ''}
        `;
        
        const dataResult = await db.query(dataQuery, [pnu]);
        if (dataResult.rows.length > 0) {
          result.data[table.source_name] = dataResult.rows;
        }
      } catch (error) {
        console.error(`Error querying ${table.table_name}:`, error);
      }
    }
    
    return result;
  },
  
  // 여러 PNU 데이터 조회
  getBulkDataByPnu: async (pnuList, options = {}) => {
    if (!pnuList.length) return [];
    
    // PNU 유효성 확인
    const pnuPlaceholders = pnuList.map((_, i) => `$${i+1}`).join(',');
    const validPnuResult = await db.query(
      `SELECT pnu FROM pnu_master WHERE pnu IN (${pnuPlaceholders})`,
      pnuList
    );
    
    const validPnus = validPnuResult.rows.map(row => row.pnu);
    if (validPnus.length === 0) return [];
    
    // 타겟 테이블 목록 조회
    const tablesQuery = `
      SELECT s.source_name, m.table_name 
      FROM data_sources s
      JOIN source_table_mappings m ON s.id = m.source_id
      ${options.sourcesFilter ? 'WHERE s.source_name = ANY($1)' : ''}
    `;
    
    const tablesParams = options.sourcesFilter ? [options.sourcesFilter] : [];
    const tablesResult = await db.query(tablesQuery, tablesParams);
    
    // 각 PNU에 대한 결과 객체 생성
    const results = validPnus.map(pnu => ({
      pnu,
      exists: true,
      data: {}
    }));
    
    // 각 테이블에서 데이터 조회
    for (const table of tablesResult.rows) {
      try {
        const validPnuPlaceholders = validPnus.map((_, i) => `$${i+1}`).join(',');
        const dataQuery = `
          SELECT * FROM ${table.table_name} 
          WHERE pnu IN (${validPnuPlaceholders})
        `;
        
        const dataResult = await db.query(dataQuery, validPnus);
        
        // 결과를 각 PNU 객체에 할당
        for (const row of dataResult.rows) {
          const pnu = row.pnu;
          const resultObj = results.find(r => r.pnu === pnu);
          
          if (resultObj) {
            if (!resultObj.data[table.source_name]) {
              resultObj.data[table.source_name] = [];
            }
            resultObj.data[table.source_name].push(row);
          }
        }
      } catch (error) {
        console.error(`Error querying ${table.table_name}:`, error);
      }
    }
    
    return results;
  },
  
  // 테이블 메타데이터 조회
  getTableMetadata: async (tableName) => {
    const query = `
      SELECT column_name, data_type
      FROM information_schema.columns
      WHERE table_name = $1
      ORDER BY ordinal_position
    `;
    const result = await db.query(query, [tableName]);
    return result.rows;
  }
};

module.exports = tableModel;