const express = require('express')
const router = express.Router()
const user = require('../models/loginModel')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require('../middleware/authMiddleware')

router.post('/login', async (req,res)=>{
    try{
        const {User, Password} = req.body;
        const user = await User.findOne({
            Email:User,
        })

        
        if(!user){
            return res.status(400).json({ status: false, message: "Invalid email or password" })
        }

        const isMatch = await bcrypt.compare(Password, user.Password)
        
        
        if(!isMatch){
            return res.status(400).json({ status: false, message: "Invalid email or password" })
        }

        const token = jwt.sign({_id: user._id}, process.env.SALT)
        
        res.status(201).json({ status: true, message: "SignedIn successfully", token })
    }
    catch(err){
        res.status(err).json({
            status:false,
            message:err
        })
    }
})

module.exports = router