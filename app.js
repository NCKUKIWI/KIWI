var express = require('express');
var app = express();
var path = require('path');
var engine = require('ejs-locals');
var session = require('express-session');
var flash = require('express-flash');
var compression = require('compression');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var helmet = require('helmet');
var logger = require('morgan');
var graphql = require('express-graphql');
var User = require('./model/User');

app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views')); //view的路徑位在資料夾views中
app.set('view engine', 'ejs'); //使用ejs作為template

app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('express-status-monitor')());
app.use(logger('tiny'));
app.use(cookieParser('secretString'));
app.use(session({
  cookie: {
    maxAge: 1000 * 60 * 60 * 12
  },
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

app.use(function(req, res, next) {
  if (req.cookies.isLogin) {
    User.findById(req.cookies.id).then(function(user){
      req.user = user;
      res.locals.user = user;
      next();
    }).catch(function(err){
      if(err) console.log(err);
      next();
    });
  } else {
    next();
  }
});

app.use('/graphql', graphql(function(req){
  return {
    schema: require('./schema'),
    rootValue: { cookie: req.cookies },
    graphiql: true
  }
}));

app.use('/assets', express.static('assets', { maxAge: 24 * 60 * 60 }));
app.use('/course', require('./routes/course')); 
app.use('/post', require('./routes/post')); 
app.use('/user', require('./routes/user')); 
app.use('/schedule', require('./routes/schedule')); 
app.use('/rate', require('./routes/rate')); 
app.use('/bot', require('./routes/bot'));
app.use('/', require('./routes/course'));

app.use(function(err, req, res, next) {
	res.status(500).send(err);
});

app.get('*', function(req, res, next) {
	res.status(404).send('Page not found');
});

app.listen(process.env.PORT || 3000,function(){
  console.log('running on port 3000');
});
