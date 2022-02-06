const express = require("express")
const fs = require("fs")
const router = express.Router()

const Product = require("../models/product.model")
const User = require("../models/user.model")
const upload = require("../middlewares/multer")
const authenticate = require("../middlewares/authentication")
const authorise = require("../middlewares/authorise")

router.get(
  "",
  authenticate,
  authorise(["admin", "seller"]),
  async (req, res) => {
    try {
      const dataP = await Product.find().lean().exec()

      return res.status(200).send(dataP)
    } catch (error) {
      console.log(error.message)
      return res.status(500).send(error.message)
    }
  }
)

router.post(
  "/single",
  authenticate,
  authorise(["admin", "seller"]),
  upload.single("image_urls"),
  async (req, res) => {
    try {
      const product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        image_urls: req.file.path,
        user: req.user
      })

      res.status(201).send(product)
    } catch (error) {
      console.log(error.message)
      return res.status(500).send(error.message)
    }
  }
)

router.post(
  "/multiple",
  authenticate,
  authorise(["admin", "seller"]),
  upload.any("image_urls"),
  async (req, res) => {
    try {
      const filePaths = req.files.map((file) => file.path)
      const product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        image_urls: filePaths,
        user: req.user
      })

      res.status(201).send(product)
    } catch (error) {
      console.log(error.message)
      return res.status(500).send(error.message)
    }
  }
)

router.patch(
  "/single/:_id",
  authenticate,
  authorise(["admin", "seller"]),
  upload.single("image_urls"),
  async (req, res) => {
    try {
      let product = await Product.findById(req.params._id)
      if (!product.user.equals(req.user._id)) return res.status(403).send("Permission Denied. Seller is not Same as Product seller")
console.log(product.image_urls)    
      product.image_urls.map((image_urls) => {
        fs.unlink(image_urls, () => {
          console.log("image deleted")
        })
      })

      product = await Product.findByIdAndUpdate(product._id, {
        name: req.body.name,
        price: req.body.price,
        image_urls: req.file.path,
      }, {new: true})

      res.status(201).send(product)
    } catch (error) {
      console.log(error.message)
      return res.status(500).send(error.message)
    }
  }
)

router.delete(
  "/single/:_id",
  authenticate,
  authorise(["admin", "seller"]),
  async (req, res) => {
    try {

      let product = await Product.findById(req.params._id)

      if (!product.user.equals(req.user._id))
        return res
          .status(403)
          .send("Permission Denied. Seller is not Same as Product seller")

      product.image_urls.map((image_urls) => {
        fs.unlink(image_urls, () => {
          console.log("image deleted")
        })
      })

      product = await Product.findByIdAndDelete(req.params._id)
      res.status(200).send(product)
    } catch (error) {
      res.status(500).send(error)
    }
  }
)

router.delete(
  "multiple/:_id",
  authenticate,
  authorise(["admin", "seller"]),
  async (req, res) => {
    try {
      let product = await Product.findById(req.params._id)

      if (!product.user.equals(req.user._id))
        return res
          .status(403)
          .send("Permission Denied. Seller is not Same as Product seller")
      product.image_urls.map((image_urls) => {
        fs.unlink(image_urls, () => {
          console.log("image deleted")
        })
      })
      product = await Product.findByIdAndDelete(req.params._id)
      res.status(200).send(product)
    } catch (error) {
      res.status(500).send(error)
    }
  }
)

module.exports = router
