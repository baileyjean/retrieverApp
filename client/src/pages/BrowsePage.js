import React from 'react'
import reptiles from '../styles/images/reptiles.png'
import amphibians from '../styles/images/amphibians.png'
import birds from '../styles/images/birds.png'
import felines from '../styles/images/felines.png'
import canines from '../styles/images/canines.png'
import tbd from '../styles/images/tbd.png'

const BrowsePage = (props) => {
  const species = [
    { name: 'Reptile', img: `${reptiles}` },
    { name: 'Amphibian', img: `${amphibians}` },
    { name: 'Bird', img: `${birds}` },
    { name: 'Insect', img: `${tbd}` },
    { name: 'Arachnid', img: `${tbd}` },
    { name: 'Rodent', img: `${tbd}` },
    { name: 'Weasel', img: `${tbd}` },
    { name: 'Dog', img: `${canines}` },
    { name: 'Cat', img: `${felines}` },
    { name: 'Fish', img: `${tbd}` }
  ]
  return (
      <div className="browse-results">
        {species.map((specie) => (
            <div className="species" id={specie.name} onClick={() =>
              props.history.push(`/browse-result/${specie.name.toLowerCase()}`)
            }>
              <h2>{specie.name}</h2> <img src={specie.img} alt={specie.name}/>
          </div>
        ))}
      </div>
  )
}
export default BrowsePage