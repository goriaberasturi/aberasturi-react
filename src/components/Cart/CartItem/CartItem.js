import React from 'react';
import './CartItem.scss';

const CartItem = ({cartItem}) => {

    return (
        <div className='CartItem'>
            <img src={cartItem.prod.img} alt='cardImg'/>
            <div className='lote-div categoria'>{cartItem.prod.categoria}</div>
            <div className='lote-div raza'>{cartItem.prod.raza}</div>
            <div className='lote-div cabezas'><span>Cabezas:</span> {cartItem.cant}</div>
            <div className='lote-div peso'><span>Peso (Prom):</span> {cartItem.prod.peso}</div>
            <div className='lote-div precio'><span>Precio ($/Kg):</span> {`$ ${cartItem.prod.precio}`}</div>
            <div className='lote-div total'><span>Total:</span> {`$ ${cartItem.prod.precio*cartItem.prod.peso*cartItem.cant}`}</div>
        </div>
    )
}

export default CartItem;