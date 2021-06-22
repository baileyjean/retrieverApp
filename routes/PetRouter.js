const Router = require('express').Router()
const controller = require('../controllers/PetController')

Router.post('/', controller.AddPet)

Router.get('/findallpets', controller.GetAllPets)
Router.get('/view/:user_id', controller.GetPetByUserId)

Router.put('/:pet_id', controller.UpdatePets)

Router.delete('/:pet_id', controller.DeletePet)

//GetPetByLocation
//GetPetBySpecies

module.exports = Router
