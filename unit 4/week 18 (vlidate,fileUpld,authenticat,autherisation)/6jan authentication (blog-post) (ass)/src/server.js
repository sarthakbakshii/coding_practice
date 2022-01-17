const connect = require("./config/db")
const app = require("./index");

app.listen( 2345, async (req, res)=>{
    try {
        await connect();
        console.log("running on port 2345")
    } catch (e) {
        console.log(e.message)
    }
})
