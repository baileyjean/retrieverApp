import React, { useState } from 'react'

const BrowsePage = (props) => {
  const [species, setSpecies] = useState([
    { name: 'Reptile', img: '' },
    { name: 'Amphibian', img: '' },
    { name: 'Bird', img: '' },
    { name: 'Insect', img: '' },
    { name: 'Arachnid', img: '' },
    { name: 'Rodent', img: '' },
    { name: 'Weasel', img: '' },
    { name: 'Canine', img: '' },
    { name: 'Feline', img: '' },
    { name: 'Fish', img: '' }
  ])

  return (
    <div>
      <div>
        {species.map((specie) => (
          <div
            onClick={() =>
              props.history.push(`/browse-result/${specie.name.toLowerCase()}`)
            }
          >
            <div>
              {specie.name} <img src={specie.img} alt="species" />{' '}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrowsePage
