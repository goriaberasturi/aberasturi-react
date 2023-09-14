import React from 'react';
import { useState } from 'react';
import logo from './../../images/logo.png';
import CartWidget from './CartWidget/CartWidget';
import './NavBar.scss';
import {Link} from 'react-router-dom';

const NavBar = () => {

    const [navColor, setNavColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 50) {
            setNavColor(true);
        } else {
            setNavColor(false);
        }
    }

    window.addEventListener('scroll', changeColor);

    return (
        <nav className={navColor ? 'navBarBg' : 'navBar'}>
            <Link to='/catalogo'><img src={logo} alt="Logo" /></Link>
            <ul className="navLinks">
                <li><Link className="navbarLink">Home</Link></li>
                <li><a href="https://www.mercadoagroganadero.com.ar/dll/inicio.dll" className="navbarLink" target="_blank" rel='noreferrer'>MAG</a></li>
                <li><Link to='/catalogo' className="navbarLink active">Catálogo</Link></li>
                <li><Link className="navbarLink">Cereales</Link></li>
                <li><Link className="navbarLink">Nosotros</Link></li>
            </ul>
            <Link to="/cart" className="navbarLink"><CartWidget/></Link>
        </nav>
    )
}

export default NavBar;