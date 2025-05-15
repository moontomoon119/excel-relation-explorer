const express = require('express');
const path = require('path');

const app = express();

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// 모든 요청을 index.html로 라우팅
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Frontend server running on port ${PORT}`);
}); 