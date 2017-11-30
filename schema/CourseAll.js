var {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

var CourseAll = require('../model/CourseAll');
var courseAllType = require('../type/courseAll');

var courseAllSchema = {
  type: new GraphQLList(courseAllType),
  description: "The courses in the past few years",
  args: {
    id: {
      type: GraphQLInt,
      description: "course id"
    }
  },
  resolve(root, params, ctx) {
    if(params.id) {
      return CourseAll.findOne({ where: { id: params.id } }).then(function(result) {
        return [result];
      });
    } else {
      return CourseAll.findAll().then(function(result) {
        return result;
      });
    }
  }
}

module.exports = courseAllSchema;
