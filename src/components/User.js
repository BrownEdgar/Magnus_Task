import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import getUserInitiales from '../utils/getUserInitiales';

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
          <p className='User-Info User-Info_Username'>
            <span>username :</span>
            {" "}
            {user.username}
          </p>
          <p className='User-Info User-Info_Website'>
            <span>website :</span>
            {" "}
            {user.website}
          </p>
          <p className='User-Info User-Info_Phone'>
            <span>phone :</span>
            {" "}
            {user.phone}
          </p>
        </div>
      </div>
      <div className="User-Posts">
        <h2 className='User-PostsList-Title'>Posts</h2>
        <ul id="list">
          {user.posts.map(post => (
            <li data-id={`${post.id}`}>
              <h4 className='Post-Title'>{post.title}</h4>
              <p className="Post-Body">
                {post.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
