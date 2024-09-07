import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'


export default function Navbar() {
  return (
    <>
    
    <nav class="navbar">
      <ul class="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Projects" >Projects</Link>
        </li>
      </ul>
    </nav>
    
    </>
  )
}
