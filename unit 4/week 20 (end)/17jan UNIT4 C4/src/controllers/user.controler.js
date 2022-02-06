
const express = require("express");
const router = express.Router();


const User = require("../models/user.modle")

router.get( "", async (req, res) =>{
    try {
        let user = await User.find().lean().exec();

        return res.send(user)

        
    } catch (e) {
        return req.status(500).send({error : e.message })
    }
})

module.exports = router;