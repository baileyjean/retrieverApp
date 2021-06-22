const Router = require('express').Router()

const AuthRouter = require('./AuthRouter')
const PetRouter = require('./PetRouter')
const CommentRouter = require('./CommentRouter')

Router.use('/auth', AuthRouter)
Router.use('/pets', PetRouter)
Router.use('/comments', CommentRouter)

module.exports = Router