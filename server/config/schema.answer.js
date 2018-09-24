var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 返回一个mongo库实例
module.exports = mongoose.model(
  "Answer",
  new Schema({
    paperId:String,
    number: String,
    name: String,
    department: String,
    date:String,
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
