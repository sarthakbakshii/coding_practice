const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = express.Router()

/*----------------- REST CRUD for users

post     /users       => create a user
get      /users       => get all users
get      /users/:id   => get a single user
patch     /users/:id   => update a single user
delete   /user/:id    => delete a single user
*/
// in router, express alreaddy gets /users,
// so no need of writing it

const User = require("../models/user.model")

// ------------- get /users => get all users

router.get( "", async (req,res) => {

    try {                  // v----- User model is not defined
        const users = await User.find().lean().exec();
        return res.send(users)
    } catch (err) {
        return res.status(500).json({error : err.message });
    } 
});

// -------------post /users => create a user

router.post( "", async (req , res) => {
    
    try {                // v----- User model is not defined
        const user = await User.create(req.body);
        return res.status(201).send(user)
    } catch (err) {
        return res.status(500).json({ error : err.message });
    }
} );

// ------------- get /users/:id => get a single user
router.get( "/:id" , async (req,res) => {
    try {
        const user = await User.findById( req.params.id)
                                .lean().exec();
        return res.send(user)
    } catch (err) {
        return res.status(500).json({ error : err.message})
    }
})

// ------------- patch /users/:id => update a single user
router.patch( "/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate( req.params.id, req.body, {new : true})
                                .lean().exec();
        // without {new : true} it will uddate data but gives back old data only
        return res.status(201).send(user);
    } catch (e) {
        return res.status(500).json({ error : e.message})
    }
})

// ------------delete /user/:id => delete a single user
router.delete( "/:id" , async (req, res) => {
    try{
        const user = await User.findByIdAndDelete( req.params.id)
                                .lean().exec()
        return res.status(200).send(user)
    } catch(e){
        return self.status(500).json( {error : e.message})
    }
})

module.exports = router;