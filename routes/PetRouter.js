const Router = require('express').Router()
const controller = require('../controllers/PetController')

Router.post('/', controller.AddPet)

Router.get('/', controller.GetAllPets)
Router.get('/petowner/:user_id', controller.GetPetByUserId)
Router.get('/location/:location', controller.GetPetByLocation)
Router.get('/species/:species', controller.GetPetBySpecies)
Router.put('/:pet_id', controller.UpdatePets)
Router.delete('/:owner_id', controller.DeletePet)

module.exports = Router
