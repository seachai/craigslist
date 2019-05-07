const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const categoriesData = require('./data/categories.js')

const app = express();

app.use('/', serveStatic(path.join(__dirname, '/public')))
app.get('/api/categories', function(req, res) {
  res.json(categoriesData)
})

function notFound(req, res, next) {
  res.status(404);
  const error = new Error('Not Found - ' + req.originalUrl);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack
  });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Listening on port', port);
});

// app.get('*', function(req, res) {
//   res.sendFile(__dirname + '/public/index.html')
// })

// const port = process.env.PORT || 5000