var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('bil', { title: 'Bil' });
});

router.get('/test', function(req, res, next) {
  res.send( 'Hi test');
});



module.exports = router;
