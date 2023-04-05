const locationModal = require('../models/location')

//GET all locations
const getAllLocations = async (req, res) => {
    const locations = await locationModal.find({}).sort({createdAt: -1})

    res.status(200).json(locations)
}
//GET single locations
const getLocation = async (req,res) => {
    try {
        const {l_name} = req.params
        const location = await locationModal.findOne({l_name})
        if (location.length == 0) throw Error("Not Found")
        res.status(200).json(location)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

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
    getLocation,
    createLocation
}