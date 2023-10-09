import React, { useState, useContext } from 'react';
import { getFirestore, doc, getDoc, updateDoc, addDoc, collection } from 'firebase/firestore';
import { cartContext } from '../../Context/CartContext';
import OrderListItem from './OrderListItem/OrderListItem';
import './Checkout.scss'

const Checkout = () => {
    const { cart, removeLote, totalPrice } = useContext(cartContext);

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');

    const handleForm = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirm) {
            setError('Por favor, complete todos los campos obligatorios');
            return;
        }

        if (email !== emailConfirm) {
            setError('Los email informados no coinciden');
            return;
        }

        const total = totalPrice();

        const orden = {
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

            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
        }

        Promise.all(
            orden.items.map(async (orderItem) => {
                const queryDB = getFirestore();
                const queryDoc = doc(queryDB, 'lotes', orderItem.id);

                const productoDoc = await getDoc(queryDoc);
                const stockActual = productoDoc.data().cabezas;

                await updateDoc(queryDoc, {
                    cabezas: stockActual - orderItem.cantidad
                });
            })
        )
            .then(() => {
                const queryDB = getFirestore();
                const ordersCollection = collection(queryDB, 'orders');
                addDoc(ordersCollection, orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        orden.items.map((orderItem) => removeLote(orderItem.id));
                    })
                    .catch((error) => {
                        console.log('Error en la creacion de la orden', error);
                        setError('Error en orden');
                    })
            })
            .catch((error) => {
                console.log('No se pudo actualizar el stock', error);
                setError('No se actualizo el stock');
            });

        setNombre('');
        setApellido('');
        setTelefono('');
        setEmail('');
        setEmailConfirm('');
    }

    return (
        <div className='Checkout'>
            <h1>Generación de orden de compra</h1>
            <div className='formContainer'>
                <h2>Datos de la orden</h2>
                
                <form onSubmit={handleForm}>
                    <div className='formField'>
                        <input type='text' value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                        <span></span>
                        <label>Nombre</label>
                    </div>
                    <div className='formField'>
                        <input type='text' value={apellido} onChange={(e) => setApellido(e.target.value)}></input>
                        <span></span>
                        <label>Apellido</label>
                    </div>
                    <div className='formField'>
                        <input type='number' value={telefono} onChange={(e) => setTelefono(e.target.value)}></input>
                        <span></span>
                        <label>Telefono</label>
                    </div>
                    <div className='formField'>
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className='formField'>
                        <input type='email' value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)}></input>
                        <span></span>
                        <label>Confirmar email</label>
                    </div>
                    <div>
                        {error && <p>{error}</p>}
                        {ordenId && <p>Gracias por su compra!<br /> Su numero de orden es <span>{ordenId}</span></p>}
                    </div>
                    <div className='formBtns'>
                        <button type='submit'>Finalizar compra</button>
                    </div>
                </form>
            </div>

            <div className='orderList'>
                {cart.map((cartItem) => (
                    <div key={cartItem.prod.id} className='orderItem'>
                        <OrderListItem className="orderListItem" key={cartItem.prod.id} cartItem={cartItem} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Checkout;