var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");

// 引入配置
var config = require("./config");
// 获得mongo实例
var User = require("./schema.user");
var Paper = require("./schema.paper");
var Answer = require("./schema.answer");

//引入JWT
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

// mongo数据库设置
mongoose.connect(config.database);

// 设置superSecret 全局参数
app.set("superSecret", config.jwtsecret);

// 使用 body parser 将post参数及URL参数可以通过 req.body或req.query 拿到请求参数
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 使用 morgan 将请求日志输出到控制台
app.use(morgan("dev"));

/* //生成token
function createToken(name, special) {
  return (token = jwt.sign(
    {
      name,
      special
    },
    secret,
    {
      //秒=>到期时间
      expiresIn: 60 * 60 * 24
    }
  ));
} */

/* //使用中间件验证token合法性
app.use(
  expressJwt({
    secret: config.jwtsecret
  }).unless({
    //除了这些地址，其他的URL都需要验证
    path: ["/enter", "/login"]
  })
); */

/* //拦截器
app.use(function (err, req, res, next) {
    //当token验证失败时会抛出如下错误
    if (err.name === 'UnauthorizedError') {   
        //这个需要根据自己的业务逻辑来处理（ 具体的err值 请看下面）
        res.status(401).send('invalid token...');
    }
});

//定义一个接口，返回token给客户端
app.get('/getUserInfo', function(req, res) {
    res.json({
        token: token
    })
}); */

/* function getMessage(b){
    if(b){
        return {
            code: 200,
            msg: "succsess"
          }
    }else{
        return {
            code: 400,
            msg: "failed"
          }
    }
} */

//  localhost:端口号/api 路径路由定义
var apiRoutes = express.Router();
apiRoutes.use(function(req, res, next) {
  // 拿取token 数据 按照自己传递方式写
  var token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (token) {
    // 解码 token (验证 secret 和检查有效期（exp）)
    jwt.verify(token, app.get("superSecret"), function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: "无效的token." });
      } else {
        // 如果验证通过，在req中写入解密结果
        req.decoded = decoded;
        //console.log(decoded)  ;
        next(); //继续下一步路由
      }
    });
  } else {
    // 没有拿到token 返回错误
    return res.status(403).send({
      success: false,
      message: "没有找到token."
    });
  }
});

//API跟路径返回内容
apiRoutes.get("/", function(req, res) {
  res.json({ message: req.decoded._doc.name + "  欢迎使用API" });
});

//获取所有用户数据
apiRoutes.get("/users", function(req, res) {
    console.log(req.decoded._doc.name);
    User.find({}, function(err, users) {
      res.json(users);
    });
  });
  // 注册API路由
  app.use("/api", apiRoutes);

// 用户授权路径，返回JWT 的 Token 验证用户名密码
app.post("/authenticate", function(req, res) {
    console.log(req.body.name);
  User.findOne(
    {
      name: req.body.name
    },
    function(err, user) {
      if (err) throw err;
      if (!user) {
        res.json({ success: false, message: "未找到授权用户" });
      } else if (user) {
        if (user.password != req.body.password) {
          res.json({ success: false, message: "用户密码错误" });
        } else {
          var token = jwt.sign(user, app.get("superSecret"), {
            expiresIn: 60 * 60 * 24 // 授权时效24小时
          });
          res.json({
            success: true,
            message: "请使用您的授权码",
            token: token
          });
        }
      }
    }
  );
});
// 在steup 路径下简单用户数据写入操作，为了身份验证，当然也可以不使用数据库。
app.post("/setup", function(req, res) {
  if (req.body.name && req.body.password) {
    var nick = new User({
      name: req.body.name,
      password: req.body.password,
      type: "user"
    });
    nick.save(function(err) {
      if (err) throw err;
      console.log("用户存储成功");
      res.json({ success: true });
    });
  } else {
    res.json({ success: false, msg: "错误参数" });
  }
});



app.listen(config.network.port);
