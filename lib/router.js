'use strict';

var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

var routers = [];

module.exports = function (apps) {
	var keys = Object.keys(apps); 
	keys.map(function (key) {
		var dirname = apps[key];

		var router = express.Router();

		var routesDirname = path.join(dirname, 'routes');
		if (fs.existsSync(routesDirname)) {
			var routes = fs.readdirSync(routesDirname);
			routes.map(function (route) {
				require(path.join(routesDirname, route))(router, key);
			});
		}

		routers.push(router);
	});

	return routers;
};