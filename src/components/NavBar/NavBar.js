import React from 'react';
import "./navbar.css";
import logo from "../../kelderLogo.png"

export const NavBar = () => {
   
    return(

        <header className = "navbar">
            <div className = "rowContent">
                <div className = "brandName">
                    <img className= "logo" alt= "" src = "../../kelderLogo.png"/>
                </div>
                <div className = "categorias">
                    <p>Zapatillas</p>
                    <p>Zapatos</p>
                    <p>Pantalones</p>
                
                    {/* <img className= "cart" alt= "" src = "../../public/carrito.png"/> */}
                </div>
            </div>
            
        </header>
    );
}