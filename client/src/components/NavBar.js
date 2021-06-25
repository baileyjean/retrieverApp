import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiSearchCircle } from 'react-icons/hi'
import { FaBars } from 'react-icons/fa'
import logo from '../styles/images/logo-white.png'

const NavBar = (props) => {
  const {
    loggedIn,
    logOut,
    userID,
    openMenu,
    handleChange,
    handleSearch,
    keyword
  } = props

  return (
    <header
      style={{
        display: `${loggedIn ? 'flex' : 'none'}`
      }}
    >
      <NavLink to={`/home/${userID}`}>
        <img src={logo} alt="logo" height="80" />
      </NavLink>
      <div className="mobilebtn" onClick={openMenu}>
        <FaBars />
      </div>
      <nav>
        <div className="searchbar">
          <input
            type="search"
            placeholder="Search Pets"
            value={keyword}
            onChange={handleChange}
          />
          <HiSearchCircle id="mag" onClick={handleSearch} />
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
