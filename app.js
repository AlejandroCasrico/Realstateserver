
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
// const redis = require("redis");
// const client = redis.createClient();
// client.on("error",function(error){
//   console.log(error);
// });
// client.set("key","info");
// client.get("key","info");
// client.get("key",function(err,info){
//   console.log(info);
// })
 const databaseUrl = "mongodb+srv://Alexcas01:alexcas01@clusterabc.vac34vy.mongodb.net/?retryWrites=true&w=majority"
const databaseOptions ={
  useNewUrlParse: true
};
mongoose.connect(databaseUrl);
mongoose.connection.on('open', function(){
  console.log("database connection")
});
// createClient({
//   url: 'redis-13416.c60.us-west-1-2.ec2.cloud.redislabs.com:13416'
// });
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var housesRouter = require('./routes/houses');
var app = express();
const config = require('./config').configuration;
const authRouter= require('./routes/auth');
// jwt
// const jwt = require ('jsonwebtoken');
// const privateKey = "secretKey";
// const payload ={
//   name : "",
//   profile:"GUEST",
//   exp:1516239022
// };
// try {
//   const newToken =await jwt.sign(payload,privateKey,{algorithm:'RS256'});
// } catch (err) {
//   console.log("JWT ERROR")
// }
// view engine setup
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth',authRouter);
app.use('/houses',housesRouter);

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
