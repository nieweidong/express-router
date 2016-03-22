'use strict';

var path = require('path');
var fs = require('fs');

module.exports = function (name) {
  // the mainModule dirname
  name = name || 'app';
  var dirname = path.dirname(process.mainModule.filename);
  /*
    [ 'demo1', 'demo2' ]
   */
  var dirs = fs.readdirSync(path.join(dirname, name));

  var apps = {};
  dirs.map(function (value) {
    apps[value] = path.join(dirname, name, value);
  });
  return apps;
};
