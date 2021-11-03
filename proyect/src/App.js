import logo from './logo.svg';
import './App.css';
<public />

function App() {
  return (
    <div className="App">
      <header>
        <ul class="navbar">
          <li>
            <img src="./img/gwentit.png" alt="logo" class="logo" />
          </li>
          <li>
            <button class="button mainB">Nosotros</button>
          </li>
          <li>
            <div class="buscar">
              <input type="text" placeholder="Buscar" />
              <i class="fas fa-search button iconlupa"></i>
            </div>
          </li>
          <li>
            <button class="button mainB">Iniciar sesión</button>
          </li>
          <li>
            <button class="button secondB">Registro</button>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <h1>Titulo</h1>
          <ul class="lista">
            <Tarjetas nombre="E1" imagen={logo}></Tarjetas>
            <Tarjetas nombre="E2" imagen={logo}></Tarjetas>
            <Tarjetas nombre="E3" ></Tarjetas>
          </ul>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

/*
let -> variable que va a cambiar mas adelante
const -> 
objeto en javascript -> parecido a el diccionario de pyton{clave:"valor",clave:"valor"}

*/ 

function Tarjetas(props) {
  return (
    <li class="sep">
      <div class="cont-imagen">
        <img src={props.imagen} alt="img" />
      </div>
      <span class="text">{props.nombre}</span>
    </li>
  );
}
export default App;
