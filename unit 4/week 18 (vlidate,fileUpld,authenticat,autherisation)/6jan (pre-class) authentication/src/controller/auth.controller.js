/*
we need to install jsonwebtocken to generate tockens
 >  npm install jsonwebtoken

and from doc :
    var jwt = require('jsonwebtoken');
    var privateKey = fs.readFileSync('private.key');
    var token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256'})

private key is a global variable or like a salt
stored in .emv file outside src. and to read that .env file
we need a package > npm install dotenv

        require("dotenv").config

*/

require("dotenv").config() ;
const jwt = require('jsonwebtoken');

const privateKey = process.env.JWT_SECRET_KEY;  

const User = require("../model/user.model")

const newToken = (user) =>{
    return jwt.sign({ user: user }, privateKey)
}

const signUp = async (req, res) => {
    try {
        
         const user = await User.create(req.body)
         const token = newToken(user);
         return res.send({token , user})
        //  but still password will go to bd with out encrytption
        //  so in modle we will do encryption
    } 
    catch (e) {
        return res.status(500).send({error : e.message})
    }
   
}

const signin = async (req, res ) => {
    try{

        let user = await User.findOne({ email : req.body.email});

        if(!user) return res.status(401).send({ message : "user already exist"});

        

    }
    catch(e){
        return res.status(500).send({message : e.message})
    }
}

module.exports = {signUp, signin}