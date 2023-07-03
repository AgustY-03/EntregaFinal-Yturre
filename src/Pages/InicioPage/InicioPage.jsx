import React from 'react'

// COMPONENTS
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const InicioPage = () => {
  return (
    <div className="catalogo">
      <ItemListContainer greeting="Lista de productos" />
    </div>
  )
}

export default InicioPage;
