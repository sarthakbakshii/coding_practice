/* NOte : tocken always comes in header
flow:
    // check if TOKEN is inside req header
    // if not then throw error
    // if it is a BEARER token then it must look like this

    TOKEN :=> [ Berear gkgkvgshfdkvhskdfvksvskfvgskvsv ]

    so we will split it and take => [ "Berear","dgsgsdvs"]
    and take 1st index                  (0)<-------(1)<---------------------- [ indexs ]

    // if yes check its a bearer tocken
    // if not thow error
    // if yes then verify token and get user from token
    // attach user to the request

*/
require("dotenv").config();
var jwt = require('jsonwebtoken');

const verifyToken = (token) =>{
    // console.log(token, " line 22")
    return new Promise( (resolve, reject) =>{

        jwt.verify(token, process.env.JWT_SECRET_KEY, function(err, decoded) {
            if(err) return reject();

            return resolve(decoded)
        });

    } )
}


module.exports = async (req, res, next) =>{
    // check if TOKEN is inside req header
    if(! req?.headers?.authorization)
        return res.status(500).send({ message : "please provide a valid user"})
   
    // if yes check its a bearer tocken
    const berearToken = req.headers.authorization;

    if(! berearToken.startsWith("Bearer "))
      return res.status(500).send({ message : "please provide a valid autherization token"})

    // if yes then verify token and get user from token
    const token = berearToken.split(" ")[1];

    let user;
    try {
        user = await verifyToken(token);
    } catch (e) {
       return res.status(401).send({ message : "token is not valid"}) 
    }
    console.log("user : ", user)
    
    // attach user to the request
    req.user = user.user
    console.log("req.user : ", req.user)

    return next()
}