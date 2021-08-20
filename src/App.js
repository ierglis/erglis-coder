import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import {PedirDatos} from "./helpers/PedirDatos"

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer PedirDatos = {PedirDatos}/>
    </div>
  );
}

export default App;
