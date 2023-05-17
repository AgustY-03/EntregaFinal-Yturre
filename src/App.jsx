import React from "react";
import "./App.css";

// Components

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <div>
      <NavBar opcion1="Inicio" opcion2="Acerca de" opcion3="Contacto"/>
      <ItemListContainer greeting="Bienvenidos a FullTech" />
    </div>
    );
  };

export default App;