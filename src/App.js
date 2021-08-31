import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          

          <Route path = "/category/:catId">
            <ItemListContainer/>
          </Route>

          <Route exact path = "/">
            <ItemListContainer/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
