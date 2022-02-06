const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    student_code  : {type: String , require : true},
    batch  : {type: String , require : true},
    current_status  :  {type: String , require : false, default : "active"},
},{
    timestamps : true, versionKey : false
});

const Student = new mongoose.model("student", studentSchema);
module.exports = Student;