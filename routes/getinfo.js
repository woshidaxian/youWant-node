const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const config = require('../settings')

router.post('/',function(req, res, next){
    var data = {
        code: 200,
        success: '1',
        data: {
            userInfo: {},
            itemInfo: {}
        }
    }
    var connection = mysql.createConnection({
        host: config.DataBaseUrl,
        user: config.DataBaseUser,
        password: config.DataBasePassword,
        database: "youwant"
    })
    connection.connect()
    connection.query('select * from total where id="'+ req.body.id +'"',function(err,result){
        if(!err){
            data.data.itemInfo = JSON.parse(JSON.stringify(result));
        }
    })
    connection.query('select * from user where stuID="'+ req.body.stuID +'"',function(err,result){
        if(!err){
            data.data.userInfo = JSON.parse(JSON.stringify(result));
            res.send(data);
        }
    })
    connection.end();
})
router.post('/haveBack',function(req,res,next){
    var connection = mysql.createConnection({
        host: config.DataBaseUrl,
        user: config.DataBaseUser,
        password: config.DataBasePassword,
        database: "youwant"
    })
    connection.connect()
    connection.query('',function(err,result){
        
    })
})


module.exports = router