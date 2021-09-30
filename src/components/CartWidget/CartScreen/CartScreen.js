import React, { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import "./cartscreen.css"
import {Link} from "react-router-dom"

export const CartScreen = () => {
    
    const {cart, eliminar, vaciar} = useContext(CartContext)
    const {cantidadCart} = useContext(CartContext)
    
    let acum = 0

    return (
       <div> 
           
            {
            cart.length === 0 ? 
            <h1>EL CARRITO ESTA VACIO</h1>
            :

            
                <div className = "carrito">
                    <h1 className = "cartitle">Carrito de compras</h1>
                    <div className = "contenedor-prod">
                        { cart.map( (prod) => {
                            acum = acum + (prod.price*prod.cantidad)
                            
                            return( 
                            
                            <div className = "prodcart" key = {prod.id}>
                                <div>
                                    <img className="imgcart" alt= "." src = {prod.img} />
                                </div>
                                <div>
                                    <p className = "namecart">{prod.name}</p>
                                </div>
                                <div>
                                    <p className = "qttycart">{prod.cantidad}</p>
                                </div>
                                <div>
                                    <p className = "pricecart">{"$ " + prod.price}</p>
                                    
                                </div>
                                <div>
                                    <p className = "priceprod">{"$ " + prod.cantidad*prod.price}</p>
                                </div>
                                <div>
                                    <button className = "delproductcart" onClick = {() => {eliminar(prod.id)}}>Eliminar producto</button>
                                </div>

                                
                            </div>
                            )
                        })                        
                        }
                    
                    </div>
                    
                    <div>
                    <h1 className = "cantidadtotal">{cantidadCart()}</h1>
                    <h1>{acum}</h1>
                    </div>
                    <div className = "botonescart">
                        <button className = "emptycart" onClick = {vaciar}>Vaciar Carrito</button>
                        <Link to = "/checkout"><button className = "termcompra">Finalizar Compra</button></Link>
                    </div>
                </div>
               }
        </div>        
    )
}