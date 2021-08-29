import React from 'react';
import "./navbar.css";
import {Link} from "react-router-dom"

export const NavBar = () => {
   
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
                    <Link to = {"/carrito"}><img className= "cart" alt= "" src = "/imagen/cart.svg" /> </Link>
                </div>
            </div>
            
        </header>
    );
}