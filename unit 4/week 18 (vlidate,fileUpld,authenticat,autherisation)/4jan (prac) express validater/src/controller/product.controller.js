const express = require("express");
const router = express.Router();

// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');

// --- model
const Product = require("../model/product.model");
const User = require("../model/user.model");
 
router.get( "", async (req, res ) => {
    try {
        const products = await Product.find().lean().exec();
        return res.send(products)
    } catch (e) {
        return res.status(500).json({ error : e.message})
    }
})

/*   //======= round 1  ========
router.post( "",body("name").notEmpty(), async (req, res) => {
    try {
        console.log(body("name"));

        // --------------- code from doc ---------------
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        // --------------- code from doc ---------------


        const product = await Product.create(req.body);
        return res.send(product)
    } catch (e) {
         return res.status(500).json({ error : e.message})
    }
});
*/

router.post( "",
            body("name")
            .isLength({ min : 5})
            .withMessage('Must  be 6 charecter long'),

            body("price").notEmpty()
            .withMessage("price must not be empty ")
            .custom( val => {
                if( val < 10 ){
                     throw new Error('value choti he');
                }
                return true
            }),

            body("user_id")
            .custom( async val => {
                try{
                    const user = await User.findById(val).lean().exec();
                    if(!user)return Promise.reject("User does not exist");
                    return true;
                }catch(e) {
                    console.log(e.message)
                }
            }),

             async (req, res) => {
    try {
        // console.log(body("name"));

       // --------------- code from doc ---------------
        const errors = validationResult(req);
        if (!errors.isEmpty()) {

            // -------- making our own error message --
            const newError = errors.array().map( a => {
                return {
                    message : a.msg,
                    field : a.param,
                } 
            })

        return res.status(400).json({ errors: newError });
        }
        // --------------- code from doc ---------------


        const product = await Product.create(req.body);
        
        return res.send(product)
    } catch (e) {
         return res.status(500).json({ error : e.message})
    }
});




module.exports = router;