const Express = require('express')

const {
    createLocation,
} = require('../controllers/locationControllers')


const router = Express.Router()

//GET all location

//GeT single llocation

//POST location
router.post('/', createLocation)


module.exports = router