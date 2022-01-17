const express = require("express");
const router = express.Router();
const Post = require("../model/post.model");
const autherization = require("../middleware/autherization")

router.get( "", autherization, 
 async (req, res) => {
  try {
    const products = await Product.find()
                          .populate({ path: "creater", select: {email : 1, _id : 0}  })
                          .lean().exec();
    console.log(products)
    return res.send(products);

  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post( "", autherization,
  async (req, res) => {
           const user = req.user;
    try {
      const product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        creater : req.user._id
      });

      return res.send( {product, user} );
    } catch (err) {
      return res.status(500).send(err);
    }
  }
);

module.exports = router