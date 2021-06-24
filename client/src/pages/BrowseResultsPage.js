import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PetCard from '../components/PetCard'
import { BASE_URL } from '../globals'

const BrowseResultsPage = (props) => {
  const [pets, setPets] = useState([])
  console.log(props)
  const getPets = async () => {
    const res = await axios.get(
      `${BASE_URL}/pets/species/${props.match.params.specie}`
    )
    console.log(res.data)
    setPets(res.data)
  }
  useEffect(() => {
    getPets()
  }, [])

  return (
    <div>
      {pets.map((pet, index) => (
        <div>
          {/* <PetCard
            name={pet.name}
            image={pet.image}
            location={pet.location}
            user_id={pet.user_id}
            pet_id={pet.pet_id}
            gender={pet.gender}
          /> */}
          <div>{pet.image}</div>
        </div>
      ))}
    </div>
  )
}

export default BrowseResultsPage
