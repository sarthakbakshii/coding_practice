const { Router } = require("express");

const Post = require("../models/post.model");

const redis = require("../configs/redis");

const router = Router();

router.post("", async (req, res) => {
  try {
    redis.get("posts", async function (err, posts) {
      const post = await Post.create(req.body);

      if (err) console.error(err.message);

      if (posts) {
        const parsedPosts = JSON.parse(posts); // js obj
        const newPosts = [...parsedPosts, post]; // parsedObject.push(post)

        redis.set("posts", JSON.stringify(newPosts));
      } else {
        const posts = await Post.find().lean().exec();

        try {
          const newPosts = JSON.parse(posts); // json
          redis.set("posts", JSON.stringify(newPosts));
        } catch (err) {
          console.log(err.message);
        }
      }

      return res.status(201).send(post);
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    redis.get("posts", async function (err, posts) {
      if (err) console.log(err.message);

      if (posts) {
        const allPosts = JSON.parse(posts);

        return res.status(200).send({ posts: allPosts, redis: true });
      } else {
        try {
          const posts = await Post.find().lean().exec();
          redis.set("posts", JSON.stringify(posts));
        } catch (err) {
          console.log(err.message);
        }

        return res.status(200).send({ posts: posts, redis: false });
      }
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", (req, res) => {
  try {
    redis.get(`posts.${req.params.id}`, async function (err, post) {
      // posts.61e00296421fe7b38e201860
      if (err) console.log(err.message);

      if (post) {
        const fetchedPost = JSON.parse(post);

        return res.status(200).send({ post: fetchedPost, redis: true });
      } else {
        try {
          const post = await Post.findById(req.params.id).lean().exec();
          redis.set(`posts.${req.params.id}`, JSON.stringify(post));

          return res.status(200).send({ post: post, redis: false });
        } catch (err) {
          console.log(err.message);
        }
      }
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", (req, res) => {
  try {
    redis.get(`posts.${req.params.id}`, async function (err, fetchedPost) {
      if (err) console.error(err.message);

      const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();

      redis.set(`posts.${req.params.id}`, JSON.stringify(post));

      const posts = await Post.find().lean().exec();
      redis.set("posts", JSON.stringify(posts));

      return res.status(201).send(post);
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    redis.get(`posts.${req.params.id}`, async function (err, fetchedPost) {
      if (err) console.error(err.message);
      const post = await Post.findByIdAndDelete(req.params.id);

      redis.del(`posts.${req.params.id}`);

      const posts = await Post.find().lean().exec();

      redis.set("posts", JSON.stringify(posts));

      return res.status(200).send(post);
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
//posts/61dff95d72f4add9abedcf2b/likes
router.post("/:id/likes", (req, res) => {
  try {
    redis.get(`posts.${req.params.id}.likes`, async function (err, likeCount) {
      if (err) console.error(err.message);

      const post = await Post.findById(req.params.id).lean().exec();

      if (likeCount) {
        redis.incr(`posts.${req.params.id}.likes`);

        post.likes = +likeCount + 1;
        return res.status(201).send({ post, redis: true });
      } else {
        likeCount = 1;
        redis.set(`posts.${req.params.id}.likes`, likeCount);

        post.likes = likeCount;
        return res.status(201).send({ post, redis: false });
      }
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
