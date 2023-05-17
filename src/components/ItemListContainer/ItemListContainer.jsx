import React from 'react'
import "./ItemListContainer.css"

export const ItemListContainer = (props) => {
  return (
    <div className='position-item'>
        <p className='text-content'>{props.greeting}</p>
    </div>
  )
}

export default ItemListContainer;
