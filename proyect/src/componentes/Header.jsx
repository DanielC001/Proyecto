// Creando header como componente
/*
Variables:
var -> variable global(casi no se usa)
const -> variable que nunca cambia
const x = 5; const y = "abcd"; const a = [1 ,2,3,4,5]; const obj={k1:"2",k2:"2"}
const listobjetos =[{},{},{}];
-------------------------------------
*/

/* Primera forma de hacer la funcion(problema con hosting)
function Header(){
    return(
        <div></div>
        );
}*/

/*
Segunda forma de hacer una funcion (arrowfunction, la funcion queda en una variable)
Tambien se llama funcion anonima

cost nombrefuncion = ()=>{
    return();
}

*/

const Header =()=>{
    return(
        <header>
        <ul className="navbar">
          <li>
            <img src="./img/gwentit.png" alt="logo" className="logo" />
          </li>
          <li>
            <button className="button mainB">Nosotros</button>
          </li>
          <li>
            <div className="buscar">
              <input type="text" placeholder="Buscar" />
              <i className="fas fa-search button iconlupa"></i>
            </div>
          </li>
          <li>
            <button className="button mainB">Iniciar sesión</button>
          </li>
          <li>
            <button className="button secondB">Registro</button>
          </li>
        </ul>
      </header>
    );
}

export default Header;