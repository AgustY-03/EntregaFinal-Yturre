import React, {useEffect, useState } from 'react'
import "./ItemDetailPage.css"

//Hook
import { useParams } from 'react-router-dom';

//Components
import ProductDetail from '../../components/ProductDetail/ProductDetail';

// Firestore
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where, documentId } from "firebase/firestore";

const ItemDetailPage = () => {
    let { id } = useParams();
    const [productData, setProductData] = useState([]);

    useEffect( () => {

    const getProduct = async () => {
        const q = query(collection(db, "productos"), where(documentId(), "==", id));
        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id});
        });
        setProductData(docs);
    };
  getProduct();
  }
  , [])

  return (
    <div>
        <h1 className='title'>Detalles del Producto</h1>
        {productData.map((data) => {
          return <ProductDetail data={data} key={data.id}/>
        }
        )}
    </div>
  )
}

export default ItemDetailPage;