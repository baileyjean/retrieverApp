import React from 'react'
const PetCard = (props) => {
  const { pet, showPost } = props
  return (
    <div className="pet-card" onClick={() => showPost(pet)}>
      <img src={pet.image} alt={pet.name} />
      <h2>{pet.name}</h2>
      <h4>Fee to adopt:</h4>{' '}
      <span className="adopt-fee">`${pet.adopt_fee}`</span>
    </div>
  )
}
export default PetCard
