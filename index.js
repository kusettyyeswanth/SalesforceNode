var express = require('express');
var jsforce = require('jsforce');
var conn = new jsforce.Connection();
var app = express();
conn.login('username@domain.com', 'password', function(err, res) {
  if (err) { return console.error(err); }
  conn.query('SELECT Id, Name FROM Account', function(err, res) {
    if (err) { return console.error(err); }
    console.log(res);
  });
});
app.get('/', function (req, res) {
  res.send(res);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


