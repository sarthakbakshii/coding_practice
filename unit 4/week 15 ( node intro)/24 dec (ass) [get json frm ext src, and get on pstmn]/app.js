const express = require("express");
const app = express();

const api_data = require("./MOCK_DATA.json");

// app.use(express.json())

app.listen( 2345,() => {
    console.log("post 2345 running ")
})

app.get("/" ,logger(api_data) , (req,res) => {

    console.log(req.dataB);
    return res.send(req.dataB);
    
});

function logger(data) {
    return (req,res,next) => {req.dataB = data
    next();
    }
}