module.exports = {
    'network' : {
    'port':9080
  },    
  'jwtsecret': 'chaoma2018',
  'database': 'mongodb://127.0.0.1:27017/ipapers',
  'db_options':{
    db: { native_parser: true },
    server: { poolSize: 5 },
    replset: { rs_name: 'myReplicaSetName' },
    user: 'myUserName',
    pass: 'myPassword'
  }
};