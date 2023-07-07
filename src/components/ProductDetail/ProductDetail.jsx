import React from 'react'
import "./ProductDetail.css"
import { useState, useEffect } from 'react';

// MUI ICONS
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

//React router dom
import { Link } from 'react-router-dom';

// firebase
import { useContext } from 'react';
import { ItemsContext } from '../../context/ItemsContext/ItemsContext';

const ProductDetail = ({data}) => {

  const { cart, setCart } = useContext(ItemsContext);
  const [quant, setQuantity] = useState(1)

  const addProductToCart = (product) => {

    if(cart.find((item) => item.id === product.id)){
      const products = cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quant } : item)
      return setCart([...products]);
    }
    if(quant > 0){
      product.quantity = quant
      setCart([...cart, product]);
    }
  };

  const handleQuantityUp = () => {
    setQuantity(quant + 1);
  }

  const handlerQuantityDown = () => {
    setQuantity(quant - 1);
  }

  return (
    <div className='limits'>
        <div className='detail-image-cnt'>
            <img src={data.image} alt={`img${data.id}`} className='detail-image'/>
        </div>
        <div className='detail-content-cnt'>
            <h2 className='detail-title'>{data.name}</h2>
            <p className='detail-description'>{data.detail}</p>
            <p className='detail-category'>Categorias: <Link to={`/categories/${data.category}`} className='link-category'>{data.category}</Link></p>
            <p className='detail-price'>Precio: ${data.price}</p>
            <div className='handlerQuantity'>
              <button onClick={handlerQuantityDown} className='q-down'>-</button>
              <div className='containerQuantity'>
                <p className='quant'>{quant}</p>
              </div>
              <button onClick={handleQuantityUp} className='q-up'>+</button>
            </div>
            <p onClick={() => addProductToCart(data)} className='add-cart-btn btn'>Añadir al carrito <ShoppingCartOutlinedIcon className='icon-cart' /></p>
        </div>
    </div>
  )
}

export default ProductDetail