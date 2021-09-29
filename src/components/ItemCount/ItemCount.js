 import React, { useState } from 'react';
import "./itemcount.css";



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

    const [changeClass, setChangeClass] = useState(false)
    
    const change = () => {
        return  setChangeClass(true)
    }

    return (
        <div>
            <div className = { changeClass ? "dnone" : "cantidadprod"}>
                <button className = "butresta" onClick = {handleResta}>-</button>
                <p className = "numcantidad">{cantidad}</p>
                <button className = "butsuma" onClick = {handleSuma}>+</button>
            
            </div>
            <button className = { changeClass ? "dnone" : "addcartboton"} onClick = {()=>{
                 addCart()
                 change()
                            }                }
                >Agregar al carrito</button>
        </div>
    )
}