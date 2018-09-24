var path = require("path");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var MongoDao = require("./mongodb.dao");

var compression = require("compression");

// 引入配置
var config = require("./config/config");

//引入JWT
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

//引入工具类
var utils = require("./utils");

// mongo数据库设置
mongoose.connect(config.database);

// 设置superSecret 全局参数
app.set("superSecret", config.jwtsecret);

//开启gzip压缩
app.use(
  compression({
    filter: function(req, res) {
      if (
        req.headers["x-no-compression"] ||
        req.path.match(/(^\/api*)|(^\/enter)|(^\/login)/g)
      ) {
        // 过滤
        return false;
      }
      return compression.filter(req, res);
    }
  })
);

// 使用 body parser 将post参数及URL参数可以通过 req.body或req.query 拿到请求参数
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 使用 morgan 将请求日志输出到控制台
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "/dist")));
app.use(express.static(path.join(__dirname, "/ie")));

//API跟路径返回内容
app.get("/", function(req, res) {
  res.sendfile("index.html");
});

app.get("/ie", function(req, res) {
  res.sendfile("ie/ie.html");
});

app.get("/ie_img", function(req, res) {
  res.sendfile("ie/ie.jpg");
});

app.get("/getChrome64", function(req, res) {
  res.sendfile("ie/ChromeSetup_64.exe");
});
app.get("/getChrome32", function(req, res) {
  res.sendfile("ie/ChromeSetup_32.exe");
});

app.get("/enter", function(req, res) {
  if(!req.query.code){
    return utils.createMsg(400,'无效的问卷码')
  }
  MongoDao.getActivePaperByCode(req.query.code,function(data){

  });
});

app.post("/login", function(req, res) {
  MongoDao.getUserByUserName(req.body.name, function(err, user) {
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
  });
  res.json(utils.createMsg(200));
});

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
        return res.json(utils.createMsg(500));
      } else {
        // 如果验证通过，在req中写入解密结果
        req.decoded = decoded;
        //console.log(decoded)  ;
        next(); //继续下一步路由
      }
    });
  } else {
    // 没有拿到token
    return res.send(utils.createMsg(500));
  }
});

apiRoutes.get("/papers", function(req, res) {});

apiRoutes.post("/setPaperStatus", function(req, res) {});

apiRoutes.post("/deletePaper", function(req, res) {});

apiRoutes.post("/submitPaper", function(req, res) {});

apiRoutes.post("/paperDetail", function(req, res) {});

apiRoutes.get("/paperAnalysis", function(req, res) {});

apiRoutes.post("/submitAnswer", function(req, res) {});

/* //获取所有用户数据
apiRoutes.get("/users", function(req, res) {
    console.log(req.decoded._doc.name);
    User.find({}, function(err, users) {
      res.json(users);
    });
  }); */

// 注册API路由
app.use("/api", apiRoutes);

/* // 用户授权路径，返回JWT 的 Token 验证用户名密码
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
// 在steup 路径下简单用户数据写入操作
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
}); */

app.listen(config.network.port);
