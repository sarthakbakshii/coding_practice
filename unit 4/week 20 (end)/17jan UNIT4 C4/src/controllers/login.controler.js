require("dotenv").config()
const express = require("express");
const router = express.Router();
var jwt = require('jsonwebtoken');
const User = require("../models/user.modle")


const newTocken = (user) =>{
    return jwt.sign({ user: user}, process.env.THE_PRIVATE_KEY);
}



router.post( "", async (req, res) =>{
    try {
        let user = await User.findOne({email : req.body.email}).lean().exec();

        if(!user){
            user = await User.create({
                name : req.body.email,
                password : req.body.password,
                email : req.body.email,
                role : "student"
            });
            const tocken = newTocken(user);
           return res.send({ message : "no user exist, but we created it for you by default name of your email and default role of student, you can change it afterwords",
                         user, tocken});
        } 
 
        // const match = user.checkPassword(req.body.password)
        // if(! match) return res.status(400).send({ message : "password is wrong"});

        const tocken = newTocken(user);

        return res.send({ message : "welcome user you are loged in",
                         user, tocken});

        
    } catch (e) {
        return res.status(500).send({error : e.message })
    }
})


module.exports = router;