import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    
      <nav className='navbar'>
              <h2>Weather App</h2>
              <ul>
                <li><Link to ='/'>Login</Link></li>
                <li><Link to ='/signup'>Signup</Link></li>
                <li><Link to ='/weather'>Weather</Link></li>
              </ul>
      </nav>
    
  )
}
