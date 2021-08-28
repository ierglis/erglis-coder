import React from 'react';
import "./navbar.css";
import {CartWidget} from "../CartWidget/CartWidget";
import {Link} from "react-router-dom"

export const NavBar = () => {
   
    return(

        <header className = "navbar">
            <div className = "rowContent">
                <div className = "brandName">
                    <img className= "logo" alt= "" src = "/imagen/kelderLogo.png"/>
                </div>
                <div className = "categorias">
                    <Link to = {"/category/zapatillas"}><p>Zapatillas</p></Link>
                    <Link to = {"/category/zapatos"}><p>Zapatos</p></Link>
                    <Link to = {"/category/ojotas"}><p>Ojotas</p></Link>
                    <CartWidget/>
                </div>
            </div>
            
        </header>
    );
}