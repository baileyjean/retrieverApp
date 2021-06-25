import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import {
  Input,
  Button,
  Textarea
} from 'react-rainbow-components'

const containerStyles = {
  maxWidth: 500
}

const bioStyles = {
  width: 500
}

const ProfilePage = (props) => {
  const { userID } = props
  const [user, setUser] = useState({})
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [location, setLocation] = useState('')
  const [img, setImg] = useState('')

  const getUser = async () => {
    const res = await axios.get(`${BASE_URL}/users/id/${userID}`)
    setUser(res.data)
    console.log(user)
  }

  useEffect(() => {
    getUser()
  }, [])

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleBioChange = (e) => {
    setBio(e.target.value)
  }

  const handleImgChange = (e) => {
    setImg(e.target.value)
  }

  const handleLocationChange = (e) => {
    const re = /^[0-9\b]+$/
    if (e.target.value === '' || re.test(e.target.value)) {
      setLocation(e.target.value)
    }
  }


  const editProfile = () => {
    if (editing) {
      setEditing(false)
    } else {
      setEditing(true)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`${BASE_URL}/users/${userID}`, {
        name: name,
        location: location,
        bio: bio,
        image: img
      })
    } catch (error) {
      console.log(error)
    }
    props.history.push(`/users/id/${userID}`)
  }

//   {
//     fetch('http://localhost:5000/api/account/')
//         .then(res => res.json())
//         .then(data => {
//             this.props.history.push('/xxx');
//             this.setState({
//               isAdmin: data[index].role === "Admin"
//               isLoggedIn: userName === data[index].email && passWord === data[index].password,
//               userName: data[index].userName
//             })
//          })
// }

  const handleDelete = async (e) => {
    e.preventDefault()
    try {
      await axios.delete(`${BASE_URL}/users/${userID}`)
      props.history.push(`/`)
    } catch (error) {
      throw error
    }
  }

  if (editing) {
    return (
    <div>
    <form>
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
        type="url"
        label="Profile Picture"
        rows={1}
        value={img}
        onChange={handleImgChange}
        maxLength={255}
        placeholder="Image Link"
        style={containerStyles}
      />
        <Textarea
          label="Bio"
          rows={4}
          value={bio}
          onChange={handleBioChange}
          maxLength={255}
          placeholder="Tell us about yourself!"
          style={bioStyles}
        />
      <Input
        label="Zip Code"
        maxLength={5}
        value={location}
        onChange={handleLocationChange}
        placeholder="Zip Code"
        style={containerStyles}
      />
      <Button label="Submit" variant="border" onClick={handleSubmit} />
    </form>
  </div>
)
  }

  return(
    <div style={{marginTop:'100px'}}>
    <h2>{user.username}'s Profile</h2>
    <div><img style={{ width: '20vw' }} src={user.image} alt={user.name} /></div>
    <p>Name: {user.name}</p>
    <p>Bio: {user.bio}</p>
    <p>Location: {user.location}</p>

    <button onClick={editProfile}>Edit Profile</button>
    <button onClick={() => props.handleDelete(props.id)}>Delete Profile</button>
    </div>
    
  ) 
}
export default ProfilePage