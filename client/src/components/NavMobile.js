import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillCloseSquare } from 'react-icons/ai'
import { HiSearchCircle } from 'react-icons/hi'


function NavMobile(props) {
  const { 
          closeMenu, 
          opened, 
          logOut, 
          userID,
          handleChange, 
          handleSearch  
        } = props

  return (
    <div className='mobilenav' style={{
      zIndex: `${opened ? '999' : '-999'}`,
      opacity: `${opened ? '100' : '0'}`,
      top: `${opened ? '0' : '-100%'}`
    }}
    >
      <div className='navclose' onClick={closeMenu}>
        <AiFillCloseSquare />
      </div>
      <div className="mobile-search">
          <input 
            type="search" 
            placeholder="Search Pets"
            value={keyword}
            onChange={handleChange}
          />
          <HiSearchCircle 
            id="magmobile" 
            onClick={()=>{handleSearch();closeMenu()}}
          />
        </div>
      <div className="mobilemenu">
        <NavLink 
          to="/browse"
          onClick={closeMenu}>
            Browse Pets
        </NavLink>
        <NavLink
          to={`/new-pet/${userID}`}
          onClick={closeMenu}>
            Post a Pet
        </NavLink>
        <NavLink
          to={`/user-profile/${userID}`}
          onClick={closeMenu}>
            Profile
        </NavLink>
        <button id="logout-mobile" onClick={()=>{logOut(); closeMenu()}}>
          Logout
        </button>
      </div>
    </div >
  )
}

export default NavMobile