import React from 'react'
const PetCard = (props) => {
  const { pet, handleClick } = props
  return (
    <div className="pet-card" onClick={() => handleClick()}>
      <img style={{ width: '20vw' }} src={pet.image} alt={pet.name} />
      <h2>{pet.name}</h2>
      <h4>Fee to adopt:</h4>
      <span className="adopt-fee">`${pet.adopt_fee}`</span>
    </div>
  )
}
export default PetCard
