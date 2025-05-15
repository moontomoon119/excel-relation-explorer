#!/bin/bash

# init.sql이 존재하지 않으면 다운로드
if [ ! -f "./db/init.sql" ]; then
    echo "Downloading database initialization file..."
    curl -L "https://drive.google.com/uc?export=download&id=1SMo1EFkVySd7V-27QhG4HBzLkpmukZFp" -o "./db/init.sql"
fi

# 데이터베이스가 실행될 때까지 대기
echo "Waiting for database to be ready..."
docker-compose exec postgres pg_isready -U postgres

# 초기화 실행
echo "Initializing database..."
docker-compose exec -T postgres psql -U postgres -d excel_relations < ./db/init.sql