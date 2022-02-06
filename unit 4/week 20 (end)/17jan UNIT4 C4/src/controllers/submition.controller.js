const express = require("express");
const router = express.Router();
const Submition = require("../models/submition.model")
const Evaluation = require("../models/evaluation.modle")
const autherize = require("../middlewares/autherization")

router.get( "", autherize,
async(req, res) =>{
    try {
        
        const submition = await Submition.find()
                                .lean().exec()
        console.log(req.user)
        return res.send(submition)
        
    } catch (e) {
        return req.status(500).send({error : e.message })
    }
})

router.post( "", autherize,
async(req, res) =>{
    try {
        const eval_info = await Evaluation.findById(req.body.evaluation_id).lean().exec();
        console.log(eval_info);

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy+ '-'+ mm + '-' + dd 
        console.log(today)
        
        const submition = await Submition.create({
            evaluation_id : req.body.evaluation_id,
            answered_by   : req.user._id,
            status : req.body.status,
            assessed_by: eval_info.created_by,
            score : req.user.score,
            submission_time : today
        })
        
        
        return res.send(submition)
        
    } catch (e) {
        return res.status(500).send({error : e.message })
    }
})

module.exports = router

// evaluation_id => objectId (evaluations collection), required: true
// answered_by => objectId (students collection), required: true
// status => string, required: true, default: "pending" ( Please Note :- other possible values are "submitted" or "partially_submitted" or "late")
// submission_time => Date, required: true,
// score => Number, required: false
// assessed_by => objectId (users collection), required: false
// submission_link => string, required: true ( Please Note :- this will be a file which will be submitted by the student )
// timestamps