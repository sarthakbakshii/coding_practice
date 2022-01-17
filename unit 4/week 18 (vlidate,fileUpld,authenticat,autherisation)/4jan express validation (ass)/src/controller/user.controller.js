const express = require("express");
const router  = express.Router();
const { body, validationResult } = require('express-validator');

const User = require("../model/user.model");
// const { error } = require("console");


router.get( "", async (req, res) => {
    try {
       
        const users = await User.find().lean().exec();
        return res.send(users)
    } catch (e) {
        return res.status(500).json({ error : e.message})
    }
});

router.post( "",

body("f_name").notEmpty()
.withMessage('first name is require'),

body("l_name").notEmpty()
.withMessage('last name is require')
.custom( val => {
    const ans = val.split(" ");
    if(ans.length > 2) return Promise.reject('invalid last name');
    return true;
}),

body("email").notEmpty()
.withMessage('E mail is require')
.custom( val => {
    let check = val.indexOf("@");
    if( check == -1 ) return Promise.reject('E-mail requires @');

    check = val.indexOf("@gmail.com");
    if( check == -1 ) return Promise.reject('E-mail is nigga');
    return true;
}),

body("pincode").notEmpty()
.withMessage('pincode is require')
.isLength({ min: 8, max: 8 })
.withMessage('pincode is not 8')
.custom( val => {
    val = val.toString();
    if( val.length !== 6 ) return Promise.reject(`pincode is invalid ${val} : ${val.length} `);

    return true;
}),

body("age").notEmpty()
.withMessage('age is require')
.custom( val => {
    if( val < 100 || val > 0 ) return Promise.reject(`age is invalid ${val} `);

    return true;
}),

body("gender").notEmpty()
.withMessage('gander is require')
.custom( val => {
    if( val !== "male" || val !== "female" || val !== "LGBTQ"  ) return Promise.reject(`age is invalid ${val} `);

    return true;
}),

 async (req, res)=> {
    try {

        // --------------------------------------------------
        const errors = validationResult(req);
        if (!errors.isEmpty()) {

            const customErrorField = errors.array().map( a =>{
                return{
                    message : a.msg,
                    field : a.param,
                }
            })
        // return res.status(400).json({ errors: errors.array() });
        return res.status(400).json({ errors: customErrorField });

        }
        // --------------------------------------------------

        const user = await User.create(req.body);
        return res.send(user);
        
    } catch (e) {
        return res.status(500).json({ eroor : e.message})
    }
})

module.exports = router