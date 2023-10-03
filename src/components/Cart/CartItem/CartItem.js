import React from 'react';
import './CartItem.scss';

const CartItem = ({prod}) => {

    console.log (prod);

    return (
        <div className='CartItem'>
            <img src={prod.img} alt='cardImg'/>
            <div className='lote-div categoria'>{prod.categoria}</div>
            <div className='lote-div raza'>{prod.raza}</div>
            <div className='lote-div cabezas'><span>Cabezas: </span>{prod.cabezas}</div>
            <div className='lote-div peso'><span>Peso: </span>{prod.peso}</div>
        </div>
    )
}

export default CartItem;