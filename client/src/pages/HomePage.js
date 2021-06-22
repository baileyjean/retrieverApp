import React from 'react'

const HomePage = (props) => {
  return (
    <div>
      <div onClick={() => props.history.push(`/new-pet/fwofla`)}>
        List a pet!
      </div>
      {props.petPosts.map((pet, index) => (
        <div key={index}>
          <div>
            {pet.name} | {pet.age}years old
          </div>
          <img src={pet.image} alt="pet" />
        </div>
      ))}
    </div>
  )
}

export default HomePage
