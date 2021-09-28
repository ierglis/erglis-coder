import React, {useContext} from 'react';
import "./navbar.css";
import {Link} from "react-router-dom"
import { CartWidget } from '../CartWidget/CartWidget';
import { CartContext } from "../../context/CartContext";

export const NavBar = () => {
   
    const {cantidadCart} = useContext(CartContext)

    return(
   

        <header className = "navbar">
            <div className = "rowContent">
                <div className = "brandName">
                    <Link to = {"/"}><img className= "logo" alt= "" src = "/imagen/kelderLogo.png"/></Link>
                </div>
                <div className = "categorias">
                    <Link to = {"/category/zapatillas"}><p>Zapatillas</p></Link>
                    <Link to = {"/category/zapatos"}><p>Zapatos</p></Link>
                    <Link to = {"/category/ojotas"}><p>Ojotas</p></Link>
                    
                    {cantidadCart() > 0 ?
                    <CartWidget/> 
                    :
                    null
                    }
                </div>
            </div>
            
        </header>
        
    );
}