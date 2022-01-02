const express = require("express");
const app = express();

// =================================================
// res need no next()
// MULTIBLE LOGGER ,, THEN WE CAN DIRECTLY ASSIGIGN IT IN METHOD CALLING

//-------------------------- on postman

    app.get("/", oneMoreLogger,logger, (req,res) =>{
        console.log( {'name': 'sarthak',
                    "sirname" : req.name,
                    "from_where": req.nameA});

        return res.send( {'name': 'sarthak',
                    "sirname" : req.name,
                    "from_where": req.nameA});
        
    });

    app.get("/user",logger, oneMoreLogger, (req,res) =>{
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

//              M I D D L E   W A R E          //

function logger(req,res,next) {
    req.nameA = "masai "
    console.log("logger 1 ------------ start");
    next();
    console.log("logger 1 ------------ end");
}

function oneMoreLogger(req,res,next) {
    req.name = "bakshi"
    console.log("oneMoreLogger 2 ------------ start");
    next();
    console.log("oneMoreLogger 2 ------------ end");
}


// ===========================- W O R K   F L O W -==========================
/*
WHEN ON POSTMAN WE RUN " http://localhost:2345/ "

1) app.get("/", oneMoreLogger,logger, (req,res) =>{})          || GOES IN THIS LINE
2) oneMoreLogger                                               || execute
3)  console.log("oneMoreLogger 2 ------------ start");         || execute
4) next(); of line 48                                          || goes to stack and on lext line . I.E, "logger".
5) console.log("logger 1 ------------ start");                 || excute
6) next(); of line 41                                          || goes to stack and on lext line . I.E, " console.log( object) ".
7) console.log( {'name': 'sarthak',
                  "sirname" : req.name,
                  "from_where": req.nameA});                   || execute
8) return res.send( {'name': 'sarthak',
                    "sirname" : req.name,
                    "from_where": req.nameA});                 || execute
9) now app.get("/", oneMoreLogger,logger, (req,res) =>{}) is executed completely 
10) (6) is on stack on top
11) console.log("logger 1 ------------ end");                  || execute ,, function logger(req,res,next) " completed "
12) (6) is poped out of stack
13) (4) is on stack on top
14) console.log("oneMoreLogger 2 ------------ end");           || execute ,, fuction ends
15) 


*/