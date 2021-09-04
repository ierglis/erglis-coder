import React, { useContext } from "react"
import { ProvidePlugin } from "webpack"
import { CartContext } from "../../../context/CartContext"

export const CartScreen = () => {
    
    const {cart, eliminar, vaciar} = useContext(CartContext)

    return (
        <div>
            {cart.map(prod => {
                <div>
                    <img>{prod.img}</img>
                    <p>{prod.name}</p>
                </div>
            })}
        </div>
    )
}