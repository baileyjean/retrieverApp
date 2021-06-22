import React, { useState, useEffect } from 'react'
import { Textarea, Button } from 'react-rainbow-components'

const containerStyles = {
  width: 700
}

const CommentForm = (props) => {
  const [userId, setUserId] = useState('')
  const [petId, setPetId] = useState('')
  const [comment, setComment] = useState('')
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   setPetId(props.match.params.pet_id)
  //   setUserId(props.user_id)
  // })

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
        <Button
          label="Submit"
          variant="border"
          onClick={() => {
            console.log(comment)
          }}
        />
      </form>
    </div>
  )
}

export default CommentForm
