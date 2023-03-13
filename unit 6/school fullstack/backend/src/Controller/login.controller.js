const { Router } = require("express");
const express = require("express");
const Admin = require("../Modle/admin.modle");
const router = express.Router();

var jwt = require('jsonwebtoken');
require('dotenv').config()

const newTocken = (user) =>{
    return jwt.sign({ user: user }, process.env.SECRET_KEY);
}

router.post("/", async (req , res) =>{
    try {
              // get by username exist ?
              let admin = await Admin.findOne({ userName : req.body.username })
                          
              console.log("admin line 12" , admin)
             if(!admin){
                 return res.status(400).send({ errer : "no user with this username"})
             }
              // yes
              // userpasswor == req.password
              if( req.body.password !== admin.password){
                   return res.status(400).send({ errer : "incorrect password"})
              }

              // yes
              const tocken = newTocken(admin)
              
              return res.status(200).send({...admin._doc,tocken})


        
    } catch (e) {
        return res.status(500).send({error : e.message })
    }
})

module.exports = router;