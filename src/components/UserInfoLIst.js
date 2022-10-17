import React from 'react'

import "./UserInfoList.css"
export default function UserInfoLIst({ user }) {
  return (
    <ul>
      <li className='User-Info User-Info_Username'>
        <span>username :</span>
        {" "}
        {user.username}
      </li>
      <li className='User-Info User-Info_Website'>
        <span>website :</span>
        {" "}
        {user.website}
      </li>
      <li className='User-Info User-Info_Phone'>
        <span>phone :</span>
        {" "}
        {user.phone}
      </li>
    </ul>
  )
}
