var express = require('express');
var passport = require('passport');
const gadget_controlers = require('../controllers/gadget');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}
/* GET costumes */
router.get('/', gadget_controlers.gadget_view_all_Page);
router.get('/detail', gadget_controlers.gadget_view_one_Page);
router.get('/create',secured, gadget_controlers.gadget_create_Page);
router.get('/update', secured, gadget_controlers.gadget_update_Page);
router.post('/login', passport.authenticate('local'), function (req, res) {
    res.redirect('/');
});
router.get('/delete', secured,gadget_controlers.gadget_delete_Page);
module.exports = router;