const User = require("../model/user.model")
const jwt = require('jsonwebtoken');
require("dotenv").config();

/*
const token = (user) =>{
    return jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256'});
}                      ^     ^          ^
           user <<=----|-----|          |---=>> we will use a .env file, this is like a salt
 */
// NOTE : .env, to read environment variable, we need to add a package
//           npm i dotenv

const newToken = (user) =>{
    return jwt.sign({ user: user }, 
           process.env.JWT_SECRET_KEY
          );
} 
// ================== this is going to return a tocken


const register = async (req, res) =>{
    
    /*========== P R O C E D U R E ================
    (1) check if email is already provide to a user
    (2) if yes throw an error 400 bad req
    (3) if not then create user
    (4) we will hash password for user (encrypt)
    (5) return token for the user
    ===============================================
    */
   try {
        // (1) check if email is already provide to a user
        console.log("34")
        let user = await User.findOne({email : req.body.email}).lean().exec();

        // (2) if yes throw an error 400 bad req
        if(user) 
        return res.status(400)
              .send({ message : "user with email already exist..." })

        // (3) if not then create user
        user = await User.create(req.body);
                        
        // (4) we will hash password for user (encrypt) is in model
/*  take th euser => encrytp => send to frontend => when frontend send it back => decrypt => user back
*/
        //  (5) return token for the user
        // npm install jsonwebtoken

        const token = newToken(user);

        //  return token and user details
        return res.status(201).send({user, token})
                           //------------- here we are sending user without th password


   } catch (e) {
       return res.status(500).send({errorrrr : e.message})
   }
    return res.send("register ")
}
const login = async (req, res) =>{
    return res.send("login ")
}

module.exports = {register, login}