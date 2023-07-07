import React, { useState, useEffect} from 'react';
import "./ItemListContainer.css"

// Components
import Card from '../Card/Card';

// React Router Dom
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// firebase
import { useContext } from 'react';
import { ItemsContext } from '../../context/ItemsContext/ItemsContext';
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where, documentId } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const { items } = useContext(ItemsContext);

    if(category != null){
      const [productByCategory, setProductByCategory] = useState([])

      useEffect( () => {

        const getProduct = async () => {
            const q = query(collection(db, "productos"), where("category", "==", category));
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
            });
            setProductByCategory(docs);
        };
      getProduct();
      }
      , [category])

      return productByCategory.length > 0 ? (
        <div>
          <div className='position-item'>
              <p className='text-content'>Categoria: {category}</p>
          </div>
          <div className='list-container'>
          { productByCategory &&
              productByCategory.map((product) => {
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
      ) : (
        <div>
          <div className='position-item'>
              <p className='text-content'>Categoria: {category}</p>
          </div>
          <div className='unfound-products'>
            <p>No se encontraron productos de la categoria {category}... 😔</p>
          </div>
        </div>
      )
    }else if(category == null){
      return (
        <div>
          <div className='position-item'>
              <p className='text-content'>{greeting}</p>
          </div>
          <div className='list-container'>
          { items &&
              items.map((product) => {
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
}


export default ItemListContainer;