const Router = require('express').Router()

const AuthRouter = require('./AuthRouter')
const UserRouter = require('./UserRouter')
const PetRouter = require('./PetRouter')
const CommentRouter = require('./CommentRouter')

Router.use('/auth', AuthRouter)
Router.use('/users', UserRouter)
Router.use('/pets', PetRouter)
Router.use('/comments', CommentRouter)

module.exports = Router