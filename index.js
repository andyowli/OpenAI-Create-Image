const express = require('express');
const dotenv = require('dotenv').config();  //读取项目根目录下的.env文件
const port = process.env.PORT || 5000;
const path = require('path');

const app = express();

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.sendStatus(200); /*让options请求快速返回*/
    else next();
});

app.use(express.json());

app.use(express.urlencoded({ extended:false }))

app.use('/openai',require('./routes/openAi'));

app.listen(port,() => console.log('服务成功启动了'));