import React, { useState } from 'react'
import { Input, Button } from 'react-rainbow-components'
import axios from 'axios'
import { BASE_URL } from '../globals.js'
const containerStyles = {
  width: 350,
}
const LoginPage = (props) => {
  const { history, setLogIn, setUserID } = props
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
      localStorage.setItem('token', res.data.token)
      setLogIn(true)
      history.push(`/home/${res.data.user.id}`)
    } catch (e) {
      alert(e.message)
    }
  }
  const handleSignUp = () => {
    history.push('/sign-up')
  }
  return (
    <div className="loginpage">
      <div className="glorious-introduction">
      <span style={{fontWeight:'bolder',color:'goldenrod',textTransform:'uppercase',letterSpacing:'0.2em'}}>Retriever</span> was designed with the ideas that animals come first. We at Retriever believe that the perfect fit for both animals and owners is quintessential for harmony. However... We do understand that sometimes this doesn’t always work out on either end.
      <p style={{fontStyle:'italic',fontSize:'1.5em'}}>That's where we come in.</p> 
      We provide an easy, comfortable space for animal-lovers everywhere to post a pet in need of rescue, or to <span style={{letterSpacing:'0.1em',fontStyle:'italic',fontWeight:'bold',color:'goldenrod'}}>retrieve</span> the match that will create a forever-bond. 
      <form>
        <Input
          type="email"
          rows={1}
          value={email}
          onChange={handleEmailChange}
          maxLength={255}
          placeholder="Email"
          style={containerStyles}
        />
        <p/>
        <Input
          type="password"
          onChange={handlePasswordChange}
          placeholder="Password"
          style={containerStyles}
        />
        <div style={{marginTop:'20px'}}>
          <Button label="Sign Up" variant="border" onClick={handleSignUp} style={{marginRight:'50px',backgroundColor:'white'}} />
          <Button label="Log In" variant="border" onClick={handleLogin} style={{backgroundColor:'white'}}/>
        </div>
        </form>
        </div>
    </div>
  )
}
export default LoginPage
