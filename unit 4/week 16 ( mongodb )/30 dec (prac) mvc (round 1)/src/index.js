const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); //-- converting data to bson on creATION OF POST data

// ----------------------------- conection 
// const conect = () => {
//     return mongoose.connect("mongodb://127.0.0.1:27017/web13")
// }
const conect = require("./configs/db");

// ---------------------------- schema

// const userSchema = new mongoose.Schema({
//     f_name : {type : String, required : true},
//     age : { type : Number, required : true},
//     gender : { type : String , required : false , default : 'female'},
//     school : {type : String , required : false},
//     deleted_at: { type : Boolean , required:false}
// },{
//     versionKey : false,
//     timestamps: true
// });

// const tagSchema = new mongoose.Schema(
//     {
//         name : {type: String, required: true}
//     },{
//         versionKey : false,
//         timestamps : true
//     }
// );

// const postSchema = new mongoose.Schema(
//     {
//         title : { type : String , required : true},
//         content : { type : String , required : true},
//         user_id : { type : mongoose.Schema.Types.ObjectId, 
//                      ref : "testusers",
//                     required : true},
//         tag_ids : [
//                     { type : mongoose.Schema.Types.ObjectId, 
//                     ref : "tag" , 
//                     required : true}
//                  ]
//     },{
//         versionKey : false,
//         timestamps : true
//     }
// );

// const commentSchema = new mongoose.Schema(
//     {
//         body : { type : String , required : true},
//         post_id : { type : mongoose.Schema.Types.ObjectId , ref : "post", required :true}
//     },{
//         versionKey : false,
//         timestamps : true
//     }
// );

// ---------------------------------- model

// const User = mongoose.model("testusers", userSchema);
// const Tag = mongoose.model("tag" , tagSchema);
// const Post = mongoose.model("post", postSchema)
// const Comment = mongoose.model("comment", commentSchema);

const User = module.require("./models/user.model")
const Tag = module.require("./models/tag.model")
const Post = module.require("./models/post.model")
const Comment = module.require("./models/comment.model")


// ===========================//
//        CRUD operations     //
// ===========================//

/*----------------- REST CRUD for users
ALL CRUD OPERATION ARE IN CONTROLER / USER.CONTROLER
*/

const userController = require("./controler/user.controler")
app.use("/users",userController)

// ============================== crud operation for post
const postController = require("./controler/post.controller");
app.use("/posts",postController)

// ============================== crud operation for TAGS

const tagController = require("./controler/tags.controller");
app.use("/tags",tagController)




// ---------------------port listening
app.listen( 2345 , async () => {

    await conect();
    console.log("running on port 2345")
} )