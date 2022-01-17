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


const User = require("../model/user.model")
const jwt = require('jsonwebtoken');
require("dotenv").config();


const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWT_SECRET_KEY, {
    expiresIn: 60 * 50,
  });
};

const register = async (req, res) =>{
    
   try {
        
        let user = await User.findOne({email : req.body.email}).lean().exec();

        if(user)  return res.status(400).send({ message : "user already exist" })

        // (3) if not then create user
        user = await User.create(req.body);

        const token = newToken(user);
        //  but still password will go to bd with out encrytption
        //  so in modle we will do encryption

        return res.status(201).send({user, token})
                    
   } catch (e) {
       return res.status(500).send({errorrrr : e.message})
   }
}
const login = async (req, res) => {
  try {
    // first we will find the user with the email
    let user = await User.findOne({ email: req.body.email });

    console.log("line 56")
    // if user is not found then throw an error 400 Bad Request
    if (!user) 
        return res.status(400)
                .send({ message: "Either Email or Password is incorrect" });

    // if user found then try to match the password provided with the password in db
    //  we will do this comparison in db ( model )
    
    console.log("line 65")
    console.log(req.body.password)
    const match = user.checkPassword(req.body.password)
     console.log("line 68")

    // if not match then throw an error 400 Bad Request
    if (!match) 
         return res.status(400)
                .send({ message: "Either Email or Password is incorrect" });

    // stateful => session on the server => cookie on the browser
    // stateless => nothing stored on the server

   // if password also matches then create a token
    const token = newToken(user);

    // return the token and the user details
    return res.status(201).send({ user, token });

  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = {register, login}