const Express = require('express')

const {
    getDevice,
    createDevice,
    deleteDevice
} = require('../controllers/deviceControllers')


const router = Express.Router()

//GET all devices

//GeT single devices
router.get('/:l_name', getDevice)

//POST devices
router.post('/', createDevice)

//DELETE devices
router.delete('/:l_name', deleteDevice)

module.exports = router