var MongoClient = require("mongodb").MongoClient;

// 引入配置
var config = require("./config/config");

MongoClient.connect(config.mongodb_url_path, function (err, db) {

    const dp = db.db(config.mongodb_db_name);

    const tables = config.init_data.db.tables;
    tables.forEach(function(name){
        dp.collection(name).drop()
        dp.createCollection(name);
    })
    var datas = config.init_data.db.datas
    for (var c in datas) {
        var ct = dp.collection(c);
        ct.insertMany(datas[c]);
    }
})