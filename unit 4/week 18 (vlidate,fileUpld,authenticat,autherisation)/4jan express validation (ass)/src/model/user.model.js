const mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({
    f_name : { type : String, required : true},
    l_name : { type : String, required : true},
    email  : { type : String, required : true},
    pincode: { type : Number, required : true},
    age    : { type : Number, required : true},
    gender : { type : String, required : true}

},{
    versionKey: false,
    timestamps : true
});


module.exports = new mongoose.model("userAssigiment",userSchema);