const mongoose = require('mongoose')
const Schema = mongoose.Schema

const locationSchema = new Schema({
    l_name:{
        type:String,
        required: true
    },
    address:{
        type:String,
    },
    p_number:{
        type:String,
    },

}, {timestamps:true})

module.exports = mongoose.model('locations', locationSchema)