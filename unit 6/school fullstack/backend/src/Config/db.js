const mongoose = require("mongoose");

const config = () =>{
    return mongoose.connect("mongodb://127.0.0.1:27017/SchoolManagementSystem")
}

module.exports = config