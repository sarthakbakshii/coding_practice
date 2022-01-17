const express = require("express");
const mongoose = require("mongoose");

// 3 Steps
// step 1 => actually connecting mongodb with mongoose
const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27018/web13");
};

// 2 build the schema
const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: false },
  email: { type: String, required: true },
  gender: { type: String, required: false, default: "Male" },
  age: { type: Number, required: true },
});

// 3 build the model // db.users => User => mongoose class => lot of helpful methods
const User = mongoose.model("user", userSchema); // user => users, users => User

const app = express();

app.get("/users", async (req, res) => {
  try {
    const users = await User.find().lean().exec(); // db.users => mongoose object => json object thennable
    return res.send(users);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.listen(2345, async () => {
  try {
    await connect();
    console.log("listening on port 2345");
  } catch (e) {
    console.log(e.message);
  }
});
