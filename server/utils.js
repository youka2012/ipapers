// 引入配置
var config = require("./config/config");

//引入JWT
const jwt = require("jsonwebtoken");

var MSG = {
  200: {
    code: 200,
    msg: "success"
  },
  400: {
    code: 400,
    msg: "failed"
  },
  500: {
    code: 500,
    msg: "unauthenticate"
  }
};
var tokenTime = 60 * 60 * 24;

module.exports = {
  //生成token
  createToken(name, special) {
    return (token = jwt.sign(
      {
        name,
        special
      },
      config.jwtsecret,
      {
        //秒=>到期时间
        expiresIn: tokenTime
      }
    ));
  },

  //生成回复消息
  createMsg(code, path) {
    if (path) {
      return {
        code: 100,
        msg: path
      };
    }
    var result = MSG[code];
    if (result) {
      return result;
    }
  },
  parseJson(req) {
    if (req.body.data) {
      //能正确解析 json 格式的post参数
      return req.body.data;
    } else {
      //不能正确解析json 格式的post参数
      var body = "",
        jsonStr;
      req.on("data", function(chunk) {
        body += chunk; //读取参数流转化为字符串
      });
      req.on("end", function() {
        //读取参数流结束后将转化的body字符串解析成 JSON 格式
        try {
          jsonStr = JSON.parse(body);
        } catch (err) {
          jsonStr = null;
        }
        return jsonStr;
      });
    }
  }
};
