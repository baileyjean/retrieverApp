import React from 'react'
const UserCard = (props) => {
  const { user } = props
  return (
    <div>
      <img src={user.image} alt={user.name} />
      <h2>{user.name}</h2>
    </div>
  )
}
export default UserCard