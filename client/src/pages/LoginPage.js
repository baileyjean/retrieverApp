import React, { useState } from 'react'

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
    e.preventDefault();
    try {
      // await auth
      // let userID = /* whatever needs to go here to get the id from backend */
      setLogIn(true);
      history.push(`/home/${userID}`);
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div>
      <form>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button onClick={handleLogin}>Log In</button>
      </form>
    </div>
  )
}

export default LoginPage
