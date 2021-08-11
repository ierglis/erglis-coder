import React from 'react';
import "./navbar.css";
// import logo from "../../../public/kelderLogo.png"
import cart from "./cart.svg"

export const NavBar = () => {
   
    return(

        <header className = "navbar">
            <div className = "rowContent">
                <div className = "brandName">
                    <img className= "logo" alt= "" src = "http://m.adamafel.com/img/clientes/logos/kelder.png"/>
                </div>
                <div className = "categorias">
                    <a href = "#"><p>Zapatillas</p></a>
                    <a href = "#"><p>Zapatos</p></a>
                    <a href = "#"><p>Pantalones</p></a>
                
                    <a href = "#"><img className= "cart" alt= "" src = {cart}/> </a>
                </div>
            </div>
            
        </header>
    );
}