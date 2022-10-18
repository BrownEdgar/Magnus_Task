import React from 'react'
import { NavLink } from 'react-router-dom'
import ROUTES from '../Routes'

import './Navbar.css'

export default function Navbar() {
  return (
    <header>
      <nav className="flex">
        <ul>
          <li>
            <NavLink to={ROUTES.MAIN}>Home</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
