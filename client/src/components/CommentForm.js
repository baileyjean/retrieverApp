import React, { useState, useEffect } from 'react'
import { Textarea, Button } from 'react-rainbow-components'
import axios from 'axios'
import { BASE_URL } from '../globals'

const containerStyles = {
  width: 700
}

const CommentForm = (props) => {
  const { petID, userID, getComments } = props
  const [userId, setUserId] = useState(userID)
  const [petId, setPetId] = useState(petID)
  const [comment, setComment] = useState('')
  const [count, setCount] = useState(0)

  const handleSubmit = async () => {
    const res = await axios.post(`${BASE_URL}/comments`, {
      user_id: userId,
      pet_id: petId,
      post: comment
    })
    console.log('fired')
    getComments()
  }

  const handleChange = (e) => {
    setComment(e.target.value)
    setCount(e.target.value.length)
  }

  return (
    <div>
      <form
        onSubmit={() => {
          console.log('fired')
        }}
      >
        {/* <textarea value={comment} onChange={handleChange} /> */}
        <Textarea
          label="Comment"
          rows={4}
          onChange={handleChange}
          maxLength={255}
          placeholder="Comment"
          style={containerStyles}
        />
        <Button label="Submit" variant="border" onClick={handleSubmit} />
      </form>
    </div>
  )
}

export default CommentForm
