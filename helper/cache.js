var redis = require("redis"),

client = redis.createClient({
    'host':'redis',
    'port': 6379,
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

module.exports = {
    redis: client,
    courseCacheKey: courseCacheKey,
    userCacheKey: userCacheKey
};
