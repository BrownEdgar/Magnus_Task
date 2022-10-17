import React from 'react'
import PropTypes from 'prop-types';
import Product from './Product';

import './Products.css'

export default function Products({ products }) {
  return (
    <div className='Products'>
      {products.map(product => {
        return <Product key={product.id} product={product} />
      })}
    </div>
  )
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  })),
  status: PropTypes.string,
}