
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Navbar'



export default function Layouts() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <footer>copyRight 2022 </footer> */}
    </>
  )
}
