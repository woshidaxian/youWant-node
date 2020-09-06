var express = require('express');
var router = express.Router();
const mysql = require('mysql')
const config = require('../settings.js')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/userInfo', function (req, res, next) {
  var connection = mysql.createConnection({
    host: config.DataBaseUrl,
    user: config.DataBaseUser,
    password: config.DataBasePassword,
    database: "youwant"
  })
  connection.connect()
  connection.query('select * from user where stuID="'+ req.body.stuID +'"',function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(JSON.parse(JSON.stringify(result)))
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
  connection.query('select * from total where stuID="'+ req.query.stuID +'"',function(err,result){
    res.send(JSON.parse(JSON.stringify(result)))
  })
  connection.end()
})

router.get('/listN',function(req,res,next){
  var connection = mysql.createConnection({
    host: config.DataBaseUrl,
    user: config.DataBaseUser,
    password: config.DataBasePassword,
    database: "youwant"
  })
  connection.connect()
  connection.query('select * from total where stuID="'+ req.query.stuID +'" and isOver=0',function(err,result){
    res.send(JSON.parse(JSON.stringify(result)))
  })
  connection.end()
})

router.get('/yubiao',function (req,res,next){
  res.send('余镳儿子');
})
module.exports = router;
