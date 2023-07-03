import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Pages
import InicioPage from "./Pages/InicioPage/InicioPage"
import AcercaDePage from "./Pages/AcercaDePage/AcercaDePage"
import ContactoPage from "./Pages/ContactoPage/ContactoPage"
import ItemDetailPage from "./Pages/ItemDetailPage/ItemDetailPage";
import CarritoPage from "./Pages/CarritoPage/CarritoPage";

// Components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// Context
import { ItemsProvider } from "./context/ItemsContext/ItemsContext";

const App = () => {

  return (
    <ItemsProvider>
      <Router>
        <NavBar opcion1="Inicio" opcion2="Categorias" opcion3="Acerca de" opcion4="Contacto"/>
        <Routes>
        <Route path="/" element={<InicioPage />} />
          <Route path="/acercade" element={<AcercaDePage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/item/:id" element={<ItemDetailPage />} />
          <Route path="/categories/:category" element={<ItemListContainer />} />
          <Route path="/carrito" element={<CarritoPage />} />
        </Routes>
      </Router>
    </ItemsProvider>
    );
  };

export default App;