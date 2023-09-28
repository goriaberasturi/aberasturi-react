import React, { useContext } from 'react';
import carrito from './../../../images/cart.png';
import { cartContext } from '../../../Context/CartContext';

const CartWidget = () => {

    const {cart} = useContext(cartContext);

    return (
        <div className='cartWidget'>
            <img src={carrito} alt="cart" />
            <span>{cart.length}</span>
        </div>
    )
}

export default CartWidget;