var express = require('express');
var engine = require('ejs-locals');             //讓express支援layout
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');         //引入router檔案位於routes資料夾中
var post = require('./routes/post');         //引入router檔案位於routes資料夾中

var app = express();

app.engine('ejs', engine);
app.set('views',path.join(__dirname,'views'));  //view的路徑位在資料夾views中
app.set('view engine','ejs');                   //使用ejs作為template

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/assets",express.static(__dirname + "/assets"));

app.use('/', index);                          // get '/'時交給routes index處理
app.use('/post', post);                          // get '/user'時交給routes user處理

app.listen( process.env.PORT || 3000);                             //監聽3000port
console.log('running on port 3000');
