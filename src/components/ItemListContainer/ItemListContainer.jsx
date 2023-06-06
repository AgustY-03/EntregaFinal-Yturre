import React, { useState, useEffect} from 'react';
import "./ItemListContainer.css"

// Custom Hook
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';

// React Router Dom
import { Link } from 'react-router-dom';

const ItemListContainer = (props) => {
  const { data, loading} = useFetch("https://fakestoreapi.com/products");

  return (
    <div>
      <div className='position-item'>
          <p className='text-content'>{props.greeting}</p>
      </div>
      <div className='list-container'>
      { data &&
          data.map((product) => {
              return (
                  <div key={product.id}>
                      <Link to={`/item/${product.id}`} className="Link">
                        <Card data={product}/>
                      </Link>
                  </div>
              )
          })
      }
      </div>
    </div>
  )
}

export default ItemListContainer;
