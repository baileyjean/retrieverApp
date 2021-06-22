import React, { useState } from 'react'
import { Textarea, Button, StrongPasswordInput } from 'react-rainbow-components'

const containerStyles = {
  width: 350
}

const LoginPage = (props) => {
  const { history, setLogIn, userID, setUserID } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  console.log(email)

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  console.log(password)

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      // await auth
      // let userID = /* whatever needs to go here to get the id from backend */
      setLogIn(true)
      history.push(`/home/${userID}`)
    } catch (e) {
      alert(e.message)
    }
  }

  const handleSignUp = () => {
    history.push('/sign-up')
  }

  return (
    <div>
      <form>
        {/* <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        /> */}
        <Textarea
          label="Email"
          rows={1}
          value={email}
          onChange={handleEmailChange}
          maxLength={255}
          placeholder="Email"
          style={containerStyles}
        />
        <StrongPasswordInput
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
