import React from "react"
import {Link} from "react-router-dom"
export const ItemDetail = ({id, nombre, desc, img, precio, catId}) => {


    return (
        <div>
            <h2>{nombre}</h2>
            <p>Precio: {precio}</p>
            <img src={img} alt={nombre}/>
            <p>{desc}</p>


            <Link to={`/category/${catId}`}>Volver</Link>
        </div>
    )
}