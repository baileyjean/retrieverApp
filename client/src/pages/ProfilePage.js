import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { Input, Button, Textarea } from 'react-rainbow-components'

const ProfilePage = (props) => {
  const { userID } = props
  const [user, setUser] = useState({})
  const [editing, setEditing] = useState(false)
  const [editedUser, setEditedUser] = useState({
    name: '',
    location: '',
    bio: '',
    image: ''
  })

  const getUser = async () => {
    const res = await axios.get(`${BASE_URL}/users/id/${userID}`)
    setUser(res.data)
    setEditedUser({
      name: res.data.name,
      username: res.data.username,
      email: res.data.email,
      password: res.data.password,
      location: parseInt(res.data.location),
      bio: res.data.bio,
      image: res.data.image
    })
  }

  useEffect(() => {
    getUser()
  }, [])

  const editProfile = () => {
    if (editing) {
      setEditing(false)
    } else {
      setEditing(true)
    }
  }

  const submitEditUser = async () => {
    await axios.put(`${BASE_URL}/users/${userID}`, {
      ...editedUser
    })
    setUser({ ...editedUser })
    editProfile()
  }

  const handleNameChange = (e) => {
    setEditedUser({ ...editedUser, name: e.target.value })
  }

  const handleBioChange = (e) => {
    setEditedUser({ ...editedUser, bio: e.target.value })
  }

  const handleImageChange = (e) => {
    setEditedUser({ ...editedUser, image: e.target.value })
  }

  const handleLocationChange = (e) => {
    setEditedUser({ ...editedUser, location: parseInt(e.target.value) })
  }

  const handleDelete = async (e) => {
    try {
      props.history.push(`/`)
      await axios.delete(`${BASE_URL}/users/${userID}`)
    } catch (error) {
      throw error
    }
  }

  if (editing) {
    return (
      <div style={{
        padding: '4em',
        margin: '4em' 
      }}>
        <h2>{user.username}'s Profile</h2>
        <img style={{ width: '20vw' }} src={user.image} alt={user.name} />
        <Input
          type="url"
          label="Profile Picture"
          rows={1}
          name={'image'}
          value={editedUser.img}
          onChange={handleImageChange}
          maxLength={255}
          placeholder="Image Link"
          style={{ marginBottom: '40px', width: '25vw' }}
        />
        <p>Name:</p>
        <Input
          label="Name"
          rows={1}
          name={'name'}
          value={editedUser.name}
          onChange={handleNameChange}
          maxLength={255}
          placeholder="Name"
          style={{ marginBottom: '40px', width: '25vw' }}
        />
        <p>Bio:</p>
        <Textarea
          label="Bio"
          rows={4}
          name={'bio'}
          value={editedUser.bio}
          onChange={handleBioChange}
          maxLength={255}
          placeholder="Tell us about yourself!"
          style={{
            padding: '0.4em',
            width: '50vw',
            marginBottom: '1em',
            overflowY: 'auto'
          }}
        />
        <p>Location:</p>
        <Input
          label="Zip Code"
          maxLength={5}
          name={'location'}
          value={editedUser.location}
          onChange={handleLocationChange}
          placeholder="Zip Code"
          style={{ marginBottom: '40px', width: '25vw' }}
        />
        <Button label="Submit" variant="border" onClick={submitEditUser} />
      </div>
    )
  }

  return (
    <div style={{ 
      padding: '4em',
      margin: '4em' }}>
      <h1>{user.username}</h1>
      <div>
        <img style={{ width: '20vw' }} src={user.image} alt={user.name} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p className="petprofile-infobottom">Name: {user.name}</p>
        <p className="petprofile-infobottom">Location: {user.location}</p>
      </div>
      <p className="petprofile-descrip">{user.bio}</p>
      <div className="authcheck">
        <button onClick={editProfile} style={{ backgroundColor: 'green', margin: "1em", color: "white" }}>Edit Profile</button>
        <button onClick={() => handleDelete(user.id)} style={{ backgroundColor: 'maroon', margin: "1em", color: "white"  }}>Delete Profile</button>
      </div>
    </div>
  )
}
export default ProfilePage
