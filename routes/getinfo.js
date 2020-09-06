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
            console.log(result);
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
    connection.query('update total set date2="'+ req.body.date2 +'",isOver=1 where id="'+ req.body.id +'"',function(err,result){
        if(err){
            console.log(err);
        }else{
            // console.log(result);
            res.send('1')
        }
    })
    connection.end()
})


module.exports = router