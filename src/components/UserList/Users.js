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
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  })),
  status: PropTypes.string,
}