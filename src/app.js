const express  = require('express')
const app = express()
require('dotenv').config()
const db = require('../config/db')
const cors = require('cors');

app.use(cors());

app.get('/',(req,res)=>{
    res.send("Hello!")
})

app.use(express.json())

const PORT = process.env.PORT||5555
console.log(process.env.PORT)
app.listen(PORT,()=>{
    console.log(`Running at ${PORT}`)
})


// const clubRoutes = require('./routes/clubRoutes')
// const eventsRoutes = require('./routes/eventsRoutes')
const loginRoutes = require('./routes/loginRoutes')

// app.use('/clubs',clubRoutes)
// app.use('/events',eventsRoutes)
app.use('/login',loginRoutes)

