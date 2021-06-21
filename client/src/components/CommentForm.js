import React from 'react'

const CommentForm = (props) => {
  const [userId, setUserId] = useState('')
  const [petId, setPetId] = useState('')
  const [comment, setComment] = useState('')

  useEffect(
    setPetId(props.match.params.pet_id)
    setUserId(props.user_id)
    )
  return <div></div>
}

export default CommentForm
