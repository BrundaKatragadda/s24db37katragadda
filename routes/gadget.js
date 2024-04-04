var express = require('express');
const gadget_controllers = require('../controllers/gadget');
var router = express.Router();

/* GET home page. */

router.get('/', gadget_controllers.gadget_view_all_Page);


module.exports = router;
