const express = require("express");
const app = express();

app.use(express.json())

const teacherController = require("./Controller/teacher.controller");
const adminController = require("./Controller/admin.controller");
const classesController = require("./Controller/classes.controller");
const loginController = require("./Controller/login.controller")

app.use("/teacher" , teacherController)
app.use("/admin"   , adminController)
app.use("/classes"   , classesController)
app.use("/login" , loginController)

module.exports = app; 