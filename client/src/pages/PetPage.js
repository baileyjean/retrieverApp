import { React, useEffect, useState } from 'react'
import axios from 'axios'
import CommentCard from '../components/CommentCard'
import CommentForm from '../components/CommentForm'
import { BASE_URL } from '../globals'

const PetPage = (props) => {
  const { userID } = props
  const [comments, setComments] = useState([])
  const [pet, setPet] = useState({})

  const getComments = async () => {
    const res = await axios.get(
      `${BASE_URL}/comments/pet/${props.match.params.pet_id}`
    )
    setComments(res.data)
  }

  const getPet = async () => {
    const res = await axios.get(
      `${BASE_URL}/pet/pet_id/${props.match.params.pet_id}`
    )
    setPet(res.data)
  }

  useEffect(() => {
    getComments()
    getPet()
  }, [])

  console.log(comments)
  console.log(userID)

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

  return (
    <div className="comment-section">
      {comments.map((comment, index) => (
        <div className="comment-center">
          <CommentCard
            key={index}
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
  )
}
export default PetPage
