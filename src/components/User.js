import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import getUserInitiales from '../utils/getUserInitiales';
import UserInfoLIst from './UserInfoLIst';
import UserPostsList from './UserPostsList';

import "./User.css"

export default function Users() {
  const { id } = useParams()
  const user = useSelector(state => state.users.data.find(elem => elem.id === +id)) || []
  console.log(user)
  return (
    <div className='User'>
      <div className="User-ImageBox">
        <div className="User-Content">
          <span className='User-Initiales'>{getUserInitiales(user.name)}</span>
          <h1 className='User-FullName'>{user.name}</h1>
          <UserInfoLIst user={user} />
        </div>
      </div>
      <UserPostsList user={user} />
    </div>
  )
}
