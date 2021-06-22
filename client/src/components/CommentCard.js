import React, { useState } from 'react'
import axios from 'axios'

const CommentCard = (props) => {
  const [commentText, setCommentText] = useState(props.text)
  const [editing, setEditing] = useState(false)

  const deleteComment = () => {}

  const editComment = () => {
    setEditing(true)
  }

  const handleChange = (e) => {
    setCommentText(e.target.value)
  }

  const handleSubmit = async () => {
    await axios.put(``, {
      user_id: props.user_id,
      pet_id: props.pet_id,
      post: commentText
    })
  }

  if (editing) {
    return (
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <textarea type="text" value={commentText} onChange={handleChange} />
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div>{props.comment}</div>
      {/* conditional rendering (if comment user id = user id)*/}
      <button onClick={editComment}>Edit</button>
      <button onClick={deleteComment}>delete</button>
    </div>
  )
}

export default CommentCard
