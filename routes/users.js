var express = require('express');
var router = express.Router();
const mysql = require('mysql')
const config = require('../settings.js')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/userInfo', function (req, res, next) {
  var connection = mysql.createConnection({
    host: config.DataBaseUrl,
    user: config.DataBaseUser,
    password: config.DataBasePassword,
    database: "youwant"
  })
  connection.connect()
  connection.query('select * from total',function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result)
    }
  })
  connection.end()
})
router.get('/list',function(req,res,next){
  var connection = mysql.createConnection({
    host: config.DataBaseUrl,
    user: config.DataBaseUser,
    password: config.DataBasePassword,
    database: "youwant"
  })
  connection.connect()
  if(req.params.type==1){}else if(req.params.type==0){}else{res.send('404')}
  connection.query('select * from total where stuID="'+ req.params.stuID +'"',function(err,result){

  })
})
router.get('/yubiao',function (req,res,next){
  res.send('余镳儿子');
})
module.exports = router;
