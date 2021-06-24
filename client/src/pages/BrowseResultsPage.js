import React, { useEffect, useState } from 'react'
import PetCard from '../components/PetCard'
import { BASE_URL } from '../globals.js'
import axios from 'axios'
const BrowseResultsPage = (props) => {
  const [pets, setPets] = useState([])
  const getPets = async () => {
    const res = await axios.get(
      `${BASE_URL}/pets/species/${props.match.params.specie}`
    )
    setPets(res.data)
  }
  useEffect(() => {
    getPets()
  }, [])
  return (
    <div>
      <div>
        {pets.map((pet, index) => (
          <PetCard
            key={index}
            pet={pet}
            handleClick={() => {
              props.history.push(`/pet-profile/${pet.id}`)
            }}
          />
        ))}
      </div>
    </div>
  )
}
export default BrowseResultsPage