const express = require("express");
const mongoose = require("mongoose");

// ----------------------------------------------------------------

// ------------------------ connect db
const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/web13")
}

// ---------------------- creating schema
const testSchema = new mongoose.Schema({
    f_name : {type : String, required : true},
    age : { type : Number, required : true},
    gender : { type : String , required : false , default : 'male'},
    school : {type : String , required : false}
})

// --------------------- creating model
/* note => 

*/
const TestUser = mongoose.model("testUser",testSchema)

// ----------------------------------------------------------
const app = express();

app.get("/", async (req,res) => {
    const users = await TestUser.find().lean().exec();
    return res.send(users)
})

app.listen(2345 , async () =>{ 
    await connect()
    console.log("running on port 2345")
})

