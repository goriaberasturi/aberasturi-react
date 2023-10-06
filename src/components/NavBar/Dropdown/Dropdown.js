import { Link } from 'react-router-dom';
import './Dropdown.scss';


const Dropdown = () => {

    return (
        <div className='Dropdown'>
            <Link className="navbarLink" to={'/catalogo/categoria/Terneros-Terneras'}>Terneros-Terneras</Link>
            <Link className="navbarLink" to={'/catalogo/categoria/Terneros'}>Terneros</Link>
            <Link className="navbarLink" to={'/catalogo/categoria/Terneras'}>Terneras</Link>
            <Link className="navbarLink" to={'/catalogo/categoria/Vaquillonas'}>Vaquillonas</Link>
            <Link className="navbarLink" to={'/catalogo/categoria/Novillitos'}>Novillitos</Link>
            <Link className='navbarLink' to={'/catalogo'}>Todos</Link>
        </div>
    )
}

export default Dropdown;