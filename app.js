var express = require('express');
var engine = require('ejs-locals');             //讓express支援layout
var path = require('path');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var session = require('express-session');
var passport = require('passport');
var flash = require('express-flash');
var cookieParser = require('cookie-parser');
// 引入router檔案位於routes資料夾中
var index = require('./routes/index');
var post = require('./routes/post');
var user = require('./routes/user');
var schedule = require('./routes/schedule');
var course = require('./routes/course');
var course_rate = require('./routes/course_rate');

var app = express();

app.engine('ejs', engine);
app.set('views',path.join(__dirname,'views'));  //view的路徑位在資料夾views中
app.set('view engine','ejs');                   //使用ejs作為template

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Validator
app.use(expressValidator());
app.use("/assets",express.static(__dirname + "/assets"));

//Handle sessions and cookie
app.use(session({
  cookie: { maxAge: 1000 * 60 * 30 },
  //store:mysql(),
  secret:'secret',
  resave: true,
  saveUninitialized: true,
}));
app.use(cookieParser('secretString'));

//flah message
app.use(flash());

//passport
app.use(passport.initialize());
app.use(passport.session());
//Route
app.use('/', index);                              // get '/'時交給routes index處理
app.use('/post', post);                          // get '/post'時交給routes post處理
app.use('/user',user);                          // get '/user'時交給routes user處理
app.use('/schedule',schedule);                 // get '/schedule'時交給routes schedule
app.use('/course',course);                     // get '/course'時交給routes course
app.use('/course_rate',course_rate);          // get '/course_rate'時交給routes course_rate

app.listen( process.env.PORT || 3000);                             //監聽3000port
console.log('running on port 3000');
