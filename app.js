var createError = require('http-errors');
var express = require('express');
var path = require('path');
var helmet = require('helmet');

var version = require('./version/version');


var indexRouter = require('./routes/index');


var app = express();



app.use(helmet());
app.disable('x-powered-by');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);




app.get('*', (req, res) => {

  res.render('error.ejs', {
    message: 'Hello Node '
  });
});


console.log("Laguna Empty v", version.version + "." + version.rev);
module.exports = app;
