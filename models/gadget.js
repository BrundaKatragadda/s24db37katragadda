const mongoose = require("mongoose")
const gadgetSchema = mongoose.Schema({
gadget_type: String,
gadget_for: String,
cost: Number
})
module.exports = mongoose.model("gadget",
gadgetSchema)