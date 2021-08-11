import React from 'react';
import "./navbar.css";
import {CartWidget} from "../CartWidget/CartWidget";

export const NavBar = () => {
   
    return(

        <header className = "navbar">
            <div className = "rowContent">
                <div className = "brandName">
                    <img className= "logo" alt= "" src = "/imagen/kelderLogo.png"/>
                </div>
                <div className = "categorias">
                    <a href = "#zapatillas"><p>Zapatillas</p></a>
                    <a href = "#zapatos"><p>Zapatos</p></a>
                    <a href = "#pantalones"><p>Pantalones</p></a>
                    <CartWidget/>
                </div>
            </div>
            
        </header>
    );
}