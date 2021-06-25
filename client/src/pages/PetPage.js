import { React, useEffect, useState } from 'react'
import axios from 'axios'
import CommentCard from '../components/CommentCard'
import CommentForm from '../components/CommentForm'
import { BASE_URL } from '../globals'

const PetPage = (props) => {
  const { userID } = props
  const [comments, setComments] = useState([])
  const [pet, setPet] = useState({})
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
  }

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

  const handleChange = (e, index) => {
    let currentComments = [...comments]
    let target = currentComments[index]
    target.post = e.target.value
    setComments(currentComments)
  }

  console.log(pet)

  return (
    <div className="pet-profile">
      <div className="petprofile-imgbox">
        <img src={pet.image} alt={pet.name}/>
      </div>
      <div className="petprofile-infobox">
      <h1>{pet.name}</h1>
      <h2>{pet.age} years old</h2>
        <div className="flagbox">
          <div 
            className="show-species" 
            style={{backgroundColor:'dodgerblue'}}>
              {pet.species}
          </div>
          <div
            className="show-friendly"
            style={{
              display: `${pet.kid_friendly ? 'block' : 'none'}`,
              backgroundColor:'orangered'
            }}>
            Kid Friendly
          </div>
          <div
            className="show-friendly"
            style={{
              display: `${pet.pet_friendly ? 'block' : 'none'}`,
              backgroundColor:'limegreen'
            }}>
            Pet Friendly
          </div>
        </div>
      <div className="petprofile-descrip">{pet.description}</div>
      <div className="petprofile-infobottom">
        <div style={{display:'flex',alignItems:'center'}}>
          <h4>Adoption Fee:</h4>{' '}
          <span className="profilefee">${pet.adopt_fee}</span>
        </div>
        <div className="authcheck" style={{
          display: `${pet.owner_id === userID ? 'flex' : 'none'}`
        }}>
          <button 
            style={{backgroundColor:'gainsboro'}}>
              Edit Pet
          </button>
          <button
            style={{backgroundColor:'maroon', color:'floralwhite'}}>
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
      <button className="backtoresultsbtn" onClick={()=>{window.history.back()}}>Back to Results</button>
    </div>
  )
}
export default PetPage
