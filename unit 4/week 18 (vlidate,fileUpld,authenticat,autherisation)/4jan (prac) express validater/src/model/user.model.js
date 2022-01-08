// here we are not using destructuring
// we are doing normal way.
//  destructuring is in product.model.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
         name : { type : String , required : true},
         email : {type : String , required : true}
    },{
        versionKey : false, timestamps : true
    }
);

const User = new mongoose.model("user", userSchema);

module.exports = User;