import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { CartScreen } from "./components/CartWidget/CartScreen/CartScreen"
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer" 
import { CartProvider } from "./context/CartContext"



function App() {


  return (
    <div>
      
        <CartProvider>
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
        </CartProvider>
      
    </div>
  );
}

export default App;