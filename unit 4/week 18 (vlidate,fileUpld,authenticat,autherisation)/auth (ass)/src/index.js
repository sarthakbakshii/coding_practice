const express = require("express")
const { register, login } = require("./controllers/auth.controller")
const productController = require("./controllers/product.controller")
const passport = require("./configs/passport")
const authorise = require("./middlewares/authorise")
const app = express()

app.use(express.json())

app.use("/products", productController)

passport.serializeUser(function (user, callback) {
  callback(null, user)
})

passport.deserializeUser(function (user, callback) {
  callback(null, user)
})

app.post("/register", register)
app.post("/login", login)

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
)

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
  }),
  (req, res) => {
    return res.send(req.user)
  }
)

app.get("/auth/google/failure", (req, res) => {
  return res.send("failure")
})

module.exports = app
