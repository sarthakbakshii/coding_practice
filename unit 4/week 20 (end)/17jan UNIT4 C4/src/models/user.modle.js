const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name : {type: String , require : true},
    email : {type: String , require : true},
    password :  {type: String , require : true},
    role : {type: String , require : true} 
},{
    timestamps : true, versionKey : false
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hashSync(this.password, 8);  //converting to hash password
  }
  next();
});

userSchema.methods.checkPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

const User = new mongoose.model("user", userSchema);
module.exports = User;