const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require('http');
const https = require('https');
const subdomain = require('express-subdomain');
var request = require('request');
var bodyParser = require('body-parser')

const adminRouter = require('./routes/admin');
const masterRouter = require('./routes/master');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port',process.env.PORT || 80);
app.set('subdomain offset', 2);

console.log(1);



// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })


// app.use(express.urlencoded({ extended: false }));
// app.use(logger('dev'));
// app.use(express.json());
// app.use(cookieParser());


// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

app.use(logger('dev'));
app.use(express.json({ limit : "50mb" }));
app.use(express.urlencoded({ limit:"50mb", extended: true }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'private')));

app.use(express.static(path.join(__dirname, 'views/admin/Template')));
app.use('/admin',express.static(path.join(__dirname, 'views/admin/Template')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(subdomain('admin',adminRouter));
app.use(subdomain('master',masterRouter));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/master', masterRouter);

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



const server = app.listen(app.get("port"), function(){ console.log("listen"+server.address().address+" start "+server.address().port+" port!" )  });

module.exports.connection = function() {
  return connection;
};
module.exports = app;
