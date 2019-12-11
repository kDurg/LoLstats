const express = require('express');
const Router = express.Router();
const mysqlConn = require('../connection');

Router.get('/', (req, res)=> {
    mysqlConn.query('SELECT * FROM users', (err, rows, fields)=>{
        if (err) throw err;
        res.send(rows);
    })
})

module.exports = Router;