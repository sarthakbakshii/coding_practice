const app = require("./index");
const connect = require("./config/db")

app.listen( 2345, async () =>{
    try {
        await connect()
        console.log("working on port 2345")
    } catch (e) {
        console.log("server not working", e)
    }
})