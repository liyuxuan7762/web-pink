// 使用express创建一个服务端，运行在3000端口
const express = require('express');
const app = express();
const port = 3000;

// 启动服务
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// 创建一个测试接口
app.get('/test', (req, res) => {
  // 设置跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('Hello, World!');
});


app.post('/test', (req, res) => {
  // 设置跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('Hello, World! Post Request');
});

app.get('/delay', (req, res) => {
  // 设置跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  // 模拟处理时间
  setTimeout(() => {
    res.send('Hello, World! Post Request');
  }, 3000);
});


app.all('/axios', (req, res) => {
  // 设置跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  // 允许自定义头部
  res.setHeader('Access-Control-Allow-Headers', '*');
  const data = {
    a: 100,
    b: 200
  }
  res.send(JSON.stringify(data));
});

app.all('/fetch', (req, res) => {
  // 设置跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  // 允许所有方法
  res.setHeader('Access-Control-Allow-Methods', '*');
  // 允许自定义头部
  res.setHeader('Access-Control-Allow-Headers', '*');
  const data = {
    a: 100,
    b: 200
  }
  res.send(JSON.stringify(data));
});