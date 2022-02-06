const User = require("../models/user.model")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWT_SECRET_KEY, {
    expiresIn: 60 * 60 * 5,
  })
}

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email })

    if (user) 
    return res.status(400).send({ message: "User already Exists" })

    user = await User.create(req.body)


    const token = newToken(user)

    return res.status(201).send({ user, token })
  } catch (error) {
    console.log(error.message)
    res.status(500).send(error.message)
  }
}

const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email })

    if (!user) return res.status(400).send({ message: "User not Exists" })

    const match = user.checkPassword(req.body.password)

    if(!match) 
    return res.status(400).send({ message: "Password is incorrect" })

    const token = newToken(user)
    

    return res.status(200).send({ user, token})
  } catch (error) {
    console.log(error.message)
    res.status(500).send(error.message)
  }
}

module.exports = { register, login, newToken }
