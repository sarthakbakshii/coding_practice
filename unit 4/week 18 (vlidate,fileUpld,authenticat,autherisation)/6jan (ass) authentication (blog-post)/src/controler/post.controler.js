const express = require("express");
const router = express.Router();
const Post = require("../model/post.model");
const autherization = require("../middleware/autherization")

router.get( "", autherization,
 async (req, res) => {
  try {
    const posts = await Post.find().lean().exec();

    return res.send(posts);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post( "", autherization,
  async (req, res) => {
    try {
      const posts = await Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.body.user_id
      });

      return res.send( posts);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
);

module.exports = router