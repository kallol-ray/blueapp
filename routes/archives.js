var express = require('express');
var router = express.Router();

/* GET archives page. */
router.get('/', function(req, res, next) {
  res.render('archives', { title: 'Medigo Blue' });
});

module.exports = router;
