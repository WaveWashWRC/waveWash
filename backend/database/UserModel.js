const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String
    },
    emailId: {
        type: String,
        required: true,
        unique:true
    },
    location: {
        pincode: Number,
        state: String,
        city: String,
        address: String,
        landmark: String
    }

});
const user = mongoose.model('User', userSchema)
module.exports = user