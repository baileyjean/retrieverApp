const Router = require('express').Router()
const controller = require('../controllers/AuthController')

Router.post('/login', controller.Login)
Router.post('/register', controller.Register)
// Router.delete('/deletepet', controller.DeleteMyPet)

module.exports = Router;