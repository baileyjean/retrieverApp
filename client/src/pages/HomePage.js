import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../globals'
import { Carousel } from 'react-responsive-carousel'

const HomePage = (props) => {
  const { userID, userLocation, setUserLocation, history } = props
  const [localPets, setLocalPets] = useState([])

  const getUserLocation = async () => {
    const res = await axios.get(
      `${BASE_URL}/users/id/${props.match.params.user_id}`
    )
    setUserLocation(res.data.location)
  }
  const getLocalPets = async () => {
    const res = await axios.get(`${BASE_URL}/pets/location/${userLocation}`)
    setLocalPets(res.data)
  }
  const redirect = () => {
    userID ? history.push(`/home/${userID}`) : history.push(`/`)
  }
  useEffect(() => {
    getUserLocation()
    getLocalPets()
  }, [])

  return userID ? (
    <div className="homepage">
      <div style={{ marginTop: '15vh' }}>
        rad little welcome/intro message, info about the app above carousel
      </div>
      {localPets.map((pet) => {
        ;<div>
          <h1>pet.name</h1>
        </div>
      })}
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
