const express = require("express");
const app = express();

const userController = require("./controler/user.controller");
const loginController = require("./controler/login.controler");
const registerControler = require("./controler/register.controller");
const postController = require("./controler/post.controler");

app.use(express.json());
app.use("/users",userController )
app.use("/register", registerControler);
app.use("/login", loginController);
app.use("/post", postController)


module.exports = app