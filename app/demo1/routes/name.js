'use strict';

module.exports = function (router, key) {
  router.get('/'+key+'/name', function(req, res) {
  	res.send(req.originalUrl);
  });
};