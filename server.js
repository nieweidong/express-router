/**
 * Express-router entry
 * @nieweidong
 */

'use strict';

var express = require('express');

var autoload = require('./lib/autoload');
var router = require('./lib/router');

var app = express();
var indexRouter = express.Router();

// 存放APPS的文件夹名称
var appPathName = 'app'; 
var apps = autoload(appPathName);
app.use(router(apps));

app.use('/', indexRouter);

app.use(express.static('static'));
app.set('trust proxy', true);

app.use(function(req, res) {
  res.send('Ooh! 迷路了...')
});

indexRouter.get('/', function(req, res) {
  res.send('Hello world!');
});

var server = app.listen(8801, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port)
});