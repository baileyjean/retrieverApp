import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CarouselImage, CarouselCard } from 'react-rainbow-components'
import Carousel from 'react-bootstrap/Carousel'
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
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div style={{ marginTop: '15vh' }}>
        rad little welcome/intro message, info about the app above carousel
      </div>
      <div className="carousel">
        <CarouselCard
          style={carouselContainerStyles}
          className="rainbow-align-content_center rainbow-m_auto"
          id="carousel-3"
          scrollDuration={4}
          disableAutoScroll={false}
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
