const mongoose = require('mongoose')

const HotelSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model("StudentsList", HotelSchema)