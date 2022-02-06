const express = require("express");
const router = express.Router();
const Evaluation = require("../models/evaluation.modle")
const autherize = require("../middlewares/autherization")

router.get( "", autherize,
async(req, res) =>{
    try {
        // ---- checking if user is admin or teacher, only then will go in
        if(req.user.role !== "admin" || req.user.role !== teacher){
            return res.send({  message : "you must have teacher or admin to enter this route "} )
        }
        // ---- basicly authenticate midddle ware lite
        
        const evaluation = await Evaluation.find()
                                .lean().exec()
        console.log(req.user)
        return res.send(evaluation)
        
    } catch (e) {
        return req.status(500).send({error : e.message })
    }
})

router.post( "", autherize,
async(req, res) =>{
    try {
        console.log(req.user)
        // ---- checking if user is admin or teacher, only then will go in
        if(req.user.role !== "admin" && req.user.role !== "teacher"){
            return res.send({  message : "you must have teacher or admin to enter this route "} )
        }
        // ---- basicly authenticate midddle ware lite
        console.log("line 33")
        const evaluation = await Evaluation.create({
            title : req.body.title,
            created_by : req.user._id,
            start_date : req.body.start_date,
            end_date : req.body.end_date
        })
        const userInfo = req.user
        console.log({evaluation, userInfo})
        return res.send({evaluation, userInfo})
        
    } catch (e) {
        return res.status(500).send({error : e.message })
    }
})

module.exports = router

