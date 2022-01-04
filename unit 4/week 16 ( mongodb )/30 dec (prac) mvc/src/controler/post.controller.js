const express = require("express");
const app = express();
const router = express.Router();

const Post = require("../models/post.model")

// ---------- get al posts
router.get( "", async (req,res) => {
    try {
        // const post = await Post.find().lean().exec();
        /*const post = await Post.find()
                            //    .populate("user_id")
                               .populate( { path : "user_id" })
                            //    .populate("tag_ids")
                               .populate( { path : "tag_ids" })
                               .lean().exec();
        */
            const post = await Post.find()
                               .populate( { path : "user_id", select : {f_name : 1 , school :1} })
                               .populate( { path : "tag_ids", select : { name : 1} })
                               .lean().exec();

        return res.send(post)
    } catch (err) {
        return res.status(500).json({error : err.message });
    } 
});

// ----------- create post
router.post( "" , async (req,res) => {
    try {
        const post = await Post.create(req.body);
        return res.status(201).send(post)
    } catch (err) {
        return res.status(500).json({ error : err.message });
    }
})

module.exports = router;
