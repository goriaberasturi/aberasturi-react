import React from 'react';
import cart from './../../../images/cart.png';

const CartWidget = () => {
    return (
        <div className='cartWidget'>
            <img src={cart} alt="cart" />
            <span>0</span>
        </div>
    )
}

export default CartWidget;