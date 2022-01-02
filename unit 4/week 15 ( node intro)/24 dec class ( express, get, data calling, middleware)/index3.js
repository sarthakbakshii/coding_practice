const express = require("express");
const app = express();

// =================================================
// res need no next()
// MULTIBLE LOGGER ,, THEN WE CAN DIRECTLY ASSIGIGN IT IN METHOD CALLING

// middleware() : is a function run by us 
// middleware : is a callback run by express 
// so we will rap our middleware  by our made function

    app.get("/", oneMoreLogger("bakshi"),logger("masai"), (req,res) =>{

        console.log( {'name': 'sarthak',
                    "sirname" : req.name,
                    "from_where": req.nameA});

        return res.send( {'name': 'sarthak',
                    "sirname" : req.name,
                    "from_where": req.nameA});
        
    });

// ---------------------------------------------------
    app.listen(2345, () => {
        console.log("lisatening on port 2445")
    }) 

//================  M I D D L E   W A R E  ===================//

// middleware() : is a function run by us 
// middleware : is a callback run by express 
// so we will rap our middleware  by our made function

function logger(str) {
    return (req,res,next) => {
    req.nameA = str;
    next();
}
}
// function logger(req,res,next) {
//     req.nameA = "masai "
//     next();
// }

function oneMoreLogger(str) {
    return (req,res,next) => {
    req.name = str
    next();
}
}

// function oneMoreLogger(req,res,next) {
//     req.name = "bakshi"
//     next();
// }