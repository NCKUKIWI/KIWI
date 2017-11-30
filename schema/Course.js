var {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

var Course = require('../model/Course');
var courseType = require('../type/Course');

var courseSchema = {
  type: new GraphQLList(courseType),
  description: "Course in current semester",
  args: {
    id: {
      type: GraphQLInt,
      description: "course id"
    }
  },
  resolve(root, params, ctx) {
    if(params.id) {
      return Course.findOne({ where: { id: params.id } }).then(function(result) {
        return [result];
      });
    } else {
      return Course.findAll().then(function(result) {
        return result;
      });
    }
  }
}

module.exports = courseSchema;
