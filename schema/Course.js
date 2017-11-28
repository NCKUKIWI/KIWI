var {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

var CourseNew = require('../model/CourseNew');

var courseType = new GraphQLObjectType({
  name: "course",
  description: "A course",
  fields: {
    id: {
      type: GraphQLInt
    },
    '系所名稱': {
      type: GraphQLString
    },
    '系號': {
      type: GraphQLString
    },
    '選課序號': {
      type: GraphQLString
    },
    '課程碼': {
      type: GraphQLString
    },
    '分班碼': {
      type: GraphQLString
    },
    '班別': {
      type: GraphQLString
    },
    '年級': {
      type: GraphQLString
    },
    '類別': {
      type: GraphQLString
    },
    '英語授課': {
      type: GraphQLString
    },
    '課程名稱': {
      type: GraphQLString
    },
    '選必修': {
      type: GraphQLString
    },
    '學分': {
      type: GraphQLInt
    },
    '老師': {
      type: GraphQLString
    },
    '已選課人數': {
      type: GraphQLInt
    },
    '餘額': {
      type: GraphQLInt
    },
    '時間': {
      type: GraphQLString
    },
    '教室': {
      type: GraphQLString
    },
    '備註': {
      type: GraphQLString
    },
    '限選條件': {
      type: GraphQLString
    },
    '業界參與': {
      type: GraphQLString
    },
    '屬性碼': {
      type: GraphQLString
    },
    '跨領域學分學程': {
      type: GraphQLString
    },
    'Moocs': {
      type: GraphQLString
    },
    'updateTime': {
      type: GraphQLString,
    },
    'comment_num': {
      type: GraphQLInt
    },
    'course_name': {
      type: GraphQLString
    }
  }
});

var courseSchema = {
  type: new GraphQLList(courseType),
  description: "Course",
  args: {
    id: {
      type: GraphQLInt,
      description: "course id"
    }
  },
  resolve(root, params, ctx) {
    if(params.id) {
      return CourseNew.findOne({ where: { id: params.id } }).then(function(result) {
        return [result];
      });
    } else {
      return CourseNew.findAll().then(function(result) {
        return result;
      });
    }
  }
}

module.exports = courseSchema;
