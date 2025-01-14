const mongoose = require("mongoose");

const eventsSchema= new mongoose.Schema({
    Title:String,
    Description:String,
    Date:Number,
    Time:String,
    Location:String,
    Rulebook:String,
    Registered:Number,
    TeamSize:Number,
    Prize:Number,
    Deadline:Number,
    Cost:Number,
    Banner:String,
    Organizer:String,
    Form:Object
})

const events = mongoose.model('events', eventsSchema)
module.exports = events
