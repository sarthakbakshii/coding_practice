const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

const userControler = require("./controller/user.controller");

app.use(express.json());
app.use("/user",userControler)


module.exports = {app};