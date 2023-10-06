import React, {useState} from 'react';
import { getFirestore, addDoc, collection, doc, getDoc} from 'firebase/firestore';
import { cartContext } from '../../Context/CartContext';

const Checkout = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');
    const [mensaje, setMensaje] = useState('');

    return (
        <div className='Checkout'>

        </div>
    )
}

export default Checkout