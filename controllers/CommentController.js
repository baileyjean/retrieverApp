const { Comment, User } = require('../models')

const AddComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const GetAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    await Comment.destroy({ where: { id: commentId } })
    res.send({ message: `Furrrr Well, Opinions` })
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    let updatedComment = await Comment.update(req.body, {
      where: { id: commentId },
      returning: true
    })
    res.send(updatedComment)
  } catch (error) {
    throw error
  }
}

const GetCommentByUserId = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.user_id)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const GetCommentByPetId = async (req, res) => {
  try {
    let petId = parseInt(req.params.pet_id)
    const comments = await Comment.findAll({
      where: { pet_id: petId },
      include: [{ model: User, attributes: ['name'] }]
    })
    res.send(comments)
  } catch (error) {
    throw error
  }
}

module.exports = {
  AddComment,
  GetAllComments,
  DeleteComment,
  UpdateComment,
  GetCommentByUserId,
  GetCommentByPetId
}