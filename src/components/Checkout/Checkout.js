import React, { useState, useContext } from 'react';
import { getFirestore, doc, getDoc, updateDoc, addDoc, collection } from 'firebase/firestore';
import { cartContext } from '../../Context/CartContext';
import OrderListItem from './OrderListItem/OrderListItem';
import Swal from 'sweetalert2';
import './Checkout.scss';

const Checkout = () => {
    const { cart, removeLote, totalPrice, totalCab } = useContext(cartContext);

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [ordenId, setOrdenId] = useState('');

    const handleForm = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirm) {
            Swal.fire({
                title: 'Hay campos obligatorios sin llenar!',
                icon: 'warning',
                timer: 2500,
                showConfirmButton: false,

            });
            return;
        } else {
            if (email !== emailConfirm) {
                Swal.fire({
                    title: 'Los email informados no coinciden',
                    icon: 'warning',
                    timer: 2500,
                    showConfirmButton: false,
                });
                return;
            } else {
                Swal.fire({
                    title: `Gracias por su compra! Su clave de orden es ${ordenId}`,
                    icon: 'success',
                    timer: 2500,
                    showConfirmButton: false,
                });
            }
        }

        const total = totalPrice();

        const orden = {
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
                    })
            })
            .catch((error) => {
                console.log('No se pudo actualizar el stock', error);
            });

        setNombre('');
        setApellido('');
        setTelefono('');
        setEmail('');
        setEmailConfirm('');
    }

    console.log(`${cart.length > 0 ? '1' : '0'}`);

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
                <div className={`cartMsg ${cart.length ? 'sums' : 'off'}`}>
                    <div className='subjects'>
                        <span>Cabezas totales:</span> {totalCab()}
                    </div>
                    <div className='subjects'>
                        <span>Importe total:</span> $ {totalPrice()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;