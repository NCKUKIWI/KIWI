var redis = require("redis");
var config = require("../config");

client = redis.createClient({
    'host': config.redis.host,
    'port': 6379,
    'password': config.redis.pw,
    'db': 1
});

client.on("error", function (err) {
    console.log("Error " + err);
});

function courseCacheKey(id) {
    return "course_" + id;
}

function userCacheKey(id) {
    return "user_" + id;
}
function userCourseKey(uid, cid) {
    return "user_" + uid + "_"+cid;
}

function userCourseKey(uid, cid) {
    return "user_" + uid + "_"+cid;
}

module.exports = {
    redis: client,
    courseCacheKey: courseCacheKey,
    userCacheKey: userCacheKey,
    userCourseKey: userCourseKey
};
