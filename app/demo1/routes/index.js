'use strict';

module.exports = function (router, key) {
  router.get('/'+key, function(req, res) {
  	res.send(req.originalUrl);
  });
};