import React from "react";
import "./CartWidget.css";

// Context
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext/ItemsContext";

export const CartWidget = () => {
  const { cart } = useContext(ItemsContext) 
  return (
    <div className="cart">
        { cart.length }
    </div>
  )
}

export default CartWidget;