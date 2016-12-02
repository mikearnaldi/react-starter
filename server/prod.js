var path = require('path');
var express = require('express');
var compression = require('compression');

var app = express();

app.use(compression());
app.use(require('connect-history-api-fallback')());

/*app.use('/index.html', function(req, res) {
  res.sendFile(path.join(__dirname, '../index-prod.html'));
})*/
app.use(express.static(path.join(__dirname, '../static')))

app.listen(3000, function (err) {
  if (err) {
    return console.error(err);
  }
});
