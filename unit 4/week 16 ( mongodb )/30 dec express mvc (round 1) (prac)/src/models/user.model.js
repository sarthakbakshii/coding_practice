const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    f_name : {type : String, required : true},
    age : { type : Number, required : true},
    gender : { type : String , required : false , default : 'female'},
    school : {type : String , required : false},
    deleted_at: { type : Boolean , required:false}
},{
    versionKey : false,
    timestamps: true
});

const User = mongoose.model("testusers", userSchema);

module.exports = User;