const express = require("express");
const User = require("../model/user.model");
const router = express.Router();

router.get( "", 
async (req, res ) =>{
    try {
        const user = await User.find().lean().exec();
        return res.send(user)
        
    } catch (e) {
        return res.status(500).send({error : e.message})
    }
});


module.exports = router;