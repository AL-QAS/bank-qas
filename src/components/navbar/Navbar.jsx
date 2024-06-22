import React from 'react'
import { useState } from 'react';
import {  logo,menu,close } from "../../assets";
import { navLinks } from "../../constants"
import './navbar.css'
const Navbar = () => {
const [toggle,setToggle] = useState('');

  return (
    <nav className='app__navbar'>
    <div className="app__navbar-logo">
    <img src={logo} alt='logo' />
    </div>
      <ul className="app__navbar-links app__navbar-sm_hidden">
        {navLinks.map((link,index)=> (
          <li key ={link.id}><a href={`#${link.id}`}>{link.title}</a> </li>
        ))}
      </ul>
      <div className="app__navbar-smallscreen">
      <img
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle(prev=> !prev)}
        />
        {
          toggle &&(
            <div className= 'app__navbar-smallscreen_overlay app__navbar-lgscreen_hidden sidebar'>
            <ul className="app__navbar-smallscreen_links app__navbar-lgscreen_hidden">
            {navLinks.map((link,index)=> (
              <li key ={link.id}><a href={`#${link.id}`} >{link.title}</a> </li>
            ))}
          </ul>
            </div>
          )
        }
      
      </div>
    </nav>
  )
}

export default Navbar
