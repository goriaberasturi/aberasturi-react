import React from 'react';
import { useState } from 'react';
import logo from './../../images/logo.png';
import CartWidget from './CartWidget/CartWidget';
import './NavBar.scss';

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
            <a href="index.html"><img src={logo} alt="Logo" /></a>
            <ul className="navLinks">
                <li><a href="index.html" className="navbarLink active">Home</a></li>
                <li><a href="https://www.mercadoagroganadero.com.ar/dll/inicio.dll" className="navbarLink" target="_blank" rel='noreferrer'>MAG</a></li>
                <li><a href="pages/catalogoRemate.html" className="navbarLink">Catálogo</a></li>
                <li><a href="pages/cereales.html" className="navbarLink">Cereales</a></li>
                <li><a href="pages/nosotros.html" className="navbarLink">Nosotros</a></li>
            </ul>
            <a href="pages/login.html" className="navbarLink"><CartWidget/></a>
        </nav>
    )
}

export default NavBar;