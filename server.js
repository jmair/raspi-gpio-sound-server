const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');

const routes = require('./routes/index');
const relays = require('./routes/relays');
const audio = require('./routes/audio');

const port = 8000;

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.post('/relays', relays);
app.post('/audio', audio);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('404 Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err,
  });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
module.exports = app;
