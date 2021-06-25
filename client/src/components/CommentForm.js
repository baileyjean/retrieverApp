import { React, useState } from 'react'
import { Textarea, Button } from 'react-rainbow-components'
import axios from 'axios'
import { BASE_URL } from '../globals'
const containerStyles = {
  width: 700
}
const CommentForm = (props) => {
  const { petID, userID, getComments } = props
  const [comment, setComment] = useState('')

  const handleSubmit = async () => {
    await axios.post(`${BASE_URL}/comments`, {
      user_id: userID,
      pet_id: petID,
      post: comment
    })
    getComments()
  }
  const handleChange = (e) => {
    setComment(e.target.value)
  }

  return (
    <div>
      <form>
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
