var gadget = require('../models/gadget');
// List of all gadget\
exports.gadget_list = async function (req, res) {
    try {
        thegadget = await gadget.find();
        res.send(thegadget);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// List of all gadg
// VIEWS
// Handle a show all view
exports.gadget_view_all_Page = async function (req, res) {
    try {
        thegadget = await gadget.find();
        res.render('gadget', { title: 'gadget Search Results', results: thegadget });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
var express = require('express');
const gadget_controllers = require('../controllers/gadget');
var router = express.Router();
/* GET gadgets */
router.get('/', gadget_controllers.gadget_view_all_Page);
module.exports = router;
