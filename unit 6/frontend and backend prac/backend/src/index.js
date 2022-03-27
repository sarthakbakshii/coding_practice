const express = require("express");
const app = express()

const userControler = require("./Controller/user.controller")

app.use(express.json())
app.use("/user", userControler)

module.exports = app