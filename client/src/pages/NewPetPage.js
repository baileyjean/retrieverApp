import React, { useState } from 'react'

const NewPetPage = (props) => {
  const [name, setName] = useState('')
  const [userId, setUserId] = useState('')
  const [location, setLocation] = useState('')
  const [species, setSpecies] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [fee, setFee] = useState('')
  const [description, setDescription] = useState('')
  const [kidFriendly, setKidFriendly] = useState(false)
  const [petFriendly, setPetFriendly] = useState(false)
  const [img, setImg] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  console.log(name)

  const handleSpeciesChange = (e) => {
    setSpecies(e.target.value)
  }
  console.log(species)

  const handleAgeChange = (e) => {
    setAge(e.target.value)
  }
  console.log(age)

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

  return (
    <div>
      <form>
        <label>What's the pet's name?</label>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={handleNameChange}
        />
        <label>What kind of animal are they?</label>
        <select onChange={handleSpeciesChange}>
          <option value="reptile">Reptile</option>
          <option value="amphibian">Amphibian</option>
          <option value="bird">Bird</option>
          <option value="insect">Insect</option>
          <option value="arachnid">Arachnid</option>
          <option value="rodent">Rodent</option>
          <option value="weasel">Weasel</option>
          <option value="canine">Canine</option>
          <option value="feline">Feline</option>
          <option value="fish">Fish</option>
        </select>
        <label>How old are they?</label>
        <input
          type="number"
          value={age}
          placeholder={0}
          onChange={handleAgeChange}
        />
        <label>Are they pet friendly?</label>
        <input type="checkbox" onClick={togglePetFriendly} />
        <label>Are they kid friendly?</label>
        <input type="checkbox" onClick={toggleKidFriendly} />
        <label>What's their gender?</label>
        <select>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </form>
    </div>
  )
}

export default NewPetPage
