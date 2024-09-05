const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express();
const pinRoute = require ("./routes/pins.routes.js")

dotenv.config();

app.use(express.json())

mongoose.connect(process.env.MONGO_URL).then(()=> {
    console.log("Connected to MongoDB")
    
}).catch((err) => {
    console.log("Error connecting to MongoDB", err)
});

app.use('/api/pins', pinRoute)

app.listen(1600, ()=> {
    console.log("Server is running on port 1600")
})