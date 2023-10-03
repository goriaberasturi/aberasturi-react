import React from 'react';
import './CartItem.scss';

const CartItem = ({cartItem}) => {

    console.log (cartItem);

    return (
        <div className='CartItem'>
            <img src={cartItem.prod.img} alt='cardImg'/>
            <div className='lote-div categoria'>{cartItem.prod.categoria}</div>
            <div className='lote-div raza'>{cartItem.prod.raza}</div>
            <div className='lote-div cabezas'><span>Cabezas: </span>{cartItem.cant}</div>
            <div className='lote-div peso'><span>Peso: </span>{cartItem.prod.peso}</div>
        </div>
    )
}

export default CartItem;