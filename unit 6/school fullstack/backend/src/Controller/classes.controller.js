const express = require("express");
const Classes = require("../Modle/classes.modle");
const router = express.Router();

router.get("/" , async (req, res) =>{
    try {

        const classes = await Classes.find().lean().exec()
        return res.status(200).send(classes)
        
    } catch (e) {

        console.log({ error : e.message })
        return res.status(500).send({ error : e.message })
    }
});

router.post("/" , async (req, res) =>{
    try {
         console.log(req.body)
        const classes = await Classes.create(req.body)
        return res.status(200).send(classes)
        
    } catch (e) {

        console.log({ error : e.message })
        return res.status(500).send({ error : e.message })
    }
});



module.exports = router