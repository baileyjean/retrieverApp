import React from 'react'

const CommentCard = (props) => {
  const deleteComment = () => {}

  const editComment = () => {}

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
