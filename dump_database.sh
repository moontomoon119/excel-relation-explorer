#!/bin/bash

# 스크립트 실행 위치를 프로젝트 루트 디렉토리로 설정
cd "$(dirname "$0")"

# 필요한 디렉토리 생성
mkdir -p db

# 데이터베이스 접속 정보 설정
DB_HOST="localhost"
DB_PORT="5432"
DB_USER="postgres"
DB_NAME="excel_relations_db"  # 실제 데이터베이스 이름으로 변경하세요

# 비밀번호 입력 요청
read -sp "PostgreSQL 비밀번호를 입력하세요: " DB_PASS
echo

# 임시 덤프 파일 생성
TEMP_DUMP="db/temp_dump.sql"

echo "데이터베이스 스키마와 데이터를 덤프하는 중..."
PGPASSWORD="$DB_PASS" pg_dump -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME > $TEMP_DUMP

if [ $? -ne 0 ]; then
  echo "데이터베이스 덤프 생성 실패!"
  exit 1
fi

# init.sql 파일 생성
cat > db/init.sql << EOF
-- 데이터베이스 생성
CREATE DATABASE excel_relations;

-- 데이터베이스 연결
\c excel_relations;

-- PostgreSQL 덤프에서 생성된 스키마와 데이터
EOF

# 덤프 파일 내용을 init.sql에 추가
cat $TEMP_DUMP >> db/init.sql

# 임시 파일 삭제
rm $TEMP_DUMP

echo "데이터베이스 덤프가 db/init.sql 파일에 성공적으로 저장되었습니다."
echo "docker-compose.yml 파일에 이미 설정되어 있으므로 컨테이너 시작 시 자동으로 적용됩니다."
echo "컨테이너를 시작하려면 다음 명령어를 실행하세요:"
echo "  docker-compose up -d" 