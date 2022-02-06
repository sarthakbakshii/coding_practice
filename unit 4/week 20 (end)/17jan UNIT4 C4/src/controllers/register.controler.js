require("dotenv").config()
const express = require("express");
const router = express.Router();
var jwt = require('jsonwebtoken');


const newTocken = (user) =>{
    return jwt.sign({ user: user}, process.env.THE_PRIVATE_KEY);
}

const User = require("../models/user.modle")

router.post( "", async (req, res) =>{
    try {
        let user = await User.findOne({email : req.body.email}).lean().exec();

        if(user) return res.status(400).send({ message : "user already exist"});

        user = await User.create(req.body);
        const tocken = newTocken(user);

        return res.send({user, tocken})

        
    } catch (e) {
        return res.status(500).send({error : e.message })
    }
})

module.exports = router;