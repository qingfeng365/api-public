var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/angular14/docs/api', function(req, res, next) {
//   res.redirect('/angular14/docs/index.html');
// });
// 

router.get('/angular14/*', function(req, res, next) {
  res.redirect('/angular14/docs/index.html');
});
module.exports = router;
