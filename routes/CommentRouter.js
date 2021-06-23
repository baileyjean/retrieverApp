const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.post('/', controller.AddComment)

Router.get('/', controller.GetAllComments)
Router.get('/user/:user_id', controller.GetCommentByUserId)
Router.get('/pet/:pet_id', controller.GetCommentByPetId)

Router.delete('/:user_id', controller.DeleteComment)

Router.put('/:user_id', controller.UpdateComment)

module.exports = Router

//GetCommentByPetId
