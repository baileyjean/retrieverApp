import { React, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { Textarea } from 'react-rainbow-components'
const containerStyles = {
  width: 500
}
const CommentCard = (props) => {
  const [editing, setEditing] = useState(false)

  const editComment = () => {
    if (editing) {
      setEditing(false)
    } else {
      setEditing(true)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`${BASE_URL}/comments/${props.id}`, {
      user_id: props.user_id,
      pet_id: props.pet_id,
      post: props.text
    })
    editComment()
  }

  if (editing) {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form onSubmit={handleSubmit}>
            <Textarea
              type="text"
              value={props.text}
              onChange={(e) => props.handleChange(e, props.index)}
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
        value={props.text}
        rows={3}
        readOnly={true}
        className="comment"
        style={containerStyles}
      />
      {/* conditional rendering (if comment user id = user id)*/}
      <div
        style={{
          display: `${props.user_id === props.userID ? 'flex' : 'none'}`
        }}
      >
        <button onClick={editComment}>Edit</button>
        <button onClick={() => props.handleDelete(props.id)}>delete</button>
      </div>
    </div>
  )
}
export default CommentCard
