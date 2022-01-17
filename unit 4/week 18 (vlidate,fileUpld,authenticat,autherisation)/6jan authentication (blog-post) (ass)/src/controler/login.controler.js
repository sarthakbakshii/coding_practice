/*    W O R K  - F L O W 

# check if user exist or not with email
  if not => bad req;
  if yes => 
           match current password with the password in db
  if not match => error
  if yes => 
           create new tocken
  bind user and tocken

*/


require("dotenv").config()
var jwt = require('jsonwebtoken');
const express = require("express");
const User = require("../model/user.model");
const router = express.Router();
const { body, validationResult } = require('express-validator');

const newToken = (user) =>{
    return jwt.sign({ user: user }, process.env.JWT_PRIVATE_KEY );
}

router.post( "", 
// username must be an email
body('email').isEmail()
.withMessage('not a email'),

// password must be at least 5 chars long
body('password').isLength({ min: 5 })
.withMessage('password is weak, must be more than 5 char'),

async (req, res ) =>{
    try {
        // --------------- validation---------------------------------
            const errors = validationResult(req);
            const newError = errors.array().map( a =>{
                return {
                    message : a.msg,
                    field   : a.param,
                    value   : a.value
                }
            });
        
            if (!errors.isEmpty()) {
            return res.status(400).json({ errors: newError });
            }
        // --------------- validation---------------------------------

        // check user exisst
        let user = await User.findOne({email : req.body.email});

        // if do not exist => bad req
        if(!user) return res.status(400)
                    .send({ message : "no user exist with the email"})
        
        

        console.log(req.body.password)
        console.log(user.password)
        console.log("line 62")
    

        // match password
        const match = user.checkPassword(req.body.password)

         console.log("line 67")

        // if donot match => eror
        if(! match) return res.status(400)
                    .send({ message : "password in wrong"})
        
        // if password also matches then create a token
        const token = newToken(user);

        // return the token and the user details
        return res.status(201).send({ user, token });
        
        
    } catch (e) {
        return res.status(500).send({error : e.message})
    }
})

module.exports = router;