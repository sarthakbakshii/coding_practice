const app = require("./index")

const conect = require("./configs/db");  

// ---------------------port listening
app.listen( 2345 , async () => {

    await conect();
    console.log("running on port 2345")
} )

// in package.json > nodemon src/server