# Excel Relation Explorer 실행 가이드

필요한 환경(필요시 다운받아야 합니다):
Git (git clone 명령어 사용)
Docker (docker-compose 사용)

## 처음 설치 방법 (처음실행시 다운 및 설치되는 시간이 10분 내외로 걸립니다.)
1. `Win + R` → `cmd` 입력
2. 다음 명령어 실행:
```bash
git clone https://github.com/moontomoon119/excel-relation-explorer.git
cd excel-relation-explorer
docker-compose up
```
3. 크롬에서 http://localhost:8082/ors/v2/health 접속
4. `{"status":"ready"}` 응답 확인
5. http://localhost:3000 접속

## 끄는 방법
- 터미널에서 `Ctrl + C`
- 터미널을 닫기

## 다시 키는 방법 (다시 키는 시간은 10초 내외로 걸립니다.)
1. `Win + R` → `cmd` 입력
2. 다음 명령어 실행:
```bash
cd excel-relation-explorer
docker-compose up
```
3. http://localhost:3000 접속

(문의 moontomoon119@gmail.com)
