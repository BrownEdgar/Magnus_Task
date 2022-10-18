import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import getUserInitiales from '../../utils/getUserInitiales';
import { UserPostsList } from './UserPosts';
import { UserInfoList } from './UserInfo';

import ROUTES from '../Routes';

import "./User.css"

export default function User() {
  const navigate = useNavigate()
  const { id } = useParams()
  const user = useSelector(state => state.users.data.find(elem => elem.id === +id)) || []

  const goHome = () => { navigate(ROUTES.MAIN, { replace: false }) }

  if (+id > 10) {
    return navigate(ROUTES.ERRORPAGE)
  }

  return (
    <div className='User'>
      <div className="User-ImageBox">
        <div className="User-Content">
          <span className='User-Initiales'>{getUserInitiales(user.name || "")}</span>
          <h1 className='User-FullName'>{user.name}</h1>
          <UserInfoList user={user} />
        </div>
      </div>
      <button onClick={goHome} className="Back-Button">Back</button>
      <UserPostsList user={user} />
    </div>
  )
}
