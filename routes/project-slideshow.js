var express = require('express');
var router = express.Router();

/* GET project-slideshow page. */
router.get('/', function(req, res, next) {
  res.render('project-slideshow', { title: 'Medigo Blue' });
});

module.exports = router;
