const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config();


const app = express();

mongoose.connect(process.env.MONGO_URL).then(()=> {
    console.log("Connected to MongoDB")
    
}).catch((err) => {
    console.log("Error connecting to MongoDB", err)
});

app.listen(1600, ()=> {
    console.log("Server is running on port 1600")
})