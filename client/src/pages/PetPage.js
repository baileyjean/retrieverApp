import { React, useState } from 'react'
import axios from 'axios'
import CommentCard from '../components/CommentCard'

const PetPage = (props) => {
  const { postComments } = props
  const [newComment, setNewComment] = useState({})
  const [comments, setComments] = useState([])

  const editPost = () => {
    // on click to open new form page to edit post
  }
  const deletePost = () => {
    // on click pop up confirm delete
  }
  const createComment = () => {
    // post a new comment
  }

  const getComments = async () => {
    const res = await axios.get('')
    setComments(res.data)
  }

  return (
    <div className="comment-section">
      {comments.map((comment, index) => (
        <CommentCard key={index} />
      ))}
    </div>
  )
}
export default PetPage
