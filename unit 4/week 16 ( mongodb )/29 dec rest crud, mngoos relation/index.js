const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); //-- converting data to bson on creATION OF POST data

// ----------------------------- conection 
const conect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/web13")
}

// ---------------------------- schema
const userSchema = new mongoose.Schema({
    f_name : {type : String, required : true},
    age : { type : Number, required : true},
    gender : { type : String , required : false , default : 'female'},
    school : {type : String , required : false},
    deleted_at: { type : Boolean , required:false}
},{
    versionKey : false,
    timestamps: true
});

const tagSchema = new mongoose.Schema(
    {
        name : {type: String, required: true}
    },{
        versionKey : false,
        timestamps : true
    }
);

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

const commentSchema = new mongoose.Schema(
    {
        body : { type : String , required : true},
        post_id : { type : mongoose.Schema.Types.ObjectId , ref : "post", required :true}
    },{
        versionKey : false,
        timestamps : true
    }
);

// ---------------------------------- model

const User = mongoose.model("testusers", userSchema);
const Tag = mongoose.model("tag" , tagSchema);
const Post = mongoose.model("post", postSchema)
const Comment = mongoose.model("comment", commentSchema);
// ===========================//
//        CRUD operations     //
// ===========================//

/*----------------- REST CRUD for users

post     /users       => create a user
get      /users       => get all users
get      /users/:id   => get a single user
patch     /users/:id   => update a single user
delete   /user/:id    => delete a single user
*/

// ------------- get /users => get all users

app.get( "/users", async (req,res) => {
    try {
        const users = await User.find().lean().exec();
        return res.send(users)
    } catch (err) {
        return res.status(500).json({error : err.message });
    } 
});

// -------------post /users => create a user
app.post( "/users", async (req , res) => {
    console.log("body : ",req.body);
    try {
        const user = await User.create(req.body);
        return res.status(201).send(user)
    } catch (err) {
        return res.status(500).json({ error : err.message });
    }
} );

// ------------- get /users/:id => get a single user
app.get( "/users/:id" , async (req,res) => {
    try {
        const user = await User.findById( req.params.id)
                                .lean().exec();
        return res.send(user)
    } catch (err) {
        return res.status(500).json({ error : err.message})
    }
})

// ------------- patch /users/:id => update a single user
app.patch( "/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate( req.params.id, req.body, {new : true})
                                .lean().exec();
        // without {new : true} it will uddate data but gives back old data only
        return res.status(201).send(user);
    } catch (e) {
        return res.status(500).json({ error : e.message})
    }
})

// ------------delete /user/:id => delete a single user
app.delete( "/users/:id" , async (req, res) => {
    try{
        const user = await User.findByIdAndDelete( req.params.id)
                                .lean().exec()
        return res.status(200).send(user)
    } catch(e){
        return self.status(500).json( {error : e.message})
    }
})
// ============================== crud operation for post

// ---------- get al posts
app.get( "/posts", async (req,res) => {
    try {
        // const post = await Post.find().lean().exec();

        // ---- with this much only we will  get data like this ->
        /*  {
                "_id": "61d17c27b6b8b730463e6a10",
                "title": "First Post",
                "content": "First Content",
                "user_id": "61cf09ea76fe997e65f58e3c",
                "tag_ids": [
                    "61d179a5b6b8b730463e6a00",
                    "61d179adb6b8b730463e6a02"
                ],
                "createdAt": "2022-01-02T10:19:19.259Z",
                "updatedAt": "2022-01-02T10:19:19.259Z"
            },
        */

        /*const post = await Post.find()
                            //    .populate("user_id")
                               .populate( { path : "user_id" })
                            //    .populate("tag_ids")
                               .populate( { path : "tag_ids" })
                               .lean().exec();
        */
        // Now populate(), will populate whole document
        /* {
                "_id": "61d17c27b6b8b730463e6a10",
                "title": "First Post",
                "content": "First Content",
                "user_id": {
                    "_id": "61cf09ea76fe997e65f58e3c",
                    "f_name": "user_1 updated",
                    "age": 1,
                    "gender": "female",
                    "school": "school_1 ",
                    "updatedAt": "2022-01-02T10:21:06.831Z"
                },
                "tag_ids": [
                    {
                        "_id": "61d179a5b6b8b730463e6a00",
                        "name": "node",
                        "createdAt": "2022-01-02T10:08:37.321Z",
                        "updatedAt": "2022-01-02T10:08:37.321Z"
                    },
                    {
                        "_id": "61d179adb6b8b730463e6a02",
                        "name": "express",
                        "createdAt": "2022-01-02T10:08:45.797Z",
                        "updatedAt": "2022-01-02T10:08:45.797Z"
                    }
                ],
                "createdAt": "2022-01-02T10:19:19.259Z",
                "updatedAt": "2022-01-02T10:19:19.259Z"
            },
            but we dont need whole data, we neeed only minnimal data 
        */

            const post = await Post.find()
                               .populate( { path : "user_id", select : {f_name : 1 , school :1} })
                               .populate( { path : "tag_ids", select : { name : 1} })
                               .lean().exec();
            /* {
                    "_id": "61d17c27b6b8b730463e6a10",
                    "title": "First Post",
                    "content": "First Content",
                    "user_id": {
                        "_id": "61cf09ea76fe997e65f58e3c",
                        "f_name": "user_1 updated",
                        "school": "school_1 "
                    },
                    "tag_ids": [
                        {
                            "_id": "61d179a5b6b8b730463e6a00",
                            "name": "node"
                        },
                        {
                            "_id": "61d179adb6b8b730463e6a02",
                            "name": "express"
                        }
                    ],
                    "createdAt": "2022-01-02T10:19:19.259Z",
                    "updatedAt": "2022-01-02T10:19:19.259Z"
                },
            */



        return res.send(post)
    } catch (err) {
        return res.status(500).json({error : err.message });
    } 
});

// ----------- create post
app.post( "/posts" , async (req,res) => {
    try {
        const post = await Post.create(req.body);
        return res.status(201).send(post)
    } catch (err) {
        return res.status(500).json({ error : err.message });
    }
})

// ============================== crud operation for TAGS

// ---------- get al tags
app.get( "/tags", async (req,res) => {
    try {
        const post = await Tag.find().lean().exec();
        return res.send(post)
    } catch (err) {
        return res.status(500).json({error : err.message });
    } 
});

// ----------- create post
app.post( "/tags" , async (req,res) => {
    try {
        const tag = await Tag.create(req.body);
        return res.status(201).send(tag)
    } catch (err) {
        return res.status(500).json({ error : err.message });
    }
})




// ---------------------port listening
app.listen( 2345 , async () => {

    await conect();
    console.log("running on port 2345")
} )