var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gadget', { title: 'search results gadgets' });
});

module.exports = router;
