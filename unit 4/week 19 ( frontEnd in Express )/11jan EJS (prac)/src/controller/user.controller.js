const express = require("express");
const router = express.Router();

const User = require("../model/user.model")

//--------------- view controller
router.get("", async (req, res) =>{
     try {
        const user = await User.find().lean().exec();
         return res.render("user/index" , { item : user});
        
    } catch (e) {
        return res.status(500).send({error : e.message})
    }
})
router.get("/newUser", (req, res) =>{
    const user = {
        "first_name": "",
        "last_name": "",
        "age": "",
        "email": ""
    }
    return res.render("user/newUser" , { item : user});
})



// ------------- crud controller
router.get("/allUser", async (req, res) =>{
    try {
        const user = await User.find().lean().exec();
        return res.send(user)
        
    } catch (e) {
        return res.status(500).send({error : e.message})
    }

});
router.post("/addUser", async (req, res) =>{
    try {
        const user = await User.create(req.body);
        return res.send(user)
        
    } catch (e) {
        return res.status(500).send({error : e.message})
    }

});



module.exports = router;