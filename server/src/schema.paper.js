var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 返回一个mongo用户库实例
module.exports = mongoose.model(
  "papers",
  new Schema({
    acount:String,
    title: String,
    dateLine: String,
    date: String,
    creator: String,
    contact: String,
    description: String,
    expect: String,
    questions: [
      {
        index:Number,
        code: String,
        title: String,
        type: String,
        required: Boolean,
        items: [
          {
            index: String,
            content: String,
          }
        ]
      }
    ]
  })
);
