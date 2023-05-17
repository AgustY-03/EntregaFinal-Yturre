import React from "react";
import "./NavBar.css"

//Components
import CartWidget from "../CartWidget/CartWidget";

const NavBar = (props) => {
    return (
        <nav className="navbar">
            <h2 className="brand white">Full<span className="orange">Tech</span></h2>
            <ul className="position">
                <li className="option-navbar">
                    <a href="#">{props.opcion1}</a>
                </li>
                <li className="option-navbar">
                    <a href="#">{props.opcion2}</a>
                </li>
                <li className="option-navbar">
                    <a href="#">{props.opcion3}</a>
                </li>
                <li className="option-navbar option-cart">
                    <CartWidget />
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;