const mongoose = require('mongoose')

const eventsSchema= new Schema({
    Title:String,
    Description:String,
    Date:Number,
    Location:String,
    Rulebook:String,
    Registered:Number,
    TeamSize:Number,
    Prize:Number,
    Deadline:Number,
    Cost:Number,
    Banner:String,
    Organizer:String,
    Form:String
})

const events = mongoose.model('events', eventsSchema)