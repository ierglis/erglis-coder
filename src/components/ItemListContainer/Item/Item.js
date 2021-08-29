import React from "react"
import "./item.css"
import {Link} from "react-router-dom"

export const Item = ( {id, name, img, desc, price} ) => {

    
    return(
        
            <div className ="prod" key = {id}>
                <div className = "itemsprod">    
                    <Link to = {`/detail/${id}`}><img src = {img} alt={desc}/></Link>
                    <Link to = {`/detail/${id}`}><h3>{name}</h3></Link>
                    <Link to = {`/detail/${id}`}><p>{desc}</p></Link>
                    <Link to = {`/detail/${id}`}><h4>{price}</h4></Link>
                    <button className="buybutt">Agregar al carrito</button>
                </div>
            </div>
       
    )
}