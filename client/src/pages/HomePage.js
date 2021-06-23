import axios from 'axios'
import React, { useState } from 'react'
import { CarouselImage, CarouselCard } from 'react-rainbow-components'
import PetCard from '../components/PetCard'

const HomePage = (props) => {
  const [localPets, setLocalPets] = useState([])

  const carouselContainerStyles = {
    width: 1100,
    height: 700
  }

  const getLocalPets = async () => {
    const res = await axios.get('')
    setLocalPets(res.data)
  }

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
      <CarouselCard
        style={carouselContainerStyles}
        className="rainbow-align-content_center rainbow-m_auto"
        id="carousel-3"
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
            href={`/pet-profile/{:pet_id}`}
          />
        ))}
      </CarouselCard>
    </div>
  )
}

export default HomePage
