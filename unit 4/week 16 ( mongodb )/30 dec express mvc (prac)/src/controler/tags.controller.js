const express = require("express");
const app = express();
const router = express.Router();

const Tag = require("../models/tag.model")


// ---------- get al tags
router.get( "", async (req,res) => {
    try {
        const post = await Tag.find().lean().exec();
        return res.send(post)
    } catch (err) {
        return res.status(500).json({error : err.message });
    } 
});

// ----------- create post
router.post( "" , async (req,res) => {
    try {
        const tag = await Tag.create(req.body);
        return res.status(201).send(tag)
    } catch (err) {
        return res.status(500).json({ error : err.message });
    }
});

module.exports = router