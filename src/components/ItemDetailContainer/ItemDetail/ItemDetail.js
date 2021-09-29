import React, { useContext, useState } from "react"
import {Link} from "react-router-dom"
import "./itemdetail.css";
import { ItemCount } from "../../ItemCount/ItemCount"
import { CartContext } from "../../../context/CartContext";


export const ItemDetail = ({ id, name, desc, img, price, idCat, stock }) => {

    const [cantidad, setCantidad] = useState(1)
    const {agregar} = useContext(CartContext)
    
    const handleAdd = () => {
        agregar({id, name, desc, img, price, idCat, stock, cantidad})
    }

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
                        <ItemCount max = {stock} cantidad = {cantidad} setCantidad = {setCantidad} addCart = {handleAdd}/>
                        <Link to="/carrito"><button className = "addcartboton fincompra">Finalizar Compra</button></Link>
                    </div>
                </div>
            </div>
            <Link to={`/category/${idCat}`}>Ver todos los productos de {idCat}</Link>

        </div>
    )
}