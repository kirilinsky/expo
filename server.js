let express = require('express');
let path = require('path');
let httpProxy = require('http-proxy');

let proxy = httpProxy.createProxyServer({
  changeOrigin: true
});
let app = express();

let isProduction = process.env.NODE_ENV === 'production';
let port = isProduction ? process.env.PORT : 3000;
let publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

app.all('/db/*', function (req, res) {
  proxy.web(req, res, {
    target: 'http://salty-caverns-61223.herokuapp.com/'
  });
});

if (!isProduction) {
  let bundle = require('./webpack.config.js');
  bundle();
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    });
  });
}

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});