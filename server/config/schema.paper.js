var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 返回一个mongo库实例
module.exports = mongoose.model(
  "papers",
  new Schema({
    code:String,
    acount:String,
    on:Boolean,
    title: String,
    dateLine: String,
    createDate: String,
    creator: String,
    contact: String,
    description: String,
    expect: String,
    questions: [
      {
        index:Number,
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
