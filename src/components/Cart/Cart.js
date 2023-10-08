import React, {useContext} from 'react';
import { cartContext } from '../../Context/CartContext';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom'
import './Cart.scss';


const Cart = () => {

    const {cart, totalPrice, totalCab, emptyCart} = useContext(cartContext);

    return (
        <div className='Cart'>
            <div className='cartMsg headline'>{cart.length ? 'Su carrito' : 'Su carrito esta vacío'}</div>
            {cart.map((cartItem) => {return(<CartItem key={cartItem.prod.id} cartItem={cartItem}/>)})}
            <div className={`cartMsg ${cart.length ? 'sums' : 'off'}`}>
                <div className='subjects'>
                    <span>Cabezas totales:</span> {totalCab()}
                </div>
                <div className='subjects'>
                    <span>Importe total:</span> $ {totalPrice()}
                </div>
            </div>
            <div className={cart.length ? 'cartBtns' : 'cartBtnsOff'}>
                <button onClick={emptyCart}>Vaciar Carrito</button>
                <Link to='/checkout'>
                    <button>Finalizar compra</button>
                </Link>
            </div>
        </div>
    )
}

export default Cart