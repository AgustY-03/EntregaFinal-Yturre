import React from 'react'
import "./ProductDetail.css"

// MUI ICONS
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

//React router dom
import { Link } from 'react-router-dom';

const ProductDetail = ({ data }) => {

  return (
    <div className='limits'>
        <div className='detail-content-cnt'>
            <h2 className='detail-title'>{data.title}</h2>
            <p className='detail-description'>{data.description}</p>
            <p className='detail-category'>Categorias: <Link to={`/category/${data.category}`} className='link-category'>{data.category}</Link></p>
            <p className='detail-price'>Precio: ${data.price}</p>
            <p className='add-cart-btn btn'>Añadir al carrito <ShoppingCartOutlinedIcon className='icon-cart' /></p>
        </div>
        <div className='detail-image-cnt'>
            <img src={data.image} alt={`img${data.id}`} className='detail-image'/>
        </div>
    </div>
  )
}

export default ProductDetail