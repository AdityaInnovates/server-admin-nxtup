const express = require('express')
const app = express()
require('dotenv').config()
const db = require('../config/db')
const cors = require('cors');

app.use(cors());

app.use(express.json())

const PORT = process.env.PORT || 5555
if (!process.env.PORT) {
    console.warn("Warning: PORT environment variable is not set. Using default port 5555.")
}
console.log(`Server will run on port: ${PORT}`)

app.get('/', (req, res) => {
    res.send("Hello!")
})

// const clubRoutes = require('./controllers/clubController')
const eventsRoutes = require('./routes/eventsRoutes')
const loginRoutes = require('./routes/loginRoutes')
const imageRoutes = require("./routes/imageRoutes");

app.use("/api/uploadImage", imageRoutes);
// app.use('/api/clubs', clubRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/login', loginRoutes);

app.listen(PORT, () => {
    console.log(`Running at ${PORT}`)
}).on('error', (err) => {
    console.error("Error starting server:", err);
});
