var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var app = express();
// app.set("port", process.env.port || 3000);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.listen(app.get("port"), () => {
  console.log(`Server started on port: ${app.get("port")}`);
});
app.use('/', indexRouter);
app.use('/api', apiRouter);

module.exports = app;


