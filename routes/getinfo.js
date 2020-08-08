const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const config = require('../settings')

router.get('/',function(req, res, next){
    var connection = {
        host: config.DataBaseUrl,
        user: config.DataBaseUser,
        password: config.DataBasePassword,
        database: "youwant"
    }
})



module.exports = router