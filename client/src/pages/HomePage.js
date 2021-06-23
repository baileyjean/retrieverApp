import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CarouselImage, CarouselCard } from 'react-rainbow-components'
import PetCard from '../components/PetCard'
import { BASE_URL } from '../globals'

const HomePage = (props) => {
  const { userID, userLocation, setUserLocation } = props
  const [localPets, setLocalPets] = useState([])

  const carouselContainerStyles = {
    width: '80vw',
    height: '75vh'
  }

  const getUserLocation = async () => {
    const res = await axios.get(
      `${BASE_URL}/users/${props.match.params.user_id}`
    )
    await setUserLocation(res.data.location)
    console.log(`${BASE_URL}/users/${props.match.params.user_id}`)
    console.log(res.data.location)
  }

  const getLocalPets = async () => {
    console.log(`${BASE_URL}/pets/location/${userLocation}`)
    const res = await axios.get(`${BASE_URL}/pets/location/${userLocation}`)
    setLocalPets(res.data)
    console.log(res.data[0].image)
  }

  useEffect(async () => {
    getUserLocation()
    getLocalPets()
    console.log(userLocation)
  }, [])

  return (
    <div>
      <div onClick={() => props.history.push(`/new-pet/fwofla`)}>
        List a pet!
      </div>
      {localPets.map((pet, index) => (
        <div key={index}>
          <div>
            {pet.name} | {pet.age}years old
          </div>
          <img src={pet.image} alt="pet" />
        </div>
      ))}
      <div className="carousel">
        <CarouselCard
          style={carouselContainerStyles}
          className="rainbow-align-content_center rainbow-m_auto"
          id="carousel-3"
          scrollDuration={4}
        >
          <CarouselImage
            src="https://i.imgur.com/pmBwzJ3.jpg"
            header="First Card"
            description="First card description."
            assistiveText="First card accessible description."
            href="/pet-profile/:pet_id"
          />
          <CarouselImage
            src="https://i.imgur.com/pmBwzJ3.jpg"
            header="Second Card"
            description="Second card description."
            assistiveText="Second card accessible description."
            href="/pet-profile/:pet_id"
          />
          <CarouselImage
            src="https://i.imgur.com/pmBwzJ3.jpg"
            header="Third Card"
            description="Third card description."
            assistiveText="Third card accessible description."
            href="/pet-profile/:pet_id"
          />
          {localPets.map((pet) => (
            <CarouselImage
              src={pet.image}
              header={pet.name}
              description="Second card description."
              assistiveText="Second card accessible description."
              href={`/pet-profile/${pet.id}`}
            />
          ))}
        </CarouselCard>
      </div>
    </div>
  )
}

export default HomePage
