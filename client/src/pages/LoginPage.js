import React, { useState } from 'react'

const LoginPage = (props) => {
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
      </form>
    </div>
  )
}

export default LoginPage
