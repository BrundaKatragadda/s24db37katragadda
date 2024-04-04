var gadget = require('../models/gadget');
// List of all gadgets
// List of all Costumes
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
// for a specific gadget.
// for a specific Costume.
exports.gadget_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await gadget.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    
// Handle gadget create on POST.
// Handle Costume create on POST.
exports.gadget_create_post = async function (req, res) {
    console.log(req.body)
    let document = new gadget();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.gadget_type = req.body.gadget_type;
    document.gadget_for = req.body.gadget_for;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle gadget delete from on DELETE.
exports.gadget_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: gadget delete DELETE ' + req.params.id);
};
// Handle gadget update form on PUT.
//Handle Costume update form on PUT.
exports.gadget_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await gadget.findById( req.params.id)
// Do updates of properties
if(req.body.gadget_type)
toUpdate.gadget_type = req.body.gadget_type;
if(req.body.gadget_for) toUpdate.gadget_for = req.body.gadget_for;
if(req.body.cost) toUpdate.cost = req.body.cost;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};