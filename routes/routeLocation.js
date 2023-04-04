const Express = require('express')

const {
    getAllLocations,
    createLocation,
} = require('../controllers/locationControllers')


const router = Express.Router()

//GET all location
router.get('/', getAllLocations)
//GeT single llocation

//POST location
router.post('/', createLocation)


module.exports = router