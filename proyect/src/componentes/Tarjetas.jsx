import { Link } from 'react-router-dom';
/*modulando el codigo*/
function Tarjetas({ nombre, imagen }) {
    return (
        <Link to='/pag1'>
            <li className="sep">
                <div className="cont-imagen">
                    <img src={imagen} alt="img" />
                </div>
                <span className="text">{nombre}</span>
            </li>
        </Link>

    );
}
export default Tarjetas;
