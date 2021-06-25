const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/', controller.GetAllUsers)
Router.get('/id/:user_id', middleware.stripToken, middleware.verifyToken, controller.GetUserById)
Router.get('/email/:email', controller.GetUserByEmail)
Router.put('/:user_id', controller.UpdateUser)
Router.delete('/:user_id', controller.DeleteUser)

module.exports = Router
