const mongoose = require("mongoose")
const gadgetSchema = mongoose.Schema({
    gadget_type: {
        type:String,
        minlength:1,
        maxlength:15,
    },
    gadget_for: String,
    cost: {
        type:Number,
        min:1,
        max:200,
    }
})
module.exports = mongoose.model("gadget",gadgetSchema)