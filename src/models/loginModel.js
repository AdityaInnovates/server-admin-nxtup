const mongoose = require('mongoose')

const userSchema = new Schema({
    Email:String,
    Password:String
})

const login = new model('user',loginSchema)
