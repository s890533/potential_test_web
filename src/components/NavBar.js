import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import './NavBar.css'



const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" className='nav-bar'>
        <Navbar.Brand>Simulator Test Assistant</Navbar.Brand>
      </Navbar>
    </div>
  )
}

export default NavBar
