var express = require('express');
var router = express.Router();

/* GET blog page. */
router.get('/', function(req, res, next) {
  res.render('blog', { title: 'Medigo Blue' });
});

module.exports = router;
