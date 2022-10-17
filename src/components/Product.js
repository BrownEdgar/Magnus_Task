import React from 'react'
import { Link } from 'react-router-dom'
import UserIcon from './UserIcon/UserIcon'

export default function Product({ product }) {
  console.log(product)

  return (
    <Link to={`users/${product.id}`} className='UserItem'>
      <div>
        <h4 className='UserItem-Name'>{product.name}</h4>
        <div className='UserItem-Info'>
          <p className='UserItem-Email'>
            <strong>
              email:
            </strong>
            {' '}
            {product.email}</p>
          <p className='UserItem-City'>
            <strong>
              city:
            </strong>
            {" "}
            {product.address.city}
          </p>
          <p className='UserItem-Posts'>
            <strong>
              posts:
            </strong>
            {" "}
            {product.posts.length}
          </p>
          <p className='UserItem-Website'>
            <strong>
              website:
            </strong> {product.website}</p>
        </div>
      </div>
      <UserIcon />
    </Link>
  )
}
