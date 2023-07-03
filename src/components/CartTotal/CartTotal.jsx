import React from 'react'
import './CartTotal.css'
import { useContext } from 'react'
import { ItemsContext } from '../../context/ItemsContext/ItemsContext'


const CartTotal = () => {
    const { cart } = useContext(ItemsContext);
    const total = cart.reduce((acum, ele) => acum + (ele.price * ele.quantity), 0);
  return (
    <div className='total'>
        <h3>Total a pagar: ${total} </h3>
    </div>
  )
}

export default CartTotal