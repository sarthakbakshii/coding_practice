
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
         name : { type : String , required : true},
         price : { type : Number , required : true }
        
    },{
        versionKey : false, timestamps : false
    }
);

const Product = new mongoose.model("product", productSchema);

module.exports = Product;