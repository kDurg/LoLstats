const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users');

const app = express();
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/:username', userRoutes);

app.listen(3000);

// http://stayregular.net/blog/make-a-nodejs-api-with-mysql
// https://www.youtube.com/watch?v=7CqJlxBYj-M
// https://www.youtube.com/watch?v=xn9ef5pod18
