import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
// import UserCard from '../components/UserCard'
const ProfilePage = (props) => {
  const { userID } = props
  const [pets, setPets] = useState({})
  const [user, setUser] = useState({})
  const getUser = async () => {
    const res = await axios.get(`${BASE_URL}/users/id/${userID}`)
    setUser(res.data)
    console.log(user)
  }
  console.log(userID)
  // -------- GET PETS FUNCTION SO PROFILE PAGE DISPLAYS THE OWNER'S PETS
  // const getPets = async () => {
  //   const res = await axios.get(
  //     `${BASE_URL}/pets/petowner/${props.match.params.user_id}`
  //   )
  //   setPets(res.data)
  //   const owner = await axios.get(`${BASE_URL}/${pets.owner_id}`)
  // }
  useEffect(() => {
    getUser()
  }, [])
  // -------- FOR DELETING AND UPDATING THE USER
  // const handleDelete = async (id) => {
  //   await axios.delete(`${BASE_URL}/users/${id}`)
  //   let currentComments = [...comments].filter((comment) => comment.id !== id)
  //   setComments(currentComments)
  // }
  // const handleChange = (e, index) => {
  //   let currentComments = [...comments]
  //   let target = currentComments[index]
  //   target.post = e.target.value
  //   setComments(currentComments)
  // }
  return(
    <div style={{marginTop:'100px'}}>
      <h1>{user.name}'s Profile</h1>
      {/* -------- FOR MAPPING THE OWNER'S PETS ON THE PAGE
      MAY WANT TO HAVE CONDITIONAL RENDERING SO IT HAS A DEFAULT, PLAIN PAGE WHEN THE USER DOESN'T HAVE PETS */ }
      {/* {pets.map((pet, index) => (
        <div>
          <PetCard
            name={pet.name}
            image={pet.image}
            location={pet.location}
            user_id={pet.user_id}
            pet_id={pet.pet_id}
            gender={pet.gender}
          />
        </div>
      ))} */}
    </div>
  ) 
}
export default ProfilePage