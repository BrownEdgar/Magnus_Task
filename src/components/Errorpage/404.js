import React from 'react'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../Routes'


import "./404.css"

export default function Error() {
  const navigate = useNavigate()

  const goHome = () => { navigate(ROUTES.MAIN, { replace: false }) }

  return (
    <div className='Error-Box'>
      <h2 className='Error-Message'>404 | Page was not found</h2>
      <button onClick={goHome} className="Back-Button">Home page</button>
    </div>
  )
}
