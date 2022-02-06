require("dotenv").config();
var jwt = require('jsonwebtoken');

const verifyToken = (tocken) =>{
    return new Promise( (resolve, reject)=>{
        jwt.verify(tocken, process.env.THE_PRIVATE_KEY, function(err, decoded) {
             if(err) return reject();
             return resolve(decoded)
            });
    })
}

module.exports = async (req, res, next) =>{
    if(! req?.headers?.authorization){
        return res.send({  message : "plz provide a valid user"} )
    }
    const berearTocken = req.headers.authorization;
    const tocken = berearTocken.split(" ")[1];

    let user;
    try{
        user = await verifyToken(tocken);
    }
    catch(e){
        return res.send({ message : "tocken is not valid"})
    }
    req.user = user.user;

    return next()
}