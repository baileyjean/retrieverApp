import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CarouselImage, CarouselCard } from 'react-rainbow-components'
import { BASE_URL } from '../globals'
const HomePage = (props) => {
  const { userID, userLocation, setUserLocation, history } = props
  const [localPets, setLocalPets] = useState([])
  const carouselContainerStyles = {
    width: '80vw',
    height: '75vh'
  }
  const getUserLocation = async () => {
    const res = await axios.get(
      `${BASE_URL}/users/id/${props.match.params.user_id}`
    )
    console.log(res)
    setUserLocation(res.data.location)
    console.log(`${BASE_URL}/users/id/${props.match.params.user_id}`)
    console.log(res.data.location)
  }
  const getLocalPets = async () => {
    console.log(`${BASE_URL}/pets/location/${userLocation}`)
    const res = await axios.get(`${BASE_URL}/pets/location/${userLocation}`)
    setLocalPets(res.data)
  }
  const redirect = () => {
    userID ? history.push(`/home/${userID}`) : history.push(`/`)
  }
  useEffect(async () => {
    getUserLocation()
    getLocalPets()
  }, [])
  return userID ? (
    <div>
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
            <span
              onClick={() => {
                history.push(`/pet-profile/${pet.id}`)
              }}
            >
              <CarouselImage
                src={pet.image}
                header={pet.name}
                description="Second card description."
                assistiveText="Second card accessible description."
                // href={`/pet-profile/${pet.id}`}
              />
            </span>
          ))}
        </CarouselCard>
      </div>
    </div>
  ) : (
    <div className="loading">
      <h1>Loading...</h1>
      <h4>
        If you are not redirected in 5 seconds, click{' '}
        <span
          style={{
            cursor: 'pointer',
            color: 'blue',
            fontWeight: 'bolder',
            textDecoration: 'underline'
          }}
          onClick={() => redirect()}
        >
          here
        </span>
        .
      </h4>
    </div>
  )
}
export default HomePage
