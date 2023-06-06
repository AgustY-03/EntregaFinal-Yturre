import React from 'react'
import "./ProductDetail.css"

const ProductDetail = ({ data }) => {

  return (
    <div className='limits'>
        <div className='detail-content-cnt'>
            <h2 className='detail-title'>{data.title}</h2>
            <p className='detail-description'>{data.description}</p>
            <p>${data.price}</p>
        </div>
        <div className='detail-container'>
            <div className='detail-image-cnt'>
                <img src={data.image} alt={`img${data.id}`} className='detail-image'/>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail