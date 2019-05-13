var config = require("../config");

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
    courseCacheKey: courseCacheKey,
    userCacheKey: userCacheKey,
    userCourseKey: userCourseKey
};
