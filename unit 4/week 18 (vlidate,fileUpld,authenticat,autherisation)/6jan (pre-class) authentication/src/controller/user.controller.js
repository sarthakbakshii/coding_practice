const express = require("express");
const router = express.Router();

const User = require("../model/user.model");

router.get( "", async (req, res) =>{
    try {
        const user = await User.find().lean().exec();
      return res.send(user)
        
    } catch (e) {
        return res.send(500).send({ error_catched : e.message})
    }
})

module.exports = router;