var redis = require("redis");
var config = require("../config");

client = redis.createClient({
    'host': config.redis.host,
    'port': config.redis.port,
    'password': config.redis.pw,
    'db': config.redis.db
});

client.on("error", function (err) {
    console.log("Error " + err);
});

function courseCacheKey(id) {
    return "course:" + id;
}

function userCacheKey(id) {
    return "user:login:" + id;
}
function userCourseKey(uid, cid) {
    return "user:course:" + uid + "_"+cid;
}

function userCourseKey(uid, cid) {
    return "user:course:" + uid + "_"+cid;
}

function draftKey(course, teacher, uid) {
    course = trimSpace(course)
    teacher = trimSpace(teacher)
    let str = course+"_"+teacher+"_"+uid;
    return str;
}

function trimSpace(strTmp){
    strTmp = strTmp.replace(' ','')
    strTmp = strTmp.replace('  ','')
    return strTmp;
}
module.exports = {
    redis: client,
    courseCacheKey: courseCacheKey,
    userCacheKey: userCacheKey,
    userCourseKey: userCourseKey,
    draftKey: draftKey
};
