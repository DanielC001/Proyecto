import logo from '../logo.svg'
import '../estilos/tarj_styles.css';
import Tarjetas from '../componentes/Tarjetas';


function Home() {
  return (
        <section>
          <h1>Titulo</h1>
          <ul className="lista">
            <Tarjetas nombre="E1" imagen={logo}></Tarjetas>
            <Tarjetas nombre="E2" imagen={logo}></Tarjetas>
            <Tarjetas nombre="E3" imagen={logo}></Tarjetas>
          </ul>
        </section>
  );
}

export default Home;