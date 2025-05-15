const db = require('../config/db');

/**
 * 그리드 데이터 소스 관리를 위한 모듈
 */
const gridManager = {
  /**
   * 그리드 데이터 소스 등록 - 동일 이름이 있으면 기존 ID 반환
   * @param {string} sourceName - 소스 이름
   * @param {string} sourceType - 소스 타입 (예: 'population', 'income' 등)
   * @returns {Promise<number>} - 등록된 소스 ID
   */
  registerGridSource: async (sourceName, sourceType) => {
    try {
      // 먼저 테이블이 존재하는지 확인
      const checkTableQuery = `
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_schema = 'public' 
          AND table_name = 'grid_sources'
        );
      `;
      
      const tableExists = await db.query(checkTableQuery);
      
      // 테이블이 없으면 생성
      if (!tableExists.rows[0].exists) {
        console.log('Creating grid_sources table...');
        const createTableQuery = `
          CREATE TABLE grid_sources (
            id SERIAL PRIMARY KEY,
            source_name VARCHAR(255) NOT NULL,
            source_type VARCHAR(50),
            import_date TIMESTAMP NOT NULL DEFAULT NOW(),
            description TEXT,
            metadata JSONB
          );
        `;
        await db.query(createTableQuery);
        
        // 관련 매핑 테이블도 생성
        const createMappingTableQuery = `
          CREATE TABLE IF NOT EXISTS grid_source_tables (
            source_id INTEGER REFERENCES grid_sources(id),
            table_name VARCHAR(255) NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            PRIMARY KEY (source_id, table_name)
          );
        `;
        await db.query(createMappingTableQuery);
      }
      
      // 동일한 소스 이름이 있는지 확인
      const checkSourceQuery = `
        SELECT id FROM grid_sources 
        WHERE source_name = $1
      `;
      
      const existingSource = await db.query(checkSourceQuery, [sourceName]);
      
      // 기존 소스가 있으면 해당 ID 반환
      if (existingSource.rows.length > 0) {
        console.log(`Source '${sourceName}' already exists with ID: ${existingSource.rows[0].id}`);
        
        // 임포트 날짜 업데이트
        await db.query(`
          UPDATE grid_sources 
          SET import_date = NOW() 
          WHERE id = $1
        `, [existingSource.rows[0].id]);
        
        return existingSource.rows[0].id;
      }
      
      // 신규 소스 등록
      const query = `
        INSERT INTO grid_sources (source_name, source_type, import_date)
        VALUES ($1, $2, NOW())
        RETURNING id
      `;
      
      const result = await db.query(query, [sourceName, sourceType]);
      console.log(`Created new source '${sourceName}' with ID: ${result.rows[0].id}`);
      return result.rows[0].id;
    } catch (error) {
      console.error('Error registering grid source:', error);
      throw new Error(`Failed to register grid source: ${error.message}`);
    }
  },

  // 나머지 함수는 동일하게 유지
  registerGridSourceTableMapping: async (sourceId, tableName) => {
    try {
      const query = `
        INSERT INTO grid_source_tables (source_id, table_name)
        VALUES ($1, $2)
        ON CONFLICT (source_id, table_name) DO NOTHING
      `;
      
      await db.query(query, [sourceId, tableName]);
      return true;
    } catch (error) {
      console.error('Error registering grid source-table mapping:', error);
      throw new Error(`Failed to register grid source-table mapping: ${error.message}`);
    }
  },

  registerGridMetadata: async (sourceId, metadata) => {
    try {
      const query = `
        INSERT INTO grid_metadata (source_id, metadata, created_at)
        VALUES ($1, $2, NOW())
      `;
      
      await db.query(query, [sourceId, JSON.stringify(metadata)]);
    } catch (error) {
      console.error('Error registering grid metadata:', error);
      throw new Error(`Failed to register grid metadata: ${error.message}`);
    }
  },

  getGridSourceById: async (sourceId) => {
    try {
      const query = `
        SELECT * FROM grid_sources
        WHERE id = $1
      `;
      
      const result = await db.query(query, [sourceId]);
      return result.rows[0];
    } catch (error) {
      console.error('Error getting grid source:', error);
      throw new Error(`Failed to get grid source: ${error.message}`);
    }
  },

  getAllGridSources: async () => {
    try {
      const query = `
        SELECT * FROM grid_sources
        ORDER BY import_date DESC
      `;
      
      const result = await db.query(query);
      return result.rows;
    } catch (error) {
      console.error('Error getting all grid sources:', error);
      throw new Error(`Failed to get grid sources: ${error.message}`);
    }
  }
};

module.exports = gridManager;