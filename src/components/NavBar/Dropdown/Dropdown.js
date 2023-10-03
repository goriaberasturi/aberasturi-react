import { Link } from 'react-router-dom';
import './Dropdown.scss';


const Dropdown = () => {

    return (
        <div className='Dropdown'>
            <Link className="navbarLink" to={'/catalogo/category/Terneros-Terneras'}>Terneros-Terneras</Link>
            <Link className="navbarLink" to={'/catalogo/category/Terneros'}>Terneros</Link>
            <Link className="navbarLink" to={'/catalogo/category/Terneras'}>Terneras</Link>
            <Link className="navbarLink" to={'/catalogo/category/Vaquillonas'}>Vaquillonas</Link>
            <Link className="navbarLink" to={'/catalogo/category/Novillitos'}>Novillitos</Link>
            <Link className='navbarLink' to={'/catalogo'}>Todos</Link>
        </div>
    )
}

export default Dropdown;