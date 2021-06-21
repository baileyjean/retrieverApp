import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiSearchCircle, HiOutlineSearchCircle } from 'react-icons/hi'
const NavBar = (props) => {
  const { loggedIn, logOut } = props
// search bar should expand on hover, hide off hover
// show search results page on click of "mag".
// Actual logout functionality.
  return (
  <header 
    style={{ 
      display: `${(loggedIn ? 'flex' : 'none')}`}}
  >
    <NavLink to="/home/:user_id"><img src='#' alt="logo"/></NavLink>
    <nav><div className="searchbar">
      <input type="search" placeholder="Search Pets"></input>
      <HiSearchCircle id="mag" />
    </div>
    <NavLink to="/new-pet/:user_id">Post a Pet</NavLink>
    <NavLink to="/user-profile/:user_id">Profile</NavLink>
    <button onClick={logOut}>Logout</button>
  </nav>
  </header>
  )}
export default NavBar