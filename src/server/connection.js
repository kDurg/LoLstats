const mysql = require('mysql');

const mysqlConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'lolstats',
    multipleStatements: true
});
  
mysqlConn.connect( err => {
    if (err) throw err;
    console.log('Connected to Server');
});

module.exports = mysqlConn;