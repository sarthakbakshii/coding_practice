const mongoose  = require("mongoose");
const bcrypt = require("bcryptjs");
// npm install bcrypt

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
/* NOTE :- there are two ways of creating user

1) user = User.create(req.body) 
i.e, directly create the user

2) user = new User();     "create object"
user.email = "sdfgefgv";  "put the value"
user.save()               "save the object"

*/

// HOOK : pre == before,,
// before you save the document we 
// want to do something with it

// (4) we will hash password for user (encrypt)
// this will act as a middleware
userSchema.pre("save", function(next){
    // either we are creating a user or we are updating a user

    // ----- check if pass is modified or not
    if( ! this.isModified("password")){
        return next();
    }

    bcrypt.hash( this.password, 8, function(err, hash) {
        // -- after completng the hashing
        if(err) {   //--- if there is an error
            return next(err)   //----go on next with error
        } //--- if no error,
        this.password = hash  //--- hassh the password
        return next()  // and return to next
    });
})


const User = new mongoose.model("user",userSchema);
module.exports = User