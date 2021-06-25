import { React, useEffect, useState } from 'react'
import axios from 'axios'
import CommentCard from '../components/CommentCard'
import CommentForm from '../components/CommentForm'
import { Textarea, Button, Input, Select } from 'react-rainbow-components'
import { BASE_URL } from '../globals'
import { AiTwotoneSecurityScan } from 'react-icons/ai'

const options = [
  { value: 'reptile', label: 'Reptile' },
  { value: 'amphibian', label: 'Amphibian' },
  { value: 'bird', label: 'Bird' },
  { value: 'arachnid', label: 'Bug' },
  { value: 'rodent', label: 'Rodent' },
  { value: 'weasel', label: 'Weasel' },
  { value: 'canine', label: 'Canine' },
  { value: 'feline', label: 'Feline' },
  { value: 'fish', label: 'Fish' },
  { value: 'other', label: 'Other' }
]

const kidOptions = [
  { value: true, label: 'Kid Friendly' },
  { value: false, label: 'Not Kid Friendly' }
]

const petOptions = [
  { value: true, label: 'Pet Friendly' },
  { value: false, label: 'Not Pet Friendly' }
]

const PetPage = (props) => {
  const { userID } = props
  const [comments, setComments] = useState([])
  const [pet, setPet] = useState({})
  const [editing, setEditing] = useState(false)
  const [editedPet, setEditedPet] = useState({
    name: '',
    owner_id: '',
    location: '',
    species: '',
    age: '',
    gender: '',
    adopt_fee: '',
    description: '',
    kid_friendly: '',
    pet_friendly: '',
    image: ''
  })
  // const [owner, setOwner] = useState('')

  const getComments = async () => {
    const res = await axios.get(
      `${BASE_URL}/comments/pet/${props.match.params.pet_id}`
    )
    setComments(res.data)
  }

  const getPet = async () => {
    const res = await axios.get(
      `${BASE_URL}/pets/pet/${props.match.params.pet_id}`
    )
    setPet(res.data)
    setEditedPet({
      name: res.data.name,
      owner_id: res.data.owner_id,
      location: res.data.location,
      species: res.data.species,
      age: parseInt(res.data.age),
      gender: res.data.gender,
      adopt_fee: res.data.adopt_fee,
      description: res.data.description,
      kid_friendly: res.data.kid_friendly,
      pet_friendly: res.data.pet_friendly,
      image: res.data.image
    })
  }

  const editPet = () => {
    if (editing) {
      setEditing(false)
    } else {
      setEditing(true)
    }
  }

  const submitEditPet = async () => {
    setEditedPet({ ...editedPet, age: parseInt(editedPet.age) })
    await axios.put(`${BASE_URL}/pets/${props.match.params.pet_id}`, {
      ...editedPet
    })
    setPet({ ...editedPet })
    editPet()
  }

  console.log(editedPet)
  // edit pet

  // delete pet

  useEffect(() => {
    getComments()
    getPet()
  }, [])

  const handleDelete = async (id) => {
    await axios.delete(`${BASE_URL}/comments/${id}`)
    let currentComments = [...comments].filter((comment) => comment.id !== id)
    setComments(currentComments)
  }

  const handlePetDelete = async () => {
    await axios.delete(`${BASE_URL}/pets/${pet.id}`)
    props.history.push(`/home/${userID}`)
  }

  const handleChange = (e, index) => {
    let currentComments = [...comments]
    let target = currentComments[index]
    target.post = e.target.value
    setComments(currentComments)
  }

  const handleNameChange = (e) => {
    setEditedPet({ ...editedPet, name: e.target.value })
  }

  const handleAgeChange = (e) => {
    setEditedPet({ ...editedPet, age: parseInt(e.target.value) })
  }

  const handleSpeciesChange = (e) => {
    setEditedPet({ ...editedPet, species: e.target.value })
  }

  const handleKidFriendlyChange = (e) => {
    setEditedPet({ ...editedPet, kid_friendly: e.target.value })
  }

  const handlePetFriendlyChange = (e) => {
    setEditedPet({ ...editedPet, pet_friendly: e.target.value })
  }

  const handleDescriptionChange = (e) => {
    setEditedPet({ ...editedPet, description: e.target.value })
  }

  const handleFeeChange = (e) => {
    setEditedPet({ ...editedPet, adopt_fee: e.target.value })
  }

  const handleImageChange = (e) => {
    setEditedPet({ ...editedPet, image: e.target.value })
  }

  if (editing) {
    return (
      <div className="pet-profile">
        <div className="petprofile-imgbox">
          <img src={pet.image} alt={pet.name} />
          <Input
            type="text"
            value={editedPet.image}
            onChange={handleImageChange}
            maxLength={255}
            style={{ marginBottom: '40px', width: '25vw' }}
          />
        </div>
        <div className="petprofile-infobox">
          <Input
            type="text"
            value={editedPet.name}
            onChange={handleNameChange}
            maxLength={255}
          />
          <Input
            type="number"
            min={0}
            value={editedPet.age}
            onChange={handleAgeChange}
            maxLength={255}
          />
          <div className="flagbox">
            <div
              className="show-species"
              style={{ backgroundColor: 'dodgerblue' }}
            >
              <Select
                options={options}
                value={editedPet.species}
                onChange={handleSpeciesChange}
              />
            </div>
            <div
              className="show-friendly"
              style={{
                backgroundColor: 'orangered'
              }}
            >
              <Select
                options={kidOptions}
                value={editedPet.kid_friendly}
                onChange={handleKidFriendlyChange}
              />
            </div>
            <div
              className="show-friendly"
              style={{
                backgroundColor: 'limegreen'
              }}
            >
              <Select
                options={petOptions}
                value={editedPet.pet_friendly}
                onChange={handlePetFriendlyChange}
              />
            </div>
          </div>
          <div
          // className="petprofile-descrip"
          >
            <Textarea
              type="text"
              value={editedPet.description}
              onChange={handleDescriptionChange}
              rows={5}
              style={{
                padding: '0.4em',
                width: '50vw',
                marginBottom: '1em',
                overflowY: 'auto'
              }}
              maxLength={255}
            />
          </div>
          <div className="petprofile-infobottom">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h4>Adoption Fee:</h4>{' '}
              <span className="profilefee">
                <Input
                  type="number"
                  min={0}
                  style={{ width: '10vw' }}
                  value={editedPet.adopt_fee}
                  onChange={handleFeeChange}
                  maxLength={255}
                />
              </span>
            </div>
            <div
              className="authcheck"
              style={{
                display: `${pet.owner_id === userID ? 'flex' : 'none'}`
              }}
            >
              <button
                onClick={editPet}
                style={{ backgroundColor: 'gainsboro' }}
              >
                Cancel
              </button>
              <button
                style={{ backgroundColor: 'maroon', color: 'floralwhite' }}
                onClick={submitEditPet}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="comments">
          {comments.map((comment, index) => (
            <div className="comment-center">
              <CommentCard
                key={`${comment.user_id} ${index}`}
                index={index}
                text={comment.post}
                user_id={comment.user_id}
                pet_id={comment.pet_id}
                userID={userID}
                id={comment.id}
                handleDelete={handleDelete}
                handleChange={handleChange}
              />
            </div>
          ))}
          <CommentForm
            userID={userID}
            petID={props.match.params.pet_id}
            getComments={getComments}
          />
        </div>
        <button
          className="backtoresultsbtn"
          onClick={() => {
            window.history.back()
          }}
        >
          Back to Results
        </button>
      </div>
    )
  }

  return (
    <div className="pet-profile">
      <div className="petprofile-imgbox">
        <img src={pet.image} alt={pet.name} />
      </div>
      <div className="petprofile-infobox">
        <h1>{pet.name}</h1>
        <h2>{pet.age} years old</h2>
        <div className="flagbox">
          <div
            className="show-species"
            style={{ backgroundColor: 'dodgerblue' }}
          >
            {pet.species}
          </div>
          <div
            className="show-friendly"
            style={{
              display: `${pet.kid_friendly ? 'block' : 'none'}`,
              backgroundColor: 'orangered'
            }}
          >
            Kid Friendly
          </div>
          <div
            className="show-friendly"
            style={{
              display: `${pet.pet_friendly ? 'block' : 'none'}`,
              backgroundColor: 'limegreen'
            }}
          >
            Pet Friendly
          </div>
        </div>
        <div className="petprofile-descrip">{pet.description}</div>
        <div className="petprofile-infobottom">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h4>Adoption Fee:</h4>{' '}
            <span className="profilefee">${pet.adopt_fee}</span>
          </div>
          <div
            className="authcheck"
            style={{
              display: `${pet.owner_id === userID ? 'flex' : 'none'}`
            }}
          >
            <button onClick={editPet} style={{ backgroundColor: 'gainsboro' }}>
              Edit Pet
            </button>
            <button
              style={{ backgroundColor: 'maroon', color: 'floralwhite' }}
              onClick={handlePetDelete}
            >
              Delete Pet
            </button>
          </div>
        </div>
      </div>
      <div className="comments">
        {comments.map((comment, index) => (
          <div className="comment-center">
            <CommentCard
              key={`${comment.user_id} ${index}`}
              index={index}
              text={comment.post}
              user_id={comment.user_id}
              pet_id={comment.pet_id}
              userID={userID}
              id={comment.id}
              handleDelete={handleDelete}
              handleChange={handleChange}
            />
          </div>
        ))}
        <CommentForm
          userID={userID}
          petID={props.match.params.pet_id}
          getComments={getComments}
        />
      </div>
      <button
        className="backtoresultsbtn"
        onClick={() => {
          window.history.back()
        }}
      >
        Back to Results
      </button>
    </div>
  )
}
export default PetPage
