var express = require('express');
var app = express();
var path = require('path');
app.use(express["static"](path.join(__dirname, '../public')));
app.get('/', function (req, res) {
  res.send('test');
});
app.get('/upload', function (req, res) {
  res.send('got it');
});
app.listen(3000, function () {
  console.log('server running');
});