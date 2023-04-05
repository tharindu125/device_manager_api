const Express = require('express')

const {
    getAllLocations,
    getLocation,
    createLocation,
} = require('../controllers/locationControllers')


const router = Express.Router()

//GET all location
router.get('/', getAllLocations)

//GeT single llocation
router.get('/:l_name', getLocation)

//POST location
router.post('/', createLocation)


module.exports = router