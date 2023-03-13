const express = require("express");
const Admin = require("../Modle/admin.modle");
const Teacher = require("../Modle/teacher.modle");
const router = express.Router();

router.get("/" , async (req, res) =>{
    try {

        const teacher = await Admin.find().lean().exec()
        return res.status(200).send(teacher)
        
    } catch (e) {

        console.log({ error : e.message })
        return res.status(500).send({ error : e.message })
    }
});

router.post("/" , async (req, res) =>{
    try {

        const teacher = await Admin.create(req.body)
        return res.status(200).send(teacher)
        
    } catch (e) {

        console.log({ error : e.message })
        return res.status(500).send({ error : e.message })
    }
});



module.exports = router