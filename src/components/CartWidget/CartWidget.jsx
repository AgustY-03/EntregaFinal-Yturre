import React from "react";
import "./CartWidget.css";

// Context
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext/ItemsContext";

// MUI ICONS
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const CartWidget = () => {
  const { cart } = useContext(ItemsContext) 
  return (
    <div className="cart">
        <ShoppingCartOutlinedIcon /><span className="quantity-cart">{ cart.length }</span>
    </div>
  )
}

export default CartWidget;