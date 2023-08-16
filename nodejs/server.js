const express = require('express');

// 상수
const PORT = 8080;
const HOST = '0.0.0.0';

// 앱
const app = express();

app.use(express.static('public'));

app.get('/', function(요청, 응답) { 
    응답.sendFile(__dirname +'/index.html')
  });

app.get('/page', function(요청, 응답) { 
  응답.sendFile(__dirname +'/inner-page.html')
});

app.get('/detail', (요청, 응답) => {
  응답.sendFile(__dirname +'/portfolio-details.html')
  });  

  app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
  });  