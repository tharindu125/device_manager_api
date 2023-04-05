const Express = require('express')

const {
    getDevice,
    createDevice
} = require('../controllers/deviceControllers')


const router = Express.Router()

//GET all location

//GeT single llocation
router.get('/:l_name', getDevice)

//POST location
router.post('/', createDevice)


module.exports = router