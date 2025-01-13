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
const eventsRoutes = require('./routes/eventsRoutes')
const loginRoutes = require('./routes/loginRoutes')
const imageRoutes = require("./routes/imageRoutes");
const loginRoutes = require("./routes/loginRoutes");

app.use("/api/uploadImage", imageRoutes);
// app.use('/api/clubs', clubRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/login', loginRoutes);
app.use("/login", loginRoutes);

app.listen(PORT, () => {
    console.log(`Running at ${PORT}`)
}).on('error', (err) => {
    console.error("Error starting server:", err);
});

