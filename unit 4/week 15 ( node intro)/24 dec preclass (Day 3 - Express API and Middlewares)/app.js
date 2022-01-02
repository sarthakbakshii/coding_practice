const express = require('express');
const app = express();

// get :-retreive a list of something or a single item 
// post :- save something on the server on the db
// put / patch :- update an item, put replace the item and patch appends to it 
// delete :- delete 

// ----- middlewarre
// app.use(logger)
// ------- inbuit logger 
app.use(express.json())

// --------------- here we are writing route
app.get("/", (req,res) => {
    req.send("home page get request ");
    // console.log("home page get request ")
});
//  home route = "/"


app.post("/", (req,res) => {
    console.log("req.body : ", req.body);
    console.log("home page post request");
})

/* now when we run http://localhost:1234/  on postman as post

output = 
// listening on port 1234
// req.body :  undefined
// home page post request

so to pass information on post req we use middleware
*/

//  middleware to parse request body
//  ex :
/*
function logger(req,res,next) {   // now it is not a middleware becoz we are not using it so on line upword we will use it
    console.log("logging before");
    next();   // ---- not a return statement
     console.log("logging after");
}
*/
app.listen(1234, () => console.log('listening on port 1234'))