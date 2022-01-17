const path = require("path");

const express = require("express");

const Product = require("../models/product.model");
const User = require("../models/user.model");

// const transporter = require("../configs/email");

const sendEmail = require("../utils/sendEmail");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    const user = await User.findById(product.user_id).lean().exec();

    sendEmail(
      "admin@masai.com",
      [user.email, "a@a.com"],
      `${user.name} Welcome to my site`,
      "Product is created",
      "<h1>Product is created</h1>",
      [{ filename: "name.html", path: path.join(__dirname, "../name.html") }]
    );

    return res.status(201).send("product");
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const size = +req.query.size || 5;
    let search = req.query.search;

    // when page is 1 we need to send products from 1 to 5
    // when page is 2 we need to send products from 6 to 10

    const skip = (page - 1) * size;

    let products, totalPages;
    if (!search) {
      products = await Product.find().skip(skip).limit(size).lean().exec();

      totalPages = Math.ceil((await Product.find().countDocuments()) / size);
    } else {
      products = await Product.find({ name: search })
        .skip(skip)
        .limit(size)
        .lean()
        .exec();
      totalPages = Math.ceil((await Product.find().countDocuments()) / size);
    }

    return res.status(200).send({ products, totalPages });
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
