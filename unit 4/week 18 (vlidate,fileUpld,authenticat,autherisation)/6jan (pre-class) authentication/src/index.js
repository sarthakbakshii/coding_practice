const express = require("express")
const app = express();

const userController = require("./controller/user.controller");
const {signin , signUp} = require("./controller/auth.controller")

app.use(express.json());
app.use("/users",userController);
app.post("/signin",signin);
app.post("/signup",signUp);

module.exports = {app}
