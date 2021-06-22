const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetAllUsers)
Router.get('/:user_id', controller.GetUserById)
Router.put('/:user_id', controller.UpdateUser)
Router.delete('/:user_id', controller.DeleteUser)

//GetPetByLocation
//GetPetBySpecies
//GetPetByUserId

module.exports = Router
