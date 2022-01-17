const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

/* here we are creating a middleware that say before you save 
collection through this schema, encrytp the password

userSchema.pre("save", function(next) { 
        inside this we are checking if password is modified,
        i.e, if allready hashed, then do nothing

        else hash it.
 })

 so we hash it using library bcrypt
         npm install bcrypt 
*/
userSchema.pre("save", function(next) { 
    
    console.log("line 29")

    if(!this.isModified("password")){
        return next();
    }

    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash
    console.log(hash)
    next();
    
    // if already modified or hashed do nothing;
    // else hash it

    //  copied from doc
    
    // bcrypt.hashSync( this.password, 8, function(err, hash) {
    //     // Store hash in your password DB.
    //     if(err) return next(err);

    //     this.password = hash;
    //     console.log(this.password, ": new password")
    //     next();
    // });

 });

const User = new mongoose.model("user",userSchema);
module.exports = User;