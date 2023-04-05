const deviceModal = require('../models/device')

//GET all locations

//GET single locations
const getDevice = async (req,res) => {
    try {
        const {l_name} = req.params
        const device = await deviceModal.find({l_name})
        if (device.length == 0) throw Error("Not Found")
        res.status(200).json(device)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

//POST new location
const createDevice = async (req,res) => {
    const {l_name,s_number, d_type} = req.body
    //add doc to db
    try{
        const device = await deviceModal.create({l_name,s_number, d_type})
        res.status(200).json(device)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getDevice,
    createDevice
}