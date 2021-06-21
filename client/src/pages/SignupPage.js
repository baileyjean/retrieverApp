import React, { useReducer, useState } from 'react'

const SignupPage = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [location, setLocation] = useState('')
  const [img, setImg] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  console.log(email)

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  console.log(password)

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  console.log(name)

  const handleBioChange = (e) => {
    setBio(e.target.value)
  }
  console.log(bio)

  const handleImgChange = (e) => {
    setImg(e.target.value)
  }
  console.log(img)

  const handleLocationChange = (e) => {
    const re = /^[0-9\b]+$/
    if (e.target.value === '' || re.test(e.target.value)) {
      setLocation(e.target.value)
    }
  }
  console.log(location)

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
        <label>Profile Picture</label>
        <input
          type="text"
          name="img"
          placeholder="Image Link"
          value={img}
          onChange={handleImgChange}
          required
        />
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <label>Zip Code</label>
        <input
          name="location"
          placeholder="Zip Code"
          value={location}
          onChange={handleLocationChange}
          maxLength={5}
          required
        />
        <label>Bio</label>
        <textarea
          name="name"
          placeholder="Tell us about yourself..."
          value={bio}
          onChange={handleBioChange}
          required
        />
      </form>
    </div>
  )
}

export default SignupPage
