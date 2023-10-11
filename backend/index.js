const express = require('express');
const dotenv = require("dotenv")
const mongoose = require('mongoose')
const students = require('./route/students')



const app = express()
dotenv.config()

var cors = require('cors');
app.use(cors());
 
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('connect to mongoDB ')
    } catch {
        throw error
    }
}

app.use(express.json())

app.use('/students', students)

app.listen(4000, () => {
    connect()
    console.log('connected to port 4000')
    
})

