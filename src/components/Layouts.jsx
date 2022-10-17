
import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import './Navbar.css'
export default function Layouts() {
  return (
    <>
      <header>
        <nav className="flex">
          <ul>
            <li>
              <NavLink to="/" className={(isActive) => isActive && "active-link"}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={(isActive) => isActive && "active-link"}>users</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />

      {/* <footer>copyRight 2022 </footer> */}
    </>
  )
}
