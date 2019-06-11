var createError 		= require('http-errors');
var express 			= require('express');
var path 				= require('path');
var cookieParser 		= require('cookie-parser');
var logger 				= require('morgan');
// const ejs				= require('ejs');

var indexRouter = require('./routes/index');
var portfolioRouter = require('./routes/portfolio');
var projectImageRouter = require('./routes/project-image');
var projectSlideshowRouter = require('./routes/project-slideshow');
var blogRouter = require('./routes/blog');
var blogSingleRouter = require('./routes/blog-single');
var archivesRouter = require('./routes/archives');
var contactRouter = require('./routes/contact');
 
// var usersRouter = require('./routes/users'); //Default silo eita

var app = express();

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ejs.registerHelper('getCurrentYear', () => {
// 	return new Date().getFullYear();
// });
// app.locals.getCurrentYear = function(name) {
//   return new Date().getFullYear();
// }

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/portfolio', portfolioRouter);
app.use('/project-image', projectImageRouter);
app.use('/project-slideshow', projectSlideshowRouter);
app.use('/blog', blogRouter);
app.use('/blog-single', blogSingleRouter);
app.use('/archives', archivesRouter);
app.use('/contact', contactRouter);

// app.use('/users', usersRouter); //Default silo eita




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
