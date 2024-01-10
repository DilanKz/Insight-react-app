var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors=require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articleRouter = require('./routes/article');

const mongoose = require('mongoose');

var app = express();

app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Increase payload size limit for JSON
app.use(express.json({ limit: '10mb' }));

// Increase payload size limit for URL-encoded data
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('dotenv').config();


mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log("Connected to mongo")
}).catch((reason)=>{
  console.error("Error connecting to mongo "+reason)
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/articles', articleRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
