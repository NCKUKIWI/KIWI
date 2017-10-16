var User = require('./User');
var Cart = require('./Cart');
var CourseAll = require('./CourseAll');
var CourseNew = require('./CourseNew');
var CourseRate = require('./CourseRate');
var Follow = require('./Follow');
var FollowCopy = require('./FollowCopy');
var Post = require('./Post');
var ReportPost = require('./ReportPost');

User.sync({force:true}).then(function(){
  Post.sync({force:true}).then(function(){
    CourseAll.sync({force:true}).then(function(){
      CourseNew.sync({force:true}).then(function(){
        CourseRate.sync({force:true}).then(function(){
          Follow.sync({force:true}).then(function(){
            FollowCopy.sync({force:true}).then(function(){
              ReportPost.sync({force:true}).then(function(){
                Cart.sync({force:true}).then(function(){

                });
              });
            });
          });
        });
      });
    });
  });
});
