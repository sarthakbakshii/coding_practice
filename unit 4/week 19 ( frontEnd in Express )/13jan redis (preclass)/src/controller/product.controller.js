/* why to call db everytime unnessaray 
if we can store data in cache

1) npm i redis 
2) create redis.js in config with given codes from documentaion
3) work flow :
            // check if redis has data or not
            // if yes, then serve it
            // else, fetch form database
            // save it in redis
            // return the data


*/


const express = require("express");
const router = express.Router();
const client = require("../config/redis")

// --- model
const Product = require("../model/product.model");

router.get( "", async (req, res ) => {
    try {
        // check if redis has data or not
        client.get( "posts", async (err, posts) =>{
            if(err) return res.status(500).send({ status : "failed", message : err.message})

            // if yes, then serve it
            if(posts) return res.status(201).send({ status : "redis is giving data", posts : JSON.parse(posts) })
            else{
                try {
                    // else, fetch form database
                    const products = await Product.find().lean().exec();

                    // save it in redis
                    client.set("posts", JSON.stringify(products))
                    
                    // return the data
                    return res.status(200).send({ status : "data directly coming from db", products: products });
                            
                } catch (e) {
                    return res.status(500).json({ error : e.message})
                }
            }
        })
    } catch (e) {
        return res.status(500).json({ error : e.message})
    }
})

router.post( "",
  async (req, res) => {
    try {
        console.log("line 20", req.body)
      const product = await Product.create(req.body);

      return res.send( product );
    } catch (err) {
      return res.status(500).send(err);
    }
  }
);

module.exports = router;