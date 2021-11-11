//import logo from './logo.svg';
import './App.css';
import Home from './paginas/home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pag1 from './paginas/pag1';
import Layout from './layouts/Layout';

//dejar el layout por fuera para que no muestre todo el contenido en una sola pagina

function App() {
  return (
    <div className="App">
      <div className='bg-darken-4'>hola mundo tailwind</div>
      <Router>
        <Layout>
          <Switch>
            <Route path='/pag1'>
              <Pag1 />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}
// yarn add react-router-dom -> instalar react router


/*
let -> variable que va a cambiar mas adelante
const -> 
objeto en javascript -> parecido a el diccionario de pyton{clave:"valor",clave:"valor"}

*/
/* primera opcion
function Tarjetas(props) {
  return (
    <li className="sep">
      <div className="cont-imagen">
        <img src={props.imagen} alt="img" />
      </div>
      <span className="text">{props.nombre}</span>
    </li>
  );
}
*/

export default App;
