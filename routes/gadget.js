var express = require('express');
const gadget_controlers= require('../controllers/gadget');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  router.get('/', gadget_controlers.gadget_view_all_Page );
  res.render('gadget', { title: 'search results gadgets' });
});

module.exports = router;
