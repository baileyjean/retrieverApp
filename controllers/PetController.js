const { Pet } = require('../models')
const middleware = require('../middleware')

const AddPet = async (req, res) => {
  try {
    const pet = await Pet.create(req.body)
    res.send(pet)
  } catch (error) {
    throw error
  }
}

module.exports = {
  AddPet
}
