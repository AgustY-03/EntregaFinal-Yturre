import React, {useEffect, useState } from 'react'
import axios from 'axios';
import "./ItemDetailPage.css"

//Hook
import { useParams } from 'react-router-dom';

//Components
import ProductDetail from '../../components/ProductDetail/ProductDetail';

const ItemDetailPage = () => {
    let { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`).then((res) =>
            setProduct(res.data)
        );
    }, [])

    
  return (
    <div>
        <h1 className='title'>Detalles del Producto</h1>
        {product && <ProductDetail data={product} />}
    </div>
  )
}

export default ItemDetailPage;