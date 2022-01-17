// here we are  using destructuring
// normal way is in user.model.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
         name : { type : String , required : true},
         price : { type : Number , required : true },
         user_id : {
             type : mongoose.Schema.Types.ObjectId,
             ref : "user",  //---- table name of refrence
             required : true
         }
    },{
        versionKey : false, timestamps : true
    }
);

const Product = new mongoose.model("product", productSchema);

module.exports = Product;