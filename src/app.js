const express = require('express')
const app = express()
require('dotenv').config()
const db = require('../config/db')

app.use('port', process.env.PORT || 3000)

const PORT = process.env.PORT || 5555
if (!process.env.PORT) {
    console.warn("Warning: PORT environment variable is not set. Using default port 5555.")
}
console.log(`Server will run on port: ${PORT}`)

app.get('/', (req, res) => {
    res.send("Hello!")
})

// const clubRoutes = require('./controllers/clubController')
const eventsRoutes = require('./controllers/eventsController')
const loginRoutes = require('./controllers/loginController')
const imageRoutes = require("./controllers/imageController");

app.use("/api/uploadImage", imageRoutes);
// app.use('/api/clubs', clubRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/login', loginRoutes);

app.listen(PORT, () => {
    console.log(`Running at ${PORT}`)
}).on('error', (err) => {
    console.error("Error starting server:", err);
});
