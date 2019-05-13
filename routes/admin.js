var express = require('express');
var router = express.Router();
var dbsystem = require('../model/dba');

router.get('/dashboard', function (req, res) {
    var checkCourseStatus = 0;
    var db = new dbsystem();
    db.select().field("*").from("setting").where("id=", 1).run(function (data, err) {
        checkCourseStatus = data[0].status;
        res.json( {
            botswitch: checkCourseStatus
        });
    });
});

module.exports = router;