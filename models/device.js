const mongoose = require('mongoose')
const Schema = mongoose.Schema

const deviceSchema = new Schema({
    l_name:{
        type:String,
        required:(true, 'Location is required')
    },
    s_number:{
        type:String,
        required:(true, 'Pleace Enter Serial Number')
    },
    d_type:{
        type:String,
        required:(true,'Pleace Enter Device Type')
    },

})

module.exports = mongoose.model('Devices', deviceSchema)