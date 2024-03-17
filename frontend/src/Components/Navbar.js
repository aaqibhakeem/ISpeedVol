import React from 'react'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { UseLogout } from '../hooks/useLogout';
import { UseUserContext } from '../hooks/useUserContext';

function Navbar() {
    const {user} = UseUserContext()
    const { logout } =  UseLogout();
    const handleLogout = async (e) => {
      await logout();
      <Link to='/login'/>
}
  return (


        <div className='navbarcontainer'>
            <div className='inner'>
                <NavLink className='homeNav' to='/'>
                    <h1>Home</h1>
                </NavLink>
     {user ? (<NavLink className='logoutButton' onClick={() => handleLogout()}><h1>Logout</h1></NavLink>) : (<NavLink className='logoutButton' to='/login'><h2>Login</h2></NavLink>)}
            </div>
          </div>
  )
}

export default Navbar

