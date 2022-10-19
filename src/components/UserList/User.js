import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import UserIcon from '../UserIcon/UserIcon'

export default function User({ user }) {

  return (
    <Link to={`users/${user.id}`} className='UserItem'>
      <div>
        <h4 className='UserItem-Name'>{user.name}</h4>
        <div className='UserItem-Info'>
          <p>
            <strong>
              email:
            </strong>
            {' '}
            {user.email}</p>
          <p>
            <strong>
              city:
            </strong>
            {" "}
            {user.address.city}
          </p>
          <p>
            <strong>
              posts:
            </strong>
            {" "}
            {user.posts.length}
          </p>
          <p>
            <strong>
              company:
            </strong> {user.company?.name}</p>
        </div>
      </div>
      <UserIcon />
    </Link>
  )
}

User.propTypes = {
  user: PropTypes.shape({
    company: PropTypes.shape({
      name: PropTypes.string,
    }),
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    posts: PropTypes.arrayOf(PropTypes.shape({
      body: PropTypes.string,
      id: PropTypes.number,
      title: PropTypes.string,
      userId: PropTypes.number,
    })),
    username: PropTypes.string,
    website: PropTypes.string,
  }),
}
