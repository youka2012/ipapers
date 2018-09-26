# ipapers
问卷调查/答题系统
后台：Node.js Express Mongoose
前端：Vue vue/cli fetch iView
数据库：MongoDB

# 系统数据初始化
在MongoDb创建ipapers数据库，可在config.js配置数据库及初始化及测试数据
cd sever
node initedb
test.data.js配置了初始化测试数据供参考
test.api.js协定了前后端通信接口格式

# 开发环境启动
cd sever
node index
config.js配置网络


cd client
npm run serve
异步请求已经反向代理到node server端
配置在vue.config.js

# 生产打包
cd client
npm run build打包到client/dist
node express 静态文件指向了client/dist 这里是为了方便 实际生产可通过webpack插件copy-webpack-plugin或者gulp自动化文件转移等流程

github:
https://github.com/youka2012/ipapers
