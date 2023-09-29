import React, {useContext} from 'react';
import './CartItem.scss';
import close from './../../../images/close.png';

const CartItem = ({id, img, categoria, raza, cabezas, peso}) => {

    return (
        <div className='CartItem'>
            <img src={img} alt='cardImg'/>
            <div className='lote-div categoria'>{categoria}</div>
            <div className='lote-div raza'>{raza}</div>
            <div className='lote-div cabezas'><span>Cabezas: </span>{cabezas}</div>
            <div className='lote-div peso'><span>Peso: </span>{peso}</div>
        </div>
    )
}

export default CartItem;