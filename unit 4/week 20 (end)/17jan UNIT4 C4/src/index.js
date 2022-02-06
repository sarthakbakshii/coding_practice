const express = require("express");
const app = express();

const registerControler = require("./controllers/register.controler");
const userControler = require("./controllers/user.controler")
const loginController = require("./controllers/login.controler");
const evaluationControler = require("./controllers/eval.controler")
const submitionControler = require("./controllers/submition.controller")
const onTimeSubCOntroler = require("./controllers/onTimeSubmition.controler")

app.use(express.json());
app.use("/user",userControler)
app.use("/register",registerControler)
app.use("/login",loginController)
app.use("/evaluations",evaluationControler)
app.use("/submissions",submitionControler);
app.use("/ontimesubmit",onTimeSubCOntroler)

module.exports = app;


