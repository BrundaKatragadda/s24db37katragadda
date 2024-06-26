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
exports.gadget_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await gadget.findById(req.params.id)
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
// Handle Costume delete on DELETE.
exports.gadget_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await gadget.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
// Handle gadget update form on PUT.
//Handle Costume update form on PUT.
exports.gadget_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await gadget.findById(req.params.id)
        // Do updates of properties
        if (req.body.gadget_type)
            toUpdate.gadget_type = req.body.gadget_type;
        if (req.body.gadget_for) toUpdate.gadget_for = req.body.gadget_for;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};
// Handle a show one view with id specified by query
exports.gadget_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await gadget.findById( req.query.id)
res.render('gadgetdetail',
{ title: 'gadget Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.gadget_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('gadgetcreate', { title: 'gadget Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for updating a costume.
    // query provides the id
    exports.gadget_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await gadget.findById(req.query.id)
    res.render('gadgetupdate', { title: 'gadget Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle a delete one view with id from query
exports.gadget_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await gadget.findById(req.query.id)
    res.render('gadgetdelete', { title: 'gadget Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };