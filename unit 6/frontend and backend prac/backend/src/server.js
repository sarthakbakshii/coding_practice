const app = require("./index");
const connect = require("./Config/db")

app.listen("2345", async () =>{

    try {
          await  connect();
          console.log("running on port 2345")
        
    } catch (e) {
        console.log("connection error", e)
    }
  
})