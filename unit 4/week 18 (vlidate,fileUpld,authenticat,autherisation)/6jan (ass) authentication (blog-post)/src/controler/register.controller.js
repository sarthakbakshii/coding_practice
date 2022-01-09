/*      W O R K  - F L O W 

# check if user exisst
  if exist => bad req
  if not, create user
  create token
  bind user and tiken and send it back

# how to create token  (documentation) :
  npm install jwtwebtocken
  var jwt = require('jsonwebtoken');
  const newToken = (user) =>{
    return jwt.sign({ user: user }, privateKey );
}

# private key is a .env file outside src, to read it,
  we requir a package =>
    npm install dotenv
    require("dotenv").config()

    privatekey ===>  process.env.JWT_PRIVATE_KEY 

# still password is going in db without encrytption
  lets go on model

# adding validation 

            npm install express-validator
            const { body, validationResult } = require('express-validator');



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
        let user = await User.findOne({email : req.body.email}).lean().exec();

        // if exist => bad req
        if(user) return res.status(400)
                    .send({ message : "user already exist, try new email"})

        // if not, create user
        user = await User.create(req.body)

        // create token
        const token = newToken(user)
        
        // bind token with user
        return res.send({user,token})
        
    } catch (e) {
        return res.status(500).send({error : e.message})
    }
})

module.exports = router;