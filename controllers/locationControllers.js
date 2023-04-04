const locationModal = require('../models/location')

//GET all locations
const getAllLocations = async (req, res) => {
    const locations = await locationModal.find({}).sort({createdAt: -1})

    res.status(200).json(locations)
}
//GET single locations

//POST new location
const createLocation = async (req,res) => {
    const {l_name, address, p_number} = req.body
    //add doc to db
    try{
        const location = await locationModal.create({l_name, address, p_number})
        res.status(200).json(location)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getAllLocations,
    createLocation
}