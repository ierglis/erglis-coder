import React, { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import "./cartscreen.css"

export const CartScreen = () => {
    
    const {cart, eliminar, vaciar} = useContext(CartContext)


    return (
       <div> 
                <div className = "carrito">
                    <h1 className = "cartitle">Carrito de compras</h1>
                    <div className = "contenedor-prod">
                        { cart.map( prod => ( 
                            
                            <div className = "prodcart" key = {prod.id}>
                                <img className="imgcart" alt= "." src = {prod.img} />
                                <p className = "namecart">{prod.name}</p>
                                <p className = "qttycart">{prod.cantidad}</p>
                                <p className = "pricecart">{prod.price}</p>
                                <button className = "delproductcart" onClick = {() => {eliminar(prod.id)}}>Eliminar producto</button>
                            </div>
                        ))}
                    </div>
                    <div className = "botonescart">
                        <button className = "emptycart" onClick = {vaciar}>Vaciar Carrito</button>
                        <button className = "termcompra">Finalizar Compra</button>
                    </div>
                </div>
               
        </div>        
    )
}