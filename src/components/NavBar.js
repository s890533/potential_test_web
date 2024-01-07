import React from 'react'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark" className='nav-bar'>
        <Navbar.Brand>Network Speed Converter</Navbar.Brand>
        
      </Navbar>
    </div>
  )
}

export default NavBar
