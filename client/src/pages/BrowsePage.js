import React, { useState } from 'react'
import reptiles from '../styles/images/reptiles.png'

const BrowsePage = (props) => {
  const species = [
    { name: 'Reptile', img: `${reptiles}` },
    { name: 'Amphibian', img: '' },
    { name: 'Bird', img: '' },
    { name: 'Insect', img: '' },
    { name: 'Arachnid', img: '' },
    { name: 'Rodent', img: '' },
    { name: 'Weasel', img: '' },
    { name: 'Canine', img: '' },
    { name: 'Feline', img: '' },
    { name: 'Fish', img: '' }
  ]

  return (
    <div>
      <div style={{marginTop:'100px'}}>
        {species.map((specie) => (
          <div
            onClick={() =>
              props.history.push(`/browse-result/${specie.name.toLowerCase()}`)
            }
          >
            <div>
              {specie.name} <img src={specie.img} alt={specie.name} />{' '}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrowsePage
