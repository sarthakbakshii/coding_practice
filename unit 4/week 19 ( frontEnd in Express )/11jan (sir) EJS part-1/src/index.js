const express = require("express");

const userController = require("./controllers/user.controller");

const app = express();

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.set("view engine", "ejs"); // root directory for views views/
app.use(express.static("public"));

app.use("/users", userController);

module.exports = app;
