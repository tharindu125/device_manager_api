const Express = require('express')

const {
    createDevice,
} = require('../controllers/deviceControllers')


const router = Express.Router()

//GET all location

//GeT single llocation

//POST location
router.post('/',createDevice)


module.exports = router