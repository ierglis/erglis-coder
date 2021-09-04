import React from "react"
import "./itemcount.css"

export const ItemCount = ({max, cantidad, setCantidad, addCart}) =>{

    const handleSuma = () => {
        if (cantidad < max){
            setCantidad(cantidad + 1)
        }
    }
    const handleResta = () =>{
        if (cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }
    
    return (
        <div>
            <div className = "cantidadprod">
                <button className = "butresta" onClick = {handleResta}>-</button>
                <p className = "numcantidad">{cantidad}</p>
                <button className = "butsuma" onClick = {handleSuma}>+</button>
            
            </div>
            <button className = "addcartboton" onClick = {addCart}>Agregar al carrito</button>
        </div>
    )
}