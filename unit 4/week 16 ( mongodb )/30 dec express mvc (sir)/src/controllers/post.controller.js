const express = require("express");

const Post = require("../models/post.model");

const crudWithOnePopulateController = require("./crudwithonepopulate.controller");
const crudController = require("./crud.controller");

const router = express.Router();

router.post("", crudController(Post).post);

router.get("", async (req, res) => {
  try {
    const posts = await Post.find()
      // .populate("user_id")
      .populate({ path: "user_id", select: { first_name: 1 } })
      .populate({ path: "tag_ids", select: { name: 1 } })
      .lean()
      .exec();

    return res.status(200).send(posts);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get(
  "/:id",
  crudWithOnePopulateController(Post, { path: "user_id", select: { email: 1 } })
    .getOneWithOnePopulate
);

// router.get("/:id", async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id)
//       .populate({ path: "user_id", select: { email: 1 } })
//       .populate({ path: "tag_ids", select: { name: 1 } })
//       .select({ title: 1, content: 1 })
//       .lean()
//       .exec();

//     return res.status(200).send(post);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });

router.patch("/:id", crudController(Post).updateOne);
router.delete("/:id", crudController(Post).deleteOne);

module.exports = router;
