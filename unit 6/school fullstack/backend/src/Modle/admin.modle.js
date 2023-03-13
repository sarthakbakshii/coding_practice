const mongoose  = require("mongoose");

const adminSchema = mongoose.Schema(
    {
        name : {type : String , required : true},
        userName : {type : String , required : true},
        password : {type : String , required : true},
    },
    {
        timestamps: true, versionKey : false
    }
);

const Admin = mongoose.model("admin" , adminSchema);

module.exports = Admin;