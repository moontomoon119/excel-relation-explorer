# Excel Relations Explorer

Excel Relations Explorer는 Excel 데이터를 기반으로 관계를 시각화하고 분석하는 웹 애플리케이션입니다.

## 프로젝트 구조

```
excel-relation-explorer/
├── excel-relations-front/     # 프론트엔드 (Node.js/React)
│   └── Dockerfile
├── excel-relations-api/       # 백엔드 (Node.js/Express)
│   └── Dockerfile
├── db/                        # PostgreSQL 초기 데이터
│   └── init.sql
├── openroute/                 # OpenRouteService 설정
├── docker-compose.yml
└── README.md
```

## 시작하기

### 사전 요구사항

- Docker 및 Docker Compose 설치 필요
- Git 설치 필요

### 설치 및 실행

1. 저장소 클론하기:
   ```bash
   git clone https://github.com/username/excel-relation-explorer.git
   cd excel-relation-explorer
   ```

2. Docker Compose로 서비스 실행하기:
   ```bash
   docker-compose up -d
   ```

3. 브라우저에서 접속하기:
   - 프론트엔드: http://localhost:3000
   - 백엔드 API: http://localhost:5000
   - OpenRouteService: http://localhost:8081

### 개발 모드로 실행하기

개발 중에는 다음 명령어로 실행할 수 있습니다:

```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

## 환경 변수 설정

필요한 환경 변수는 각 서비스의 Dockerfile 또는 docker-compose.yml에 정의되어 있습니다.
추가 환경 변수 설정이 필요한 경우 `.env` 파일을 생성하여 사용할 수 있습니다.

## 배포

프로덕션 환경에 배포하기 위해서는 다음과 같은 단계를 따르세요:

1. 환경 변수 설정 (보안 비밀번호, 프로덕션 URL 등)
2. Docker Compose로 빌드 및 실행:
   ```bash
   docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
   ```

## 기여하기

1. 저장소 포크
2. 기능 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경사항 커밋 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시 (`git push origin feature/amazing-feature`)
5. Pull Request 생성

## 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다. 