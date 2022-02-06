const mongoose = require("mongoose");

const submitionSchema = new mongoose.Schema({

    evaluation_id : {type: mongoose.Schema.Types.ObjectId, ref: "evaluation" , require : true},
    answered_by   : {type: mongoose.Schema.Types.ObjectId, ref: "user" , require : true},
    status        : {type: String , require : true, default: "pending"}, 
    submission_time : {type: Date , require : true},
    score         : {type: Number , require : true},
    assessed_by   : {type: mongoose.Schema.Types.ObjectId, ref: "user" , require : true},
     
},{
    timestamps : true, versionKey : false
});

const Submition = new mongoose.model("submition", submitionSchema);
module.exports = Submition;



// evaluation_id => objectId (evaluations collection), required: true
// answered_by => objectId (students collection), required: true
// status => string, required: true, default: "pending" ( Please Note :- other possible values are "submitted" or "partially_submitted" or "late")
// submission_time => Date, required: true,
// score => Number, required: false
// assessed_by => objectId (users collection), required: false
// submission_link => string, required: true ( Please Note :- this will be a file which will be submitted by the student )
// timestamps 