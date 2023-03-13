const mongoose  = require("mongoose");

const classesSchema = mongoose.Schema(
    {
        grade : {type : Number , required : true },
        section : {type : String , required : true , enum: ["A", "B" , "C" , "D"] },
        subject : {type : String , required : true},
    },
    {
        timestamps: true, versionKey : false
    }
);

const Classes = mongoose.model("classes" , classesSchema);

module.exports = Classes;