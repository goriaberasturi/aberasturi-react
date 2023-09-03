import React from 'react';
import cart from './../../../images/cart.png';

const CartWidget = () => {
    return (
        <div className='cart-div'>
            <img src={cart} alt="cart" />
            <span>0</span>
        </div>
    )
}

export default CartWidget;