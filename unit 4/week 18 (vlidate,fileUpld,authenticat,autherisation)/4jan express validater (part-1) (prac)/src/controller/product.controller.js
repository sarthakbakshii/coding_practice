const express = require("express");
const router = express.Router();

// --- model
const Product = require("../model/product.model");

router.get( "", async (req, res ) => {
    try {
        const products = await Product.find().lean().exec();
        return res.send(products)
    } catch (e) {
        return res.status(500).json({ error : e.message})
    }
})

router.post( "", async (req, res) => {
    try {
        const products = await Product.create(req.body);
        return res.send(products)
    } catch (e) {
         return res.status(500).json({ error : e.message})
    }
})




module.exports = router;