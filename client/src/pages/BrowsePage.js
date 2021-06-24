import React from 'react'
import reptiles from '../styles/images/reptiles.png'
import amphibians from '../styles/images/amphibians.png'
import birds from '../styles/images/birds.png'
import felines from '../styles/images/felines.png'
import canines from '../styles/images/canines.png'
import bugs from '../styles/images/bugs.png'
import rodents from '../styles/images/rodents.png'
import weasels from '../styles/images/weasels.png'
import fish from '../styles/images/fish.png'
import tbd from '../styles/images/tbd.png'

const BrowsePage = (props) => {
  const species = [
    { name: 'Reptile', img: `${reptiles}` },
    { name: 'Amphibian', img: `${amphibians}` },
    { name: 'Bird', img: `${birds}` },
    { name: 'Insect', img: `${bugs}` },
    { name: 'Rodent', img: `${rodents}` },
    { name: 'Weasel', img: `${weasels}` },
    { name: 'Dog', img: `${canines}` },
    { name: 'Cat', img: `${felines}` },
    { name: 'Fish', img: `${fish}` },
    { name: 'Other', img: `${tbd}` }
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