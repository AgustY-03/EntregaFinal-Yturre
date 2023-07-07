import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";

//Components
import CartWidget from "../CartWidget/CartWidget";

const NavBar = (props) => {

    const  opcionesCategorias = () => {
        document.getElementById('dropdown').style.display= 'block';
    }

    const cerrarCategorias = () => {
        document.getElementById('dropdown').style.display= 'none';
    }

    return (
        <nav className="navbar">
            <Link onClick={cerrarCategorias} to="/">
            <h2 className="brand white">Full<span className="orange">Tech</span></h2>
            </Link>
            <ul className="position">
                <Link onClick={cerrarCategorias} to="/" className="option-navbar">
                    {props.opcion1}
                </Link>
                <div className="option-navbar option">
                    <p onClick={opcionesCategorias}>{props.opcion2}</p>
                    <div id="dropdown">
                        <ul className="category-title">
                            <li>Componentes</li>
                            <li>Perifericos</li>
                        </ul>
                        <ul onClick={cerrarCategorias} className="opciones-comp">
                            <Link to="/categories/tarjeta grafica" className="opcion-margin">Tarjeta grafica</Link>
                            <Link to="/categories/procesador" className="opcion-margin">Procesador</Link>
                            <Link to="/categories/ram" className="opcion-margin">RAM</Link>
                            <Link to="/categories/placa madre" className="opcion-margin">Placa madre</Link>
                        </ul>
                        <ul onClick={cerrarCategorias} className="opciones-peri">
                            <Link to="/categories/teclado" className="opcion-margin">Teclado</Link>
                            <Link to="/categories/mouse" className="opcion-margin">Mouse</Link>
                            <Link to="/categories/monitor" className="opcion-margin">Monitor</Link>
                            <Link to="/categories/auriculares" className="opcion-margin">Auriculares</Link>
                        </ul>
                        <p onClick={cerrarCategorias} className="close-opcion">x</p>
                    </div>
                </div>
                <Link onClick={cerrarCategorias} to="/acercade" className="option-navbar">
                    {props.opcion3}
                </Link>
                <Link onClick={cerrarCategorias} to="/contacto" className="option-navbar">
                    {props.opcion4}
                </Link>
                <Link onClick={cerrarCategorias} to="/carrito" className="option-navbar option-cart">
                    <CartWidget />
                </Link>
            </ul>
        </nav>
    );
}

export default NavBar;