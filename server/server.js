const express = require('express');
const cors = require('cors');
var mysql = require('mysql');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// if (port === 5000) {
//   var connection = mysql.createConnection({
//     host     : 'localhost',
//     port     : '3306',
//     user     : 'me',
//     password : 'secret',
//     database : 'my_db',
//     insecureAuth: true
//   });
// } else {
//   console.log('Not on Port 5000', port);
// }
 
// connection.connect();

// module.exports = connection;
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// connection.end();


// http://stayregular.net/blog/make-a-nodejs-api-with-mysql
// https://www.youtube.com/watch?v=7CqJlxBYj-M