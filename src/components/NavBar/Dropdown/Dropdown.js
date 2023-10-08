import { NavLink } from 'react-router-dom';
import './Dropdown.scss';


const Dropdown = () => {

    return (
        <div className='Dropdown'>
            <NavLink className={({isActive, isPending}) => isPending ? 'navbarLink' : isActive ? 'navbarLink ddActive' : 'navbarLink'} to={'/catalogo/categoria/Terneros-Terneras'}>Terneros-Terneras</NavLink>
            <NavLink className={({isActive, isPending}) => isPending ? 'navbarLink' : isActive ? 'navbarLink ddActive' : 'navbarLink'} to={'/catalogo/categoria/Terneros'}>Terneros</NavLink>
            <NavLink className={({isActive, isPending}) => isPending ? 'navbarLink' : isActive ? 'navbarLink ddActive' : 'navbarLink'} to={'/catalogo/categoria/Terneras'}>Terneras</NavLink>
            <NavLink className={({isActive, isPending}) => isPending ? 'navbarLink' : isActive ? 'navbarLink ddActive' : 'navbarLink'} to={'/catalogo/categoria/Vaquillonas'}>Vaquillonas</NavLink>
            <NavLink className={({isActive, isPending}) => isPending ? 'navbarLink' : isActive ? 'navbarLink ddActive' : 'navbarLink'} to={'/catalogo/categoria/Novillitos'}>Novillitos</NavLink>
            <NavLink className={({isActive, isPending}) => isPending ? 'navbarLink' : isActive ? 'navbarLink ddActive' : 'navbarLink'} to={'/catalogo/'}>Todos</NavLink>
        </div>
    )
}

export default Dropdown;