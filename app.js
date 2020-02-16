var express = require('express')
var serveIndex = require('serve-index')
var path = require("path");
var app = express()

let configDir = path.resolve(".");

if (process.env.NODE_ENV === 'production') {

  if (process.env.configFile) {
    configDir = process.env.configFile;
  } else {
    configDir = require('os').homedir();
  }
  
}
const configFile = path.join(configDir, ".dotup-node-fileserver.json");
var config = require(configFile);

// const dir = "C:/src/Beispiele/web/css";

// const filter = (filename, index, files, dir) => {
//   return true;
// }

// Serve URLs like /ftp/thing as public/ftp/thing
// The express.static serves the file contents
// The serveIndex is this module serving the directory
app.use(
  '/',
  express.static(config.dir),
  serveIndex(config.dir,
    {
      'icons': true
      // "filter": filter,
      // "template": "public/directory.html"
    }
  ))

// Listen
app.listen(config.port || 3000)

// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
