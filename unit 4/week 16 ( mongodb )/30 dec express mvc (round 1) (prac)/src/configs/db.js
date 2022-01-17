const mongoose = require("mongoose");


// ----------------------------- conection 
module.exports = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/web13")
}
