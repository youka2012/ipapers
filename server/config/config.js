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
  },
  init_data:{
    db:{
      users:[
        {
          name:'admin',
          password:'chaoma2018',
        },
        {
          name:'test',
          password:'test1234',
        },
        {
          name:'chao',
          password:'ma1234',
        }
      ]
    }
  }
};