const  connect  = require("./config/db")
const { app } = require("./index");

app.listen( 2345 , async () => {
    try {
        await connect();
        console.log("Running on port 2345")



        
    } catch (e) {
        console.log(e.message)
    }
})