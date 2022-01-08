const express = require("express");
const router = express.Router();

const Product = require("../model/product.model");
const authenticate = require("../middleware/authentication")


router.get( "", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();

    return res.send(products);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post( "", authenticate,
  async (req, res) => {
           const user = req.user;
    try {
      const product = await Product.create({
        name: req.body.name,
        price: req.body.price
      });

      return res.send( {product, user} );
    } catch (err) {
      return res.status(500).send(err);
    }
  }
);

module.exports = router