import React from 'react'
import PropTypes from 'prop-types';

export default function UserPostsList({ user }) {

  return (
    <div className="User-Posts">
      <h2 className='User-PostsList-Title'>Posts</h2>
      <ul id="list">
        {user.posts.map(post => (
          <li key={post.id} data-id={`${post.id}`}>
            <h4 className='Post-Title'>{post.title}</h4>
            <p className="Post-Body">
              {post.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

UserPostsList.propTypes = {
  user: PropTypes.shape({
    posts: PropTypes.arrayOf(PropTypes.shape({
      body: PropTypes.string,
      id: PropTypes.number,
      title: PropTypes.string,
      userId: PropTypes.number,
    })),
  }),
}
