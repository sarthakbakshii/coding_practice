const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

var Schema = mongoose.Schema

var userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    role: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next()
  const hash = bcrypt.hashSync(this.password, 8)
  this.password = hash
  next()
})

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

var User = mongoose.model("user", userSchema)

module.exports = User
