var express = require('express');
var router = express.Router();

/* GET blog-single page. */
router.get('/', function(req, res, next) {
  res.render('blog-single', { title: 'Medigo Blue' });
});

module.exports = router;
