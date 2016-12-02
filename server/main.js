var path = require('path');
var webpack = require('webpack');
var express = require('express');
var devMiddleware = require('webpack-dev-middleware');
var hotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config');

var app = express();
var compiler = webpack(config);

app.use(require('connect-history-api-fallback')())

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  quiet     : false,
  noInfo    : false,
  stats     : {
    chunks       : false,
    chunkModules : false,
    colors       : true
  },
}));

app.use(hotMiddleware(compiler));

/*app.use('/index.html', function(req, res) {
  res.sendFile(path.join(__dirname, '../static/index.html'));
})*/
app.use(express.static(path.join(__dirname, '../static')))

app.listen(3000, function (err) {
  if (err) {
    return console.error(err);
  }
});
