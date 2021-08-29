import React from "react"
import {Link} from "react-router-dom"
import "./itemdetail.css";

export const ItemDetail = ({ id, name, desc, img, price, idCat }) => {

    console.log (idCat)
    return (
        <div className = "contenedordedetail">
            <h1>DETALLE DEL PRODUCTO</h1>
            <div className ="prodetail" key = {id}>
                <div className ="detailimg">
                    <img src={img} alt={name}/>
                </div>
                <div className = "detailingCont">
                    <div className="detcontent">
                        <h1>{name}</h1>
                        <p className = "descont">{desc}</p>
                        <p className ="pricecont">Precio: {price}</p>
                        <button className = "addcartboton">Agregar al carrito</button>
                    </div>
                </div>
            </div>
            <Link to={`/category/${idCat}`}>Ver todos los productos de {idCat}</Link>

        </div>
    )
}