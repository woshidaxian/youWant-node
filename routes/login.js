var express = require('express');
var router = express.Router();
const mysql = require('mysql')
const config = require('../settings.js');

router.post('/', function (req, res, next) {
    var connection = mysql.createConnection({
        host: config.DataBaseUrl,
        user: config.DataBaseUser,
        password: config.DataBasePassword,
        database: "youwant"
    })
    connection.connect()
    connection.query('select * from user where stuID="' + req.body.stu + '"', function (err, result) {
        var dataString = JSON.stringify(result);
        var data = JSON.parse(dataString);
        if (!err) {
            if (data.length) {
                if (data[0].isAdmin == 1) {
                    res.send('1')
                } else {
                    res.send('2')
                }
            } else {
                res.send('0')
            }
        } else {
            console.log(err);
        }
    })
    connection.end();
})
router.post('/admin', function (req, res, next) {
    var connection = mysql.createConnection({
        host: config.DataBaseUrl,
        user: config.DataBaseUser,
        password: config.DataBasePassword,
        database: "youwant"
    })
    connection.connect()
    connection.query('select pass from user where stuID="' + req.body.stu + '"', function (err, result) {
        var dataString = JSON.stringify(result);
        var data = JSON.parse(dataString);
        if (!err) {
            if (req.body.password == data[0].pass) {
                res.send('3')
            }else{
                res.send('0')
            }
        } else {
            console.log(err);
        }
    })
    connection.end()
})
module.exports = router