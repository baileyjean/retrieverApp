const Router = require('express').Router()
const controller = require('../controllers/PetController')

// routes here

Router.post('/', controller.AddPet)
//

module.exports = Router
