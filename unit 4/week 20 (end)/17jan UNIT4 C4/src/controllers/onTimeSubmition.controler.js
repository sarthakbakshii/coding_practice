const express = require("express");
const router = express.Router();
const Submition = require("../models/submition.model")
const Evaluation = require("../models/evaluation.modle");
const User = require("../models/user.modle");

router.get( "", async (req, res) => {
    try {
        
        const Submitions = await Submitions.aggregate([
            {
                 $lookup: {
                        form : "Evaluation",
                        localField : "evaluation_id",
                        foreignField : "_id"
                }
            },
            {
                $match : { 
                    createdAt : { $gt : end_date}
                }
            }
            
        ])
        return res.send(Submitions)
        
    } catch (e) {
        return req.status(500).send({error : e.message })
    }
})
module.exports = router