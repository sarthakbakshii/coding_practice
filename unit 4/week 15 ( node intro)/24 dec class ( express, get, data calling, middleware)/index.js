const express = require("express");
const app = express();



// get :-retreive a list of something or a single item 
// post :- save something on the server on the db
// put / patch :- update an item, put replace the item and patch appends to it 
// delete :- delete 
// =================================================

app.use(logger)

//-------------------------- on postman
/*      method + route
        GET  + /
        http://localhost:2345 + /
*/
    app.get("/",(req,res) =>{
        console.log( {'name': 'sarthak.com'});
        return res.send( {'name': 'sarthak.com'});
        
    })
// ---------------------------------------------------
/*      method + route
        GET  + /user
        http://localhost:2345 + /user
*/
    app.get("/user",(req,res) =>{
        console.log( {'sartak': 'masai student'});
        return res.send( {'sartak': 'masai student'});
    })
// ---------------------------------------------------
    app.listen(2345, () => {
        console.log("lisatening on port 2445")
    }) 

// ============================================//  
//              M I D D L E   W A R E          //
// ============================================//

function logger(req,res,next) {
    console.log("one");
    console.log("two");
    next();
    console.log("three")
}

// ================ QUESTION ==============
/*
function logger(req,res,next) {
    console.log("one");
    console.log("two");
    next();
    console.log("three")
};      
   sir here if next(), is breaking 
   the flow of fun logger(), why three
    is also printing at the last,

ANSWER : 
because os call stack

1) console.log("one"); execute
2) console.log("two"); execute
3) next(); goes to stack, then next line will execute
   after " app.use(logger) "". when code inside it gets over
   which is get request in this case

   next(); will come out of stack;
4)console.log("three") ; execute

*/