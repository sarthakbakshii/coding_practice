const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

const welcomeEmail = require("./welcomeEmail")
 
function userRegister() {
 

    // eventEmitter.emit("user registertion");
    eventEmitter.on("user registertion", (f) =>{
        console.log("sent verition email",f.fName);
    });

    // eventEmitter.emit("user registertion");
    eventEmitter.on("user registertion",welcomeEmail);

    // eventEmitter.emit("user registertion");
    eventEmitter.on("user registertion", () =>{
        console.log("sent Admin email");
    });


 eventEmitter.emit("user registertion", { fName: "sarthak"});

}
userRegister()