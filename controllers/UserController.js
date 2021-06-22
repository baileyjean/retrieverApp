const { User } = require('../models')
const middleware = require('../middleware')

const CreateUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.send(user)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    await Users.destroy({ where: { id: userId } })
    res.send({ message: `Furrrr Well${userId}` })
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.pet_id)
    let updatedUser = await Users.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateUser,
  //GetUserById
  UpdateUser,
  DeleteUser
}
