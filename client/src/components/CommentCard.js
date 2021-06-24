import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { Textarea } from 'react-rainbow-components'

const containerStyles = {
  width: 500
}

const CommentCard = (props) => {
  const [commentText, setCommentText] = useState(props.text)
  const [editing, setEditing] = useState(false)

  const editComment = () => {
    if (editing) {
      setEditing(false)
    } else {
      setEditing(true)
    }
  }

  const handleChange = (e) => {
    setCommentText(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`${BASE_URL}/comments/${props.id}`, {
      user_id: props.user_id,
      pet_id: props.pet_id,
      post: commentText
    })
    editComment()
  }

  const handleDelete = async () => {
    await axios.delete(`${BASE_URL}/comments/${props.id}`)
    props.getComments()
  }

  if (editing) {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form onSubmit={handleSubmit}>
            <Textarea
              type="text"
              value={commentText}
              onChange={handleChange}
              rows={3}
              style={containerStyles}
              className="no-margain"
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Textarea
        type="text"
        value={commentText}
        rows={3}
        readOnly={true}
        className="comment"
        style={containerStyles}
      />
      {/* conditional rendering (if comment user id = user id)*/}
      <button onClick={editComment}>Edit</button>
      <button onClick={handleDelete}>delete</button>
    </div>
  )
}

export default CommentCard
