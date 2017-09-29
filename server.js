var express = require('express');
var app = express();
var path = require('path');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/user.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'user.html'));
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
  console.log('hello..');
});
