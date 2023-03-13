const mongoose  = require("mongoose");

const teacherSchema = mongoose.Schema(
    {
        name : {type : String , required : true},
        age : {type : Number , required : true},
        password : {type : String , required : true},
        gender: {
                    type: String,
                    enum: ["male", "female"]
                },
        classes : [ {type : mongoose.Schema.Types.ObjectId ,
                     ref : "classes" ,
                    required : true} ]
    },
    {
        timestamps: true, versionKey : false
    }
);

const Teacher = mongoose.model("teacher" , teacherSchema);

module.exports = Teacher;


