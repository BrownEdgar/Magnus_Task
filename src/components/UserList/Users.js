import React from 'react'
import PropTypes from 'prop-types';
import User from './User';

import './Users.css'

export default function Users({ users }) {
  return (
    <div className='Users'>
      {users.map(user => {
        return <User key={user.id} user={user} />
      })}
    </div>
  )
}

Users.propTypes = {
  user: PropTypes.shape({
    address: PropTypes.shape({
      city: PropTypes.string,
      street: PropTypes.string,
      suite: PropTypes.string,
      zipcode: PropTypes.string,
    }),
    company: PropTypes.shape({
      bs: PropTypes.string,
      catchPhrase: PropTypes.string,
      name: PropTypes.string,
    }),
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.string,
    posts: PropTypes.arrayOf(PropTypes.shape({
      body: PropTypes.string,
      id: PropTypes.number,
      title: PropTypes.string,
      userId: PropTypes.number,
    })),
    username: PropTypes.string,
    website: PropTypes.string,
  })
}