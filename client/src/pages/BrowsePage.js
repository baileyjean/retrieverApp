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
import other from '../styles/images/other.png'

const BrowsePage = (props) => {
  const species = [
    { name: 'Amphibian', img: `${amphibians}`, value:'amphibian' },
    { name: 'Bird', img: `${birds}`, value:'bird'  },
    { name: 'Bug', img: `${bugs}`, value:'arachnid'  },
    { name: 'Cat', img: `${felines}`, value:'feline'  },
    { name: 'Dog', img: `${canines}`, value:'canine'  },
    { name: 'Fish', img: `${fish}`, value:'fish'  },
    { name: 'Reptile', img: `${reptiles}`, value:'reptile'  },
    { name: 'Rodent', img: `${rodents}`, value:'rodent'  },
    { name: 'Weasel', img: `${weasels}`, value:'weasel'  },
    { name: 'Other', img: `${other}`, value:'other'  }
  ]
  return (
      <div className="browse-results">
        {species.map((specie) => (
            <div className="species" id={specie.name} onClick={() =>
              props.history.push(`/browse-result/${specie.value.toLowerCase()}`)
            }>
              <h2>{specie.name}</h2> <img src={specie.img} alt={specie.name}/>
          </div>
        ))}
      </div>
  )
}
export default BrowsePage