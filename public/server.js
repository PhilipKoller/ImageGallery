var express = require('express');
var multer = require('multer');
var app = express();
var path = require('path');
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'images');
  },
  filename: function filename(req, file, cb) {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
var upload = multer({
  storage: storage
});
app.use(express["static"](path.join(__dirname, '../public')));
app.get('/', function (req, res) {
  res.send('test');
});
app.post('/upload', upload.single('image'), function (req, res) {
  res.send('got it');
});
app.listen(3000, function () {
  console.log('server running');
});