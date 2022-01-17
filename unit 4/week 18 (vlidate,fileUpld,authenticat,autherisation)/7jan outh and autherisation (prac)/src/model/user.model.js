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


/*   when login, if user exist, we need to know if password matches or not
so we will not create a middleware this time we will make a prototype to
compare the password
*/
const mongoose  = require("mongoose");
const bcrypt = require("bcryptjs");

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

userSchema.pre('save',  function (next) {
      console.log('just before saving')

       if( ! this.isModified("password"))   return next();
        
      const hash = bcrypt.hashSync(this.password, 8);  //------- encrytp and give new password
      this.password = hash;
      next()
});
/*   when login, if user exist, we need to know if password matches or not
so we will not create a middleware this time we will make a prototype to
compare the password
*/
// userSchema.methods.checkPassword = function(password){
//       const match = bcrypt.compareSync(password, this.password);
//       return match;
// }
userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
//  as ita prototype of userSchema no need to export it , just directly call it anywhere


const User = new mongoose.model("user",userSchema);
module.exports = User