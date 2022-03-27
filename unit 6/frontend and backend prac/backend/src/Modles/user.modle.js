const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user : { type : String , require : true},
    password : { type : String , require : true}
},{
     versionKey : false ,
     timestamps : true
});

const TestUSer =  mongoose.model("rohitUser", userSchema);

module.exports = TestUSer;

