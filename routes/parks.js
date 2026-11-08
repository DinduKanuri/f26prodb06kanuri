var express = require('express');
var router = express.Router();

/* GET Parks search results page. */
router.get('/', function(req, res, next) {
  res.render('parks', { title: 'Search Results Parks' });
});

module.exports = router;
