var express = require("express");
var path = require("path");
var helmet = require("helmet");
var engine = require("ejs-locals"); //讓express支援layout
var flash = require("express-flash");
var basicAuth = require('basic-auth');
var bodyParser = require("body-parser");
var compression = require("compression");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var RedisStore = require('connect-redis')(session);
var expressValidator = require("express-validator");

var db = require("./model/db");
var config = require("./config");
var cache = require("./helper/cache");

var app = express();
var redis = cache.redis;

app.engine("ejs", engine);
app.set("views", path.join(__dirname, "views")); //view的路徑位在資料夾views中
app.set("view engine", "ejs"); //使用ejs作為template

app.use(helmet());
app.use(flash());
app.use(expressValidator());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use("/assets", express.static("assets", {
    maxAge: 24 * 60 * 60
}));
app.use(cookieParser(config.secret.cookie));
app.use(session({
    cookie: {
        maxAge: 1000 * 60 * 60 * 12 * 2 * 30
    },
    secret: config.secret.session,
    saveUninitialized: true,
    resave: true,
    store: new RedisStore({
        client: redis
    })
}));

//Route
app.use("/course", require("./routes/course")); // get "/"時交給routes course
app.use("/post", require("./routes/post")); // get "/post"時交給routes post處理
app.use("/user", require("./routes/user")); // get "/user"時交給routes user處理
app.use("/schedule", require("./routes/schedule")); // get "/schedule"時交給routes schedule
app.use("/course_rate", require("./routes/course_rate")); // get "/course_rate"時交給routes course_rate
app.use("/bot", require("./routes/bot").router);
app.use("/admin", function (req, res, next) {
    function unauthorized(res) {
        res.set('WWW-Authenticate', 'Basic realm=Input User&Password');
        return res.sendStatus(401);
    }
    var user = basicAuth(req);
    if (!user || !user.name || !user.pass) {
        return unauthorized(res);
    }
    if (user.name === config.basicAuth.username && user.pass === config.basicAuth.pw) {
        return next();
    } else {
        return unauthorized(res);
    }
}, require("./routes/admin"));
app.use("/*", require("./routes/course"));

setInterval(() => require("./script"), 1000 * 60 * 60 * 1); // 更新心得數

app.listen(process.env.PORT || 3000); //監聽3000port
console.log("running on port 3000");