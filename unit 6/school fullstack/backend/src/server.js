const app = require("./index");
const config = require("./Config/db")

app.listen( 2345 , async () =>{
    try {
        await config();
        console.log("running on port 2345")
        
    } catch (e) {
        console.log("error on connection" , e)
    }
})