import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import {
  Input,
  Button,
  Textarea,
  CheckboxToggle,
  Select,
  RadioGroup,
  Notification,
  RenderIf
} from 'react-rainbow-components'

const containerStyles = {
  width: 300
}

const options = [
  { value: 'reptile', label: 'Reptile' },
  { value: 'amphibian', label: 'Amphibian' },
  { value: 'bird', label: 'Bird' },
  { value: 'bug', label: 'Bug' },
  { value: 'rodent', label: 'Rodent' },
  { value: 'weasel', label: 'Weasel' },
  { value: 'canine', label: 'Canine' },
  { value: 'feline', label: 'Feline' },
  { value: 'fish', label: 'Fish' },
  { value: 'other', label: 'Other' }
]

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'unknown', label: 'Unknown' }
]

const NewPetPage = (props) => {
  const { userID, userLocation } = props
  const [name, setName] = useState('')
  const [userId, setUserID] = useState(userID)
  const [location, setLocation] = useState(userLocation)
  const [species, setSpecies] = useState('reptile')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [fee, setFee] = useState('')
  const [description, setDescription] = useState('')
  const [kidFriendly, setKidFriendly] = useState(false)
  const [petFriendly, setPetFriendly] = useState(false)
  const [img, setImg] = useState('')
  const [posted, setPosted] = useState(false)

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  console.log(name)

  console.log(props)

  const handleSpeciesChange = (e) => {
    setSpecies(e.target.value)
  }
  console.log(species)

  const handleAgeChange = (e) => {
    setAge(e.target.value)
  }
  console.log(age)

  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }
  console.log(gender)

  const togglePetFriendly = () => {
    if (petFriendly === false) {
      setPetFriendly(true)
    } else {
      setPetFriendly(false)
    }
  }
  console.log(petFriendly)

  const toggleKidFriendly = () => {
    if (kidFriendly === false) {
      setKidFriendly(true)
    } else {
      setKidFriendly(false)
    }
  }
  console.log(kidFriendly)

  console.log(fee)

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }
  console.log(description)

  const handleFeeChange = (e) => {
    setFee(e.target.value)
  }

  const handleImgChange = (e) => {
    setImg(e.target.value)
  }
  console.log(img)

  const handleSubmit = async () => {
    const res = await axios.post(`${BASE_URL}/pets`, {
      name: name,
      owner_id: userID,
      location: userLocation,
      species: species,
      age: age,
      gender: gender,
      adopt_fee: fee,
      description: description,
      kid_friendly: kidFriendly,
      pet_friendly: petFriendly,
      image: img
    })
    setPosted(true)
  }

  return (
    <div>
      <form>
        <Input
          label="What's the pet's name?"
          type="text"
          value={name}
          onChange={handleNameChange}
          maxLength={255}
          style={containerStyles}
          placeholder="Name"
        />
        <Select
          label="What kind of animal are they?"
          options={options}
          style={containerStyles}
          onChange={handleSpeciesChange}
        />
        <Input
          label="How old are they?"
          type="number"
          value={age}
          onChange={handleAgeChange}
          maxLength={255}
          style={containerStyles}
          placeholder="Age"
        />
        <RadioGroup
          options={genderOptions}
          labelAlignment="center"
          value={gender}
          onChange={handleGenderChange}
          label="What's their gender?"
          orientation="horizontal"
        />
        <CheckboxToggle
          label="Are they pet friendly?"
          value={petFriendly}
          onClick={togglePetFriendly}
        />
        <CheckboxToggle
          label="Are they kid friendly?"
          value={kidFriendly}
          onClick={toggleKidFriendly}
        />
        <Input
          type="number"
          label="Adoption Fee"
          value={fee}
          onChange={handleFeeChange}
          maxLength={255}
          placeholder="$0.00"
          style={containerStyles}
        />
        <Textarea
          type="text"
          value={description}
          row={4}
          label="Tell us about them!"
          placeholder="Description"
          onChange={handleDescriptionChange}
          style={{ width: 500 }}
        />
        <Input
          type="url"
          label="Profile Picture"
          value={img}
          onChange={handleImgChange}
          maxLength={255}
          placeholder="Image Link"
          style={containerStyles}
        />
        <Button label="Submit" onClick={handleSubmit} />
        <RenderIf isTrue={posted}>
          <div>
            <Notification
              title="Pet succesfully posted!"
              description="Close this notification to return to the home screen."
              // hideCloseButton={true}
              onRequestClose={() => {
                props.history.push(`/home/${userID}`)
              }}
              icon="success"
            />
          </div>
        </RenderIf>
      </form>
    </div>
  )
}

export default NewPetPage
