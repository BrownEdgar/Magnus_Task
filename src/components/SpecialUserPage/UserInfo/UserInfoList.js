import React from 'react'

import "./UserInfoList.css"

export default function UserInfoLIst({ user }) {
  return (
    <ul id="UserInfoList">
      <li className='User-Info'>
        <span>user id:</span>
        {" "}&nbsp;
        {user.id}
      </li>
      <li className='User-Info'>
        <span>username:</span>
        {" "}&nbsp;
        {user.username}
      </li>
      <li className='User-Info'>
        <span>website:</span>
        {" "}&nbsp;
        {user.website}
      </li>
      <li className='User-Info'>
        <span>phone:</span>
        {" "}&nbsp;
        {user.phone}
      </li>
      <li className='User-Info'>
        <span>city:</span>
        {" "} &nbsp;
        {user.address.city}
      </li>
      <li className='User-Info'>
        <span>company:</span>
        {" "} &nbsp;
        {user.company.name}
      </li>
      <li className='User-Info'>
        <span>street :</span>
        {" "}&nbsp;
        {user.address.street}
      </li>
    </ul>
  )
}
