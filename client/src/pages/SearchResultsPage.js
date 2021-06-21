import React from 'react'
import PetCard from '../components/PetCard'
const SearchResultsPage = (props) => {
  const { petPosts } = props
  const showPost = (pet) => {
    props.history.push(`/pet-profile/${pet.id}`)
  }
  return (
    <div className="search-results">
      {petPosts.map((pet) => (
        <PetCard 
          key={pet.id} 
          pet={pet} 
          showPost={showPost}
        />
      ))}
    </div>
  )}
export default SearchResultsPage