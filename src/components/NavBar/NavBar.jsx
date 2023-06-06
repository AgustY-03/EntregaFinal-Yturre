import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";

//Components
import CartWidget from "../CartWidget/CartWidget";

const NavBar = (props) => {
    return (
        <nav className="navbar">
            <Link to="/">
            <h2 className="brand white">Full<span className="orange">Tech</span></h2>
            </Link>
            <ul className="position">
                <Link to="/" className="option-navbar">
                    {props.opcion1}
                </Link>
                <Link to="/acercade" className="option-navbar">
                    {props.opcion2}
                </Link>
                <Link to="contacto" className="option-navbar">
                    {props.opcion3}
                </Link>
                <Link className="option-navbar option-cart">
                    <CartWidget />
                </Link>
            </ul>
        </nav>
    );
}

export default NavBar;