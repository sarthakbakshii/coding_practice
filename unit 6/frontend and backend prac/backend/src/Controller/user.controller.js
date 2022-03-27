const express = require("express");
const TestUSer = require("../Modles/user.modle");
const router = express.Router();


router.get("/", async ( req ,res) => {
    try {
        const user = await TestUSer.find().lean().exec();

        return res.status(200).send({ message : "getting user schema", user})

    } catch (err) {
        res.status(500).send({error : err.message})
    }
})
router.post("/", async ( req , res ) =>{
    try {
        const user = await TestUSer.create(req.body);
        return res.status(200).send({ message : "getting user schema", user})

    } catch (err) {
        res.status(500).send({error : err.message})
    }
}) 



module.exports = router;
