const express = require('express');
const Router = express.Router();
const mysqlConn = require('../connection');
const Users = require('./routes/users');

let apiKey = 'RGAPI-33e98ff1-63ad-4a1e-965e-d741d155c223';