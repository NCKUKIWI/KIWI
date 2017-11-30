var {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

var Rate = require('../model/Rate');
var rateType = require('./Rate');

var courseType = new GraphQLObjectType({
  name: "Course",
  description: "Course in current semester",
  fields: {
    id: {
      type: GraphQLInt
    },
    dep_name: {
      type: GraphQLString
    },
    dep_no: {
      type: GraphQLString
    },
    serial: {
      type: GraphQLString
    },
    course_no: {
      type: GraphQLString
    },
    class_no: {
      type: GraphQLString
    },
    class: {
      type: GraphQLString
    },
    grade: {
      type: GraphQLString
    },
    type: {
      type: GraphQLString
    },
    english: {
      type: GraphQLString
    },
    course_name: {
      type: GraphQLString
    },
    required: {
      type: GraphQLString
    },
    credit: {
      type: GraphQLInt
    },
    teacher: {
      type: GraphQLString
    },
    choose: {
      type: GraphQLInt
    },
    remaining: {
      type: GraphQLInt
    },
    time: {
      type: GraphQLString
    },
    classroom: {
      type: GraphQLString
    },
    note: {
      type: GraphQLString
    },
    limit: {
      type: GraphQLString
    },
    industry: {
      type: GraphQLString
    },
    attribute: {
      type: GraphQLString
    },
    edu_program: {
      type: GraphQLString
    },
    moocs: {
      type: GraphQLString
    },
    update_time: {
      type: GraphQLString,
    },
    comment_num: {
      type: GraphQLInt
    },
    rates:{
      type: new GraphQLList(rateType),
			resolve(course){
				return Rate.findAll({where: {course_name:course.course_name,teacher:course.teacher}}).then(function(result) {
					return result;
				});
			}
    }
  }
});

module.exports = courseType;