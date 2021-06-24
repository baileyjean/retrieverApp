import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CarouselImage, CarouselCard } from 'react-rainbow-components'
import { BASE_URL } from '../globals'
const HomePage = (props) => {
  const { userID, userLocation, setUserLocation, history } = props
  const [localPets, setLocalPets] = useState([])
  const carouselContainerStyles = {
    width: '60vw',
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
      <div style={{ marginTop: '15vh' }}>
        rad little welcome/intro message, info about the app above carousel
      </div>
      <div className="carousel">
        <CarouselCard
          style={carouselContainerStyles}
          className="rainbow-align-content_center rainbow-m_auto"
          id="carousel-3"
          scrollDuration={4}
        >
          {localPets.map((pet, index) => (
            <span
              onClick={() => {
                history.push(`/pet-profile/${pet.id}`)
              }}
              style={{ width: '100vw', cursor: 'pointer' }}
              key={index}
            >
              <CarouselImage
                src={pet.image}
                header={pet.name}
                className="capitalize"
                description={`${pet.species} |  ${pet.age} years old | ${pet.gender}`}
                assistiveText="Second card accessible description."
                // href={`/pet-profile/${pet.id}`}
                style={{ width: '60vw' }}
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
