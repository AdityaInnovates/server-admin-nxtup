const express  = require('express')
const app = express()
require('dotenv').config()

app.get('/',(req,res)=>{
    res.send("Hello!")
})

const PORT = process.env.PORT||5555
console.log(process.env.PORT)
app.listen(PORT,()=>{
    console.log(`Running at ${PORT}`)
})

const clubRoutes = require('./controllers/clubController')
const eventsRoutes = require('./controllers/eventsController')
const loginRoutes = require('./controllers/loginController')
const imageRoutes = require("./src/routes/imageRoute.js");


app.use("/api/uploadImage", imageRoutes);
app.use('/clubs',clubRoutes)
app.use('/events',eventsRoutes)
app.use('/login',loginRoutes)