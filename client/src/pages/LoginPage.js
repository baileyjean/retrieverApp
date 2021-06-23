import React, { useState } from 'react'
import { Input, Button, StrongPasswordInput } from 'react-rainbow-components'
import axios from 'axios'
import { BASE_URL } from '../globals.js'

const containerStyles = {
  width: 350
}

const LoginPage = (props) => {
  const { history, setLogIn, userID, setUserID, setUserLocation } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, {
        email: email,
        password: password
      })
      setUserID(res.data.user.id)
      setUserLocation(res.data.user.location)
      localStorage.setItem('token', res.data.token)
      setLogIn(true)
      console.log(userID)
      const locationRes = await axios.get(`${BASE_URL}/users/${userID}`)
      setUserLocation(locationRes.data.location)
      history.push(`/home/${userID}`)
    } catch (e) {
      alert(e.message)
    }
  }
  console.log(userID)

  const handleSignUp = () => {
    history.push('/sign-up')
  }

  return (
    <div>
      <form>
        <Input
          label="Email"
          type="email"
          rows={1}
          value={email}
          onChange={handleEmailChange}
          maxLength={255}
          style={containerStyles}
        />
        <Input
          type="password"
          label="Password"
          type="password"
          onChange={handlePasswordChange}
          placeholder="Password"
          style={containerStyles}
        />
        <div>
          <Button label="Sign Up" variant="border" onClick={handleSignUp} />
          <Button label="Log In" variant="border" onClick={handleLogin} />
        </div>
      </form>
    </div>
  )
}

export default LoginPage
