var redis = require("redis");
var config = require("../config");

client = redis.createClient({
    'host': config.redis.host,
    'port': 6379,
    // 'password': config.redis.pw,
    'db': 1
});

client.on("error", function (err) {
    console.log("Error " + err);
});

function courseCacheKey(id) {
    return "course:" + id;
}

function userCacheKey(id) {
    return "user:" + id;
}

module.exports = {
    redis: client,
    courseCacheKey: courseCacheKey,
    userCacheKey: userCacheKey
};
