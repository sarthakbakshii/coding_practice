const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
    title: { type: String, required: true },
    content: { type: String, required: true, unique: true },
    creater: { type: mongoose.Schema.Types.ObjectId ,
               ref : "user_assigiment",
            required : true }
  },{
      timestamps: true, versionKey : false
  }
)

const Post = new mongoose.model("post_assigiment",productSchema);
module.exports = Post