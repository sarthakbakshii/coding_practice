const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title : { type : String , required : true},
        content : { type : String , required : true},
        user_id : { type : mongoose.Schema.Types.ObjectId, 
                     ref : "testusers",
                    required : true},
        tag_ids : [
                    { type : mongoose.Schema.Types.ObjectId, 
                    ref : "tag" , 
                    required : true}
                 ]
    },{
        versionKey : false,
        timestamps : true
    }
);

const Post = mongoose.model("post", postSchema)

module.exports = Post;