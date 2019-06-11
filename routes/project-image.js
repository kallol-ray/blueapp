var express = require('express');
var router = express.Router();

/* GET project-image page. */
router.get('/', function(req, res, next) {
  res.render('project-image', { title: 'Medigo Blue' });
});

module.exports = router;
