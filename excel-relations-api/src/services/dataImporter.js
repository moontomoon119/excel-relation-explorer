//excel-relations-api/src/services/dataImporter.js
const db = require('../config/db');

async function importDataToTable(tableName, jsonData, columns, pnuColumnName = null) {
  let insertedCount = 0;
  
  try {
    const allColumns = columns.map(col => `"${col.name}"`).join(', ');
    
    for (const row of jsonData) {
      try {
        // PNU 필드 확인 (PNU 데이터인 경우에만)
        if (pnuColumnName && !row[pnuColumnName]) {
          console.log('Skipping row without PNU');
          continue;
        }
        
        // 단순 INSERT 수행
        let placeholders = [];
        let values = [];
        
        for (let i = 0; i < columns.length; i++) {
          const col = columns[i];
          let val = row[col.originalName] ?? null;
          
          // 타입에 맞게 값 변환 - 추가된 안전 코드
          if (val !== null) {
            if (col.type === 'INTEGER') {
              // INTEGER로 변환할 수 있는지 확인
              if (typeof val === 'string') {
                if (/^-?\d+$/.test(val)) {
                  try {
                    const numVal = parseInt(val, 10);
                    if (numVal <= 2147483647 && numVal >= -2147483648) {
                      val = numVal; // 정수 범위 내의 값은 숫자로 변환
                    } else {
                      console.log(`Warning: Value "${val}" exceeds INTEGER range, setting to NULL`);
                      val = null;
                    }
                  } catch (e) {
                    console.log(`Warning: Value "${val}" cannot be parsed as INTEGER, setting to NULL`);
                    val = null;
                  }
                } else {
                  console.log(`Warning: Value "${val}" is not valid for INTEGER column "${col.name}", setting to NULL`);
                  val = null;
                }
              }
            } else if (col.type === 'NUMERIC') {
              // NUMERIC으로 변환
              if (typeof val === 'string') {
                if (/^-?\d+(\.\d+)?$/.test(val)) {
                  try {
                    // 긴 소수점도 허용
                    val = parseFloat(val);
                  } catch (e) {
                    console.log(`Warning: Value "${val}" cannot be parsed as NUMERIC, setting to NULL`);
                    val = null;
                  }
                } else {
                  console.log(`Warning: Value "${val}" is not valid for NUMERIC column "${col.name}", setting to NULL`);
                  val = null;
                }
              }
            }
          }
          
          placeholders.push(`$${i+1}`);
          values.push(val);
        }
        
        const insertQuery = `
          INSERT INTO ${tableName} (${allColumns}) 
          VALUES (${placeholders.join(', ')})
        `;
        
        await db.query(insertQuery, values);
        insertedCount++;
        
      } catch (error) {
        console.error(`Error inserting row:`, error);
        throw error; // 오류를 상위로 전파하여 디버깅 정보 확인
      }
    }
    
    return insertedCount;
  } catch (error) {
    console.error('Error in data import operation:', error);
    throw new Error(`Failed to import data: ${error.message}`);
  }
}

module.exports = {
  importDataToTable
};