import React from 'react'

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
