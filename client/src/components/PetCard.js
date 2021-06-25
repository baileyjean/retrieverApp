import React from 'react'
const PetCard = (props) => {
  const { pet, handleClick } = props
  return (
    <div className="pet-card" 
      style={{backgroundImage:`url(${pet.image})`}} onClick={() => handleClick()}>
      <div className="petcard-info"><h2>{pet.name}</h2>
        <p style={{width:'100%'}}>
          <h4>Fee to adopt:</h4>
          <span className="adopt-fee">${pet.adopt_fee}</span>
        </p>
      </div>
    </div>
  )
}
export default PetCard
