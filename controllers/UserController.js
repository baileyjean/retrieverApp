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

const GetUserById = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    console.log(userId)
    let userFound = await User.findByPk(userId)
    res.send(userFound)
  } catch (error) {
    throw error
  }
}

const GetUserByEmail = async (req, res) => {
  try {
    let userEmail = req.params.email
    let userByEmail = await User.findAll({
      where: { email: userEmail },
      returning: true
    })
    res.send(userByEmail)
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

const DeleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    await User.destroy({ where: { id: userId } })
    res.send({ message: `Furrrr Well, User` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUsers,
  GetUserById,
  GetUserByEmail,
  UpdateUser,
  DeleteUser
}
