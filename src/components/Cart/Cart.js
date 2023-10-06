import React, {useContext} from 'react';
import { cartContext } from '../../Context/CartContext';
import CartItem from './CartItem/CartItem';
import './Cart.scss';
import { getFirestore, addDoc, collection} from 'firebase/firestore';


const Cart = () => {

    const {cart, totalPrice, emptyCart} = useContext(cartContext);

    const order = {
        buyer: {
            name: 'Usuario',
            email: 'usuario@gmail.com',
            phone: '011-222-3333',
            address: 'fake street 123'
        },

        items: cart.map((cartItem) => ({
            id: cartItem.prod.id,
            precio: cartItem.prod.precio,
            cantidad: cartItem.cant
        })),

        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order).then(({id}) => console.log(id));
    }

    return (
        <div className='Cart'>
            <div className='cartMsg'>{cart.length ? 'Su carrito' : 'Su carrito esta vacío'}</div>
            {cart.map((cartItem) => {return(<CartItem key={cartItem.prod.id} cartItem={cartItem}/>)})}
            <div className={cart.length ? 'cartBtns' : 'cartBtnsOff'}>
                <button onClick={emptyCart}>Vaciar Carrito</button>
                <button onClick={handleClick}>Terminar compra</button>
            </div>
        </div>
    )
}

export default Cart