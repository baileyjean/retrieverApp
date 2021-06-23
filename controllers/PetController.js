const { Pet } = require('../models')

const AddPet = async (req, res) => {
  try {
    const pet = await Pet.create(req.body)
    res.send(pet)
  } catch (error) {
    throw error
  }
}

const GetAllPets = async (req, res) => {
  try {
    const pets = await Pet.findAll()
    res.send(pets)
  } catch (error) {
    throw error
  }
}

const UpdatePets = async (req, res) => {
  try {
    let petId = parseInt(req.params.pet_id)
    let updatedPet = await Pet.update(req.body, {
      where: { id: petId },
      returning: true
    })
    res.send(updatedPet)
  } catch (error) {
    throw error
  }
}

const DeletePet = async (req, res) => {
  try {
    let petId = parseInt(req.params.pet_id)
    await Pet.destroy({ 
      where: { id: petId },
      returning: true
    })
    res.send({ message: `Furrrr Well, Pet Furrrmely Known As Prince` })
  } catch (error) {
    throw error
  }
}

const GetPetByUserId = async (req, res) => {
  try {
    const pet = await Pet.findByPk(req.params.user_id)
    res.send(pet)
  } catch (error) {
    throw error
  }
}

const GetPetByLocation = async (req, res) => {
  try {
    let petLocation = parseInt(req.params.location)
    let petsByLocation = await Pet.findAll({
      where: { location: petLocation },
      returning: true
    })
    res.send(petsByLocation)
  } catch (error) {
    throw error
  }
}

const GetPetBySpecies = async (req, res) => {
  try {
    let petSpecies = req.params.species
    let petBySpecies = await Pet.findAll({
      where: { species: petSpecies },
      returning: true
    })
    res.send(petBySpecies)
  } catch (error) {
    throw error
  }
}

module.exports = {
  AddPet,
  GetAllPets,
  DeletePet,
  UpdatePets,
  GetPetByUserId,
  GetPetByLocation,
  GetPetBySpecies
}