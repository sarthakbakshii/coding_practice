const mongoose = require("mongoose");
const express = require("express");
const Teacher = require("../Modle/teacher.modle");
const router = express.Router();

router.get("/" , async (req, res) =>{
    try {

        const teacher = await Teacher.find()
                        .populate({ 
                            path : "classes",
                            select : { grade : 1 ,section : 1 , subject : 1}
                        })
                        .lean().exec();

        // for(let i = 0 ; )
        return res.status(200).send(teacher)
        
    } catch (e) {

        console.log({ error : e.message })
        return res.status(500).send({ error : e.message })
    }
});

router.post("/" , async (req, res) =>{
    try {
        console.log(req.body)
        const teacher = await Teacher.create(req.body)
        return res.status(200).send(teacher)
        
    } catch (e) {

        console.log({ error : e.message })
        return res.status(500).send({ error : e.message })
    }
});



module.exports = router