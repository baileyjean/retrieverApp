import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BrowseResultsPage = (props) => {
  const [pets, setPets] = useState([])

  const getPets = async () => {
    const res = await axios.get('')
    setPets(res.data)
  }
  useEffect(() => {
    getPets()
  }, [])
  console.log(pets)

  return (
    <div>
      <div>
        {pets.map((pet) => (
          <div>
            {pet.name}
            <img src={pet.image} />
          </div>
        ))}
      </div>
      WORKING
    </div>
  )
}

export default BrowseResultsPage
