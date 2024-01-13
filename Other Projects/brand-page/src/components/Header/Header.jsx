import React from 'react'
import logo from "../../images/brand_logo.png"
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="links">
            <h3>Menu</h3>
            <h3>Location</h3>
            <h3>About</h3>
            <h3>Contact</h3>
        </div>
        <div className="login">
            <button className='btn'>login</button>
        </div>
    </div>
  )
}

export default Header
