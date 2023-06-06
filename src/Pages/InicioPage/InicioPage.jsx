import React from 'react'

// COMPONENTS
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const InicioPage = () => {
  return (
    <div className="catalogo">
      <ItemListContainer greeting="Bienvenidos a FullTech" />
    </div>
  )
}

export default InicioPage;
