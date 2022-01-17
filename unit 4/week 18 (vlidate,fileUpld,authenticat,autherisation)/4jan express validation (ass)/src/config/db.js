const mongoose = require("mongoose")

module.exports = () =>{
    return mongoose.connect("mongodb://127.0.0.1:27017/unit4_validation");
}

// // const { Mongoose } = require("mongoose");

// // const connect = () => Mongoose.connect("mongodb://127.0.0.1:27017/unit4_validation");

// // module.exports = { connect }