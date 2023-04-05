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

locationSchema.statics.login = async function (l_name) {
    const location = await this.findOne({ l_name });
    if (!location) throw Error("location not found");
    return location;
};

module.exports = mongoose.model('locations', locationSchema)