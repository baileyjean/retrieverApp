import React, { useReducer, useState } from 'react'
import {
  Input,
  Button,
  StrongPasswordInput,
  Textarea
} from 'react-rainbow-components'

const containerStyles = {
  width: 400
}

const bioStyles = {
  width: 500
}

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

  function getStrength() {
    const { length } = password
    if (length === 0) {
      return undefined
    }
    if (length <= 3) {
      return 'weak'
    }
    if (length > 3 && length < 8) {
      return 'average'
    }
    return 'strong'
  }

  const passwordState = getStrength()

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
          placeholder="Email"
          style={containerStyles}
        />
        <StrongPasswordInput
          label="Password"
          placeholder="Password"
          bottomHelpText="Your password must be at least 8 characters long."
          style={containerStyles}
          value={password}
          passwordState={passwordState}
          onChange={handlePasswordChange}
        />
        <Input
          type="url"
          label="Profile Picture"
          rows={1}
          value={img}
          onChange={handleImgChange}
          maxLength={255}
          placeholder="Image Link"
          style={containerStyles}
        />
        <Input
          label="Name"
          rows={1}
          value={name}
          onChange={handleNameChange}
          maxLength={255}
          placeholder="Name"
          style={containerStyles}
        />
        <Input
          label="Zip Code"
          maxLength={5}
          value={location}
          onChange={handleLocationChange}
          maxLength={255}
          placeholder="Zip Code"
          style={containerStyles}
        />
        <Textarea
          label="Bio"
          rows={4}
          value={bio}
          onChange={handleBioChange}
          maxLength={255}
          placeholder="Email"
          style={bioStyles}
        />
        <Button label="Submit" variant="border" />
      </form>
    </div>
  )
}

export default SignupPage
