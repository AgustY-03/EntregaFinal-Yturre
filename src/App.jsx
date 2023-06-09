import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Pages
import InicioPage from "./Pages/InicioPage/InicioPage"
import AcercaDePage from "./Pages/AcercaDePage/AcercaDePage"
import ContactoPage from "./Pages/ContactoPage/ContactoPage"
import ItemDetailPage from "./Pages/ItemDetailPage/ItemDetailPage";

// Components

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <Router>
        <NavBar opcion1="Inicio" opcion2="Acerca de" opcion3="Contacto"/>
        <Routes>
        <Route path="/" element={<InicioPage />} />
          <Route path="/acercade" element={<AcercaDePage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/item/:id" element={<ItemDetailPage />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
        </Routes>
    </Router>
    );
  };

export default App;