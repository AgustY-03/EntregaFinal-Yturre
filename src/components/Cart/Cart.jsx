import React from 'react'
import "./Cart.css"

//firebase
import { useContext } from 'react'
import { ItemsContext } from '../../context/ItemsContext/ItemsContext'

const Cart = () => {
  const { cart, setCart } = useContext(ItemsContext)

  const deleteProduct = ( product ) => {
    const cartUpdate = cart.filter((item) => item.id !== product.id)
    setCart(cartUpdate);
  }


return cart.map((product) => {
  return(
      <div className='content' key={product.id}>
          <img src={product.image} alt={`product${product.id}`} />
          <h3 className='name'>{product.name}</h3>
          <h4 className='price'>${product.price}</h4>
          <h4 className='quantity'>x{product.quantity}</h4>
          <p onClick={() => deleteProduct(product)} className='delete'>Eliminar</p>
      </div>
  )
})
}

export default Cart;