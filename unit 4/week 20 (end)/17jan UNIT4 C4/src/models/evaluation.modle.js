const mongoose = require("mongoose");

const evalSchema = new mongoose.Schema({
    title   : {type: String , require : true},
    created_by   : {type: mongoose.Schema.Types.ObjectId, ref: "user" , require : true},
    start_date   :  {type: Date , require : true},
    end_date     :  {type: Date , require : true},
},{
    timestamps : true, versionKey : false
});

const Evaluation = new mongoose.model("evaluation", evalSchema);
module.exports = Evaluation;