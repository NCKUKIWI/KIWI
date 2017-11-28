var {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

var postSchema = require('./Post');
var courseSchema = require('./Course');

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
		name: 'rootQuery',
		fields: {
			post:postSchema,
      course:courseSchema
		}
	})/*,
	mutation: new GraphQLObjectType({
    name: 'rootMutation',
		fields: {
      
    }
  })*/
});

module.exports = schema;