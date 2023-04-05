const Express = require('express')
const locationModel = require('../models/location')


const router = Express.Router()

router.post("/", async (req, res) => {
    try {
      const { l_name } = req.body;
      const location = await locationModel.login(l_name);
      res.status(200).json(location)
  
    } 
    catch (error) {
      res.status(400).json({error:error.message})
    }
  });

  module.exports = router