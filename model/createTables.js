var User = require('./User');
var Cart = require('./Cart');
var CourseAll = require('./CourseAll');
var Course = require('./Course');
var Rate = require('./Rate');
var Follow = require('./Follow');
var FollowCopy = require('./FollowCopy');
var Post = require('./Post');
var ReportPost = require('./ReportPost');

User.sync({force:true}).then(function(){
  return Post.sync({force:true});
}).then(function(){
  return CourseAll.sync({force:true});
}).then(function(){
  return Course.sync({force:true});
}).then(function(){
  return Rate.sync({force:true});
}).then(function(){
  return Follow.sync({force:true});
}).then(function(){
  return FollowCopy.sync({force:true});
}).then(function(){
  return ReportPost.sync({force:true});
}).then(function(){
  return Cart.sync({force:true});
}).then(function(){
  console.log("Done");
});