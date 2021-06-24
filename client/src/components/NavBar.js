import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiSearchCircle } from 'react-icons/hi'
import { FaBars } from 'react-icons/fa'
import logo from '../styles/images/logo-white.png'
import { BASE_URL } from '../globals'
import axios from 'axios'

const NavBar = (props) => {
  const { loggedIn, logOut, userID, history, openMenu } = props
  const [keyword,setKeyword] = useState('')

  const handleSearch = async () => {
    /* double check that this is the correct axios call route */
    const res = await axios.get(`${BASE_URL}/pets/keyword/${keyword}`)

    // show search results page on click of "mag".
    history.push(`/results/${keyword}`)
  }

  return (
    <header
      style={{
        display: `${loggedIn ? 'flex' : 'none'}`
      }}
    >
      <NavLink to={`/home/${userID}`}>
        <img src={logo} alt="logo" height="80" />
      </NavLink>
      <div className='mobilebtn' onClick={openMenu}>
        <FaBars />
      </div>
      <nav>
        <div className="searchbar">
          <input type="search" placeholder="Search Pets"></input>
          <HiSearchCircle 
            id="mag" 
            /* onClick={handleSearch} */
          />
        </div>
        <NavLink to="/browse">Browse Pets</NavLink>
        <NavLink to={`/new-pet/${userID}`}>Post a Pet</NavLink>
        <NavLink to={`/user-profile/${userID}`}>Profile</NavLink>
        <button id="logout" onClick={logOut}>
          Logout
        </button>
      </nav>
    </header>
  )
}
export default NavBar
