import React, {useContext} from 'react';
import './CartItem.scss';
import cross from './../../../images/close.png';
import { cartContext } from '../../../Context/CartContext';

const CartItem = ({cartItem}) => {
    const {removeLote} = useContext(cartContext);

    return (
        <div className='CartItem'>
            <img src={cartItem.prod.img} alt='cardImg'/>
            <div className='lote-div categoria'>{cartItem.prod.categoria}<div onClick={removeLote.bind(this,(cartItem.prod.id))}><img src={cross} alt='cross'/></div></div>
            <div className='lote-div raza'>{cartItem.prod.raza}</div>
            <div className='lote-div cabezas'><span>Cabezas:</span> {cartItem.cant}</div>
            <div className='lote-div peso'><span>Peso (Prom):</span> {cartItem.prod.peso}</div>
            <div className='lote-div precio'><span>Precio ($/Kg):</span> {`$ ${cartItem.prod.precio}`}</div>
            <div className='lote-div total'><span>Total:</span> {`$ ${cartItem.prod.precio*cartItem.prod.peso*cartItem.cant}`}</div>
        </div>
    )
}

export default CartItem;