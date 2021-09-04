import React, { useContext } from "react";
import "./cartwidget.css";
import {Link} from "react-router-dom"
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {

    const {cantidadCart} = useContext(CartContext)

    return (
        <div>
            <Link to = {"/carrito"}><img className= "cart" alt= "" src = "/imagen/cart.svg" /> </Link>
            <span className = "cartcant">{cantidadCart()}</span>

        </div>
    )
}