var express = require('express');
var router = express.Router();
const mysql = require('mysql')
const config = require('../settings.js')

router.post('/', function (req, res, next) {
    var connection = mysql.createConnection({
        host: config.DataBaseUrl,
        user: config.DataBaseUser,
        password: config.DataBasePassword,
        database: "youwant"
    })
    connection.connect()
    connection.query('INSERT INTO total(stuID,date0,date1,date3,address,way,line,reason) VALUES("'+ req.body.stuID +'","'+ req.body.date0 +'","'+ req.body.date1 +'","'+ req.body.date3 +'","'+ req.body.address +'","'+ req.body.way +'","'+ req.body.line +'","'+ req.body.reason +'")',function(err,result){
        if(!err){
            res.send('1');
        }else{
            console.log(err);
        }
    })
    console.log(req.body);
    connection.end()
})


module.exports = router