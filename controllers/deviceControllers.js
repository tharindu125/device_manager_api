const deviceModal = require('../models/device')

//GET all locations

//GET single locations

//POST new location
const createDevice = async (req,res) => {
    const {s_number, d_type} = req.body
    //add doc to db
    try{
        const device = await deviceModal.create({s_number, d_type})
        res.status(200).json(device)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createDevice
}