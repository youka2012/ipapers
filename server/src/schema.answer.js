var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 返回一个mongo用户库实例
module.exports = mongoose.model(
  "Answer",
  new Schema({
    number: String,
    name: String,
    department: String,
    remark: String,
    answers: [
      {
        code: String,
        required: Boolean,
        type: String,
        answer: [String]
      }
    ]
  })
);
