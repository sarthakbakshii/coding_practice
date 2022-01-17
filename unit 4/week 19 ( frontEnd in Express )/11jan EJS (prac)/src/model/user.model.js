const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name : {type : String , required: true},
    last_name  : {type : String , required: true},
    age        : {type : Number , required: true},
    email      : {type : String , required: true, unique: true}
},{
    versionKey: false,
    timestamps: true
});

const User = new mongoose.model("user", userSchema)

module.exports = User