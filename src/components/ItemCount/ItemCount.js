 import React, { useState } from 'react';
import "./itemcount.css";



export const ItemCount = ({max, cantidad, setCantidad, addCart, addOEnd}) =>{

    
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
        <div className = "countClass">
            <div className = { changeClass ? "dnone" : "cantidadprod"}>
                <button className = "butresta" onClick = {handleResta}>-</button>
                <p className = "numcantidad">{cantidad}</p>
                <button className = "butsuma" onClick = {handleSuma}>+</button>
            
            </div>
            <button className = { changeClass ? "dnone" : "addcartboton agregarbot"} onClick = {()=>{
                 addCart()
                 change()
                 addOEnd(true)
                }}
                >Agregar al carrito</button>
        </div>
    )
}