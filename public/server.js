var express = require('express');
var multer = require('multer');
var app = express();
var path = require('path');
var port = 3000;
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    console.log(req.file);
    cb(null, 'images');
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
var upload = multer({
  storage: storage
});
app.use(express["static"](path.join(__dirname, '../public')));
app.use(express.json());
app.post('/upload', upload.single('image'), function (req, res) {
  console.log(req.file);
  res.send('got it');
});
app.post('/test', function (req, res) {
  console.log(req.file);
  res.send('got it from test');
});
app.listen(port, function () {
  console.log("server running on port ".concat(port));
});