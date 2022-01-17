/*       W O R K  - F L O W     of register

# we willmake a middleware for usermodel , in which we will 
hash the passwaord before saving it to modle

# for haqshing we will use bcrypt.js

   npm install bcryptjs
   const bcrypt = require('bcryptjs');

stackoverflow : how to hash password in userSchema.pre("save)"

   userSchema.pre("save", async function (next) {
        if (this.isModified("password")) {
            this.password = await bcrypt.hashSync(this.password, 8);  //converting to hash password
        }
        next();
    });

==============================================================================================
      W O R K  - F L O W     of login
# for checking that if current password is equal to the password in db
  we will create a protortype function this time 

    when login, if user exist, we need to know if password matches or not
so we will not create a middleware this time we will make a prototype to
compare the password

documentation : userSchema.methods.checkPassword = function(password){
  return bcrypt.compareSync( password, this.password);
}
*/



const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },{
      timestamps: true, versionKey : false
  }
)
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password =  bcrypt.hashSync(this.password, 8);  //converting to hash password
  }
  next();
});

userSchema.methods.checkPassword = function (password) {
    console.log("user modle")
  return bcrypt.compareSync(password, this.password);
};


const User = new mongoose.model("user_assigiment",userSchema);
module.exports = User