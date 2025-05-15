# GitHub에 프로젝트 업로드하기

다음 명령어를 순서대로 실행하여 프로젝트를 GitHub에 업로드하세요:

```bash
# 1. Git 저장소 초기화
git init

# 2. 모든 파일 스테이징
git add .

# 3. 첫 번째 커밋 생성
git commit -m "초기 프로젝트 설정: Docker 컨테이너화 및 환경 구성"

# 4. GitHub에 새 저장소 생성 후 원격 저장소 추가 (아래 URL은 실제 저장소 URL로 변경 필요)
git remote add origin https://github.com/username/excel-relation-explorer.git

# 5. GitHub 저장소에 푸시
git push -u origin main
```

## 추가 참고사항

1. GitHub 저장소를 먼저 생성해야 합니다.
2. `username`을 실제 GitHub 사용자명으로 변경하세요.
3. 저장소 이름을 원하는 대로 변경할 수 있습니다.
4. 기본 브랜치가 `main`이 아닌 경우 마지막 명령어의 브랜치명을 변경하세요.
5. GitHub에서 요구하는 경우 인증 정보를 입력하세요. 