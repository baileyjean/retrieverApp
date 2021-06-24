import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillCloseSquare } from 'react-icons/ai'

function NavMobile(props) {
  const { closeMenu, opened, logOut, userID } = props

  return (
    <div className='mobilenav' style={{
      zIndex: `${opened ? '999' : '-999'}`,
      opacity: `${opened ? '100' : '0'}`,
      top: `${opened ? '0' : '-100%'}`
    }}
      onClick={closeMenu}
    >
      <div className='navclose' onClick={closeMenu}>
        <AiFillCloseSquare />
      </div>
      <div className="mobilemenu">
        <NavLink 
          to="/browse">Browse Pets</NavLink>
        <NavLink
          to={`/new-pet/${userID}`}>Post a Pet</NavLink>
        <NavLink
          to={`/user-profile/${userID}`}>Profile</NavLink>
        <button id="logout-mobile" onClick={logOut}>
          Logout
        </button>
      </div>
    </div >
  )
}

export default NavMobile