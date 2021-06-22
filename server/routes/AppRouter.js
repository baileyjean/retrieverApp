const Router = require('express').Router()

// require 
const AuthRouter = require('./AuthRouter')

// establish base routes for all the subroutes - EX: pet router uses /pets
Router.use('/auth', AuthRouter)

module.exports = Router