import React from "react"
import "./item.css"

export const Item = ( {id, name, img, desc, price} ) => {

    
    return(
        <div className ="prod" key = {id}>
            <div className = "itemsprod">    
                <img src = {img} alt={desc}/>
                <h3>{name}</h3>
                <p>{desc}</p>
                <h4>{price}</h4>
                <button className="buybutt">Agregar al carrito</button>
            </div>
        </div>

    )
}