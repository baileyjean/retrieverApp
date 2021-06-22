const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/findallusers', controller.GetAllUsers)
Router.put('/:user_id', controller.UpdateUser)
Router.delete('/:user_id', controller.DeleteUser)

//GetPetByLocation
//GetPetBySpecies
//GetPetByUserId

module.exports = Router
