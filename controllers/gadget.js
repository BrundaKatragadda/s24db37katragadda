var gadget = require('../models/gadget');
// List of all gadget
exports.gadget_list = function(req, res) {
res.send('NOT IMPLEMENTED: gadget list');
};
// for a specific gadget.
exports.gadget_detail = function(req, res) {
res.send('NOT IMPLEMENTED: gadget detail: ' + req.params.id);
};
// Handle gadget create on POST.
exports.gadget_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: gadget create POST');
};
// Handle gadget delete from on DELETE.
exports.gadget_delete = function(req, res) {
res.send('NOT IMPLEMENTED: gadget delete DELETE ' + req.params.id);
};
// Handle gadget update form on PUT.
exports.gadget_view_all_Page = function(req, res) {
res.send('NOT IMPLEMENTED: gadget update PUT' + req.params.id);
};
// List of all gadgets
exports.gadget_list = async function(req, res) {
    try{
    thegadget = await gadget.find();
    res.send(thegadget);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };