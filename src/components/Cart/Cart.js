import React, {useContext} from 'react';
import { cartContext } from '../../Context/CartContext';
import CartItem from './CartItem/CartItem';
import './Cart.scss';
import { getFirestore, addDoc, collection} from 'firebase/firestore';


const Cart = () => {

    const {cart, totalPrice} = useContext(cartContext);

    const order = {
        buyer: {
            name: 'Gorilardo',
            email: 'gori@gmail.com',
            phone: '2923699856',
            address: 'fake street 123'
        },

        items: cart.map((prod) => ({
            id: prod.id,
            precio: prod.precio,
            cantidad: prod.cantidad
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
            {cart.map((cartItem) => {
                console.log(cartItem);
                return(
                    <CartItem key={cartItem.prod.id} cartItem={cartItem}/>
                )
            })}
            <button onClick={handleClick}>Terminar compra</button>
        </div>
    )
}

export default Cart