var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');         //引入router檔案位於routes資料夾中
var user = require('./routes/user');         //引入router檔案位於routes資料夾中
var app = express();

app.set('views',path.join(__dirname,'views'));  //view的路徑位在資料夾views中
app.set('view engine','hjs');                   //使用hjs作為template

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);                          // get '/'時交給routes index處理
app.use('/user', user);                          // get '/user'時交給routes user處理

app.listen(3000);                             //監聽3000port
console.log('running on port 3000');
