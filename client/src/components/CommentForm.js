import React from 'react'

const CommentForm = (props) => {
  const [userId, setUserId] = useState('')
  const [petId, setPetId] = useState('')
  const [comment, setComment] = useState('')

  useEffect(() => {
    setPetId(props.match.params.pet_id)
    setUserId(props.user_id)
  })

  handleChange(setComment(e.target.value))

  return (
    <div>
      <form>
        <textarea value={comment} onChange={handleChange} />
        <button>submit</button>
      </form>
    </div>
  )
}

export default CommentForm
