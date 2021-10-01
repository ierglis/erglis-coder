import React, { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import "./cartscreen.css"
import {Link} from "react-router-dom"

export const CartScreen = () => {
    
    const {cart, eliminar, vaciar, cantidadCart} = useContext(CartContext)
    
    
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
                                <div className = "imgcartcont">
                                    <img className="imgcart" alt= "." src = {prod.img} />
                                </div>
                                <div className = "namecartcont">
                                    <p className = "namecart">{prod.name}</p>
                                </div>
                                <div className = "qttycartcont">
                                    <p className = "qttycart">{prod.cantidad}</p>
                                </div>
                                <div className = "pricecartcont">
                                    <p className = "pricecart">{"$ " + prod.price}</p>
                                    
                                </div>
                                <div className = "pricetotcartcont">
                                    <p className = "priceprod">{"$ " + prod.cantidad*prod.price}</p>
                                </div>
                                <div className = "delcartcont">
                                    <button className = "delproductcart" onClick = {() => {eliminar(prod.id)}}>Eliminar producto</button>
                                </div>

                                
                            </div>
                            )
                        })                        
                        }
                    
                    </div>
                    
                    <div className = "totalcarrito">
                    <h3 className = "cantidadtotal">Cantidad total: {cantidadCart()}</h3>
                    <h3>El total a abonar es de : {"$ " + acum}</h3>
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