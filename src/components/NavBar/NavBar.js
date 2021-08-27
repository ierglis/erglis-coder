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
                    <Link to = {"/category/1"}><p>Zapatillas</p></Link>
                    <Link to = {"/category/2"}><p>Zapatos</p></Link>
                    <Link to = {"/category/3"}><p>Pantalones</p></Link>
                    <CartWidget/>
                </div>
            </div>
            
        </header>
    );
}