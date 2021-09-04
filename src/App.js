import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { CartScreen } from "./components/CartWidget/CartScreen/CartScreen"
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer" 
import { CartContext } from "./context/CartContext";
import { useState} from "react"


function App() {

  const [cart, setCart] = useState([])
  
  
  const agregar = (prod) => {
    setCart([
        ...cart,
        prod,
    ])
  }

  const eliminar = (id) => {
    setCart (cart.filter(prod => prod.id !== id))
  }

   const cantidadCart = () => {
   return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
  }

  const vaciar = () => {
    setCart ([])
  }


  return (
    <div>
      
        <CartContext.Provider value = {{cart, agregar, eliminar, cantidadCart, vaciar}}>
          <BrowserRouter>
            <NavBar/>
            <Switch>

              <Route exact path = "/">
                <ItemListContainer/>
              </Route>

              <Route exact path = "/category/:catId">
                <ItemListContainer/>
              </Route>

              <Route exact path = "/carrito">
                <CartScreen/>
              </Route>

              <Route exact path = "/detail/:itemId">
                <ItemDetailContainer/>
              </Route>

            </Switch>
          </BrowserRouter>
        </CartContext.Provider>
      
    </div>
  );
}

export default App;