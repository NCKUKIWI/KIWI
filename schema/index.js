var {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

var postSchema = require('./Post');
var courseAllSchema = require('./CourseAll');
var courseSchema = require('./Course');
var userSchema = require('./User');

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
		name: 'rootQuery',
		fields: {
      user:userSchema,
			post:postSchema,
      course:courseSchema,
      course_all:courseAllSchema
		}
	})/*,
	mutation: new GraphQLObjectType({
    name: 'rootMutation',
		fields: {
      
    }
  })*/
});

module.exports = schema;