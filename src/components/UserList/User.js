import React from 'react'
import { Link } from 'react-router-dom'
import UserIcon from '../UserIcon/UserIcon'

export default function user({ user }) {

  return (
    <Link to={`users/${user.id}`} className='UserItem'>
      <div>
        <h4 className='UserItem-Name'>{user.name}</h4>
        <div className='UserItem-Info'>
          <p className='UserItem-Email'>
            <strong>
              email:
            </strong>
            {' '}
            {user.email}</p>
          <p className='UserItem-City'>
            <strong>
              city:
            </strong>
            {" "}
            {user.address.city}
          </p>
          <p className='UserItem-Posts'>
            <strong>
              posts:
            </strong>
            {" "}
            {user.posts.length}
          </p>
          <p className='UserItem-Website'>
            <strong>
              website:
            </strong> {user.website}</p>
        </div>
      </div>
      <UserIcon />
    </Link>
  )
}
