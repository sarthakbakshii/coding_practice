const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/march_9_backend_prac")
}

module.exports = connect