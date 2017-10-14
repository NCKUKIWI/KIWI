var express = require("express");
var app = express();
var engine = require("ejs-locals"); //讓express支援layout
var path = require("path");
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");
var session = require("express-session");
var db = require("./model/db");
var flash = require("express-flash");
var compression = require("compression");
var cookieParser = require("cookie-parser");
var helmet = require("helmet");

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
app.use(require('express-status-monitor')());
app.use("/assets", express.static("assets", {
    maxAge: 24 * 60 * 60
}));
app.use(cookieParser("secretString"));
//Handle sessions and cookie
app.use(session({
    cookie: {
        maxAge: 1000 * 60 * 60 * 12
    },
    secret: "secret",
    saveUninitialized: true,
    resave: true
}));

app.use(function(req, res, next) {
    if (req.cookies.isLogin) {
        db.FindbyID("user", req.cookies.id, function(user) {
            req.user = user;
            next();
        });
    }
    else {
        next();
    }
});

//Route
app.use("/course", require("./routes/course")); // get "/"時交給routes course
app.use("/post", require("./routes/post")); // get "/post"時交給routes post處理
app.use("/user", require("./routes/user")); // get "/user"時交給routes user處理
app.use("/schedule", require("./routes/schedule")); // get "/schedule"時交給routes schedule
app.use("/course_rate", require("./routes/course_rate")); // get "/course_rate"時交給routes course_rate
app.use("/bot", require("./routes/bot"));
app.use("/*", require("./routes/course"));

app.listen(process.env.PORT || 3000); //監聽3000port
console.log("running on port 3000");
