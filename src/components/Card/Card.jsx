import React from 'react'
import "./Card.css"

const Card = ({ data }) => {
  return (
    <div className='card-container'>
        <div className='img-container'>
            <img src={data.image} alt='product' />
        </div>
        <div className='card-detail'>
            <div className='product-title'>
                <h3>{ data.name}</h3>
            </div>
            <div className='product-price'>
                <p>${data.price}</p>
            </div>
        </div>
        <div className='btn-vermas'>
            <button>
                <p>Ver mas</p>
            </button>
        </div>
    </div>
  )
}

export default Card