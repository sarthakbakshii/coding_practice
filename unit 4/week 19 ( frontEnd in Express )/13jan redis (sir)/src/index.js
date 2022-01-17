const express = require("express");

const postController = require("./controllers/post.controller");

const app = express();

app.use(express.json());

app.use("/posts", postController);

module.exports = app;
