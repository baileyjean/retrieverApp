const { User } = require('../models')
const middleware = require('../middleware')

// CreateUser is handled in AuthController by the "Register" function

const GetAllUsers = async (req, res) => {
  try {
    let userlist = await User.findAll()
    res.send(userlist)
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

const GetUserById = async (req,res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let userFound = await User.findById(userId)
    res.send(userFound)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    await Users.destroy({ where: { id: userId } })
    res.send({ message: `Furrrr Well, User` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUsers,
  UpdateUser,
  GetUserById,
  DeleteUser
}