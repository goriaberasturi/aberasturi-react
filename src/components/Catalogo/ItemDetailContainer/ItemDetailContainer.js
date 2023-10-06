import React, { useEffect, useState } from 'react';
import './ItemDetailContainer.scss';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount/ItemCount';
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {

    const [lote, setLote] = useState([]);
    const { itemId } = useParams();

    useEffect(() => {
        const queryDb = getFirestore();
        const queryDoc = doc(queryDb, 'lotes', itemId);
        getDoc(queryDoc)
            .then((res) => setLote({id: res.id, ...res.data()}));
    }, [itemId]);

    return (
        <div className='ItemDetailContainer'>
            <div className='ItemDetail'>
                <img src={lote.img} alt='cardImg' />
                <div className='lote-div categoria'>{lote.categoria}</div>
                <div className='lote-div raza'>{lote.raza}</div>
                <div className='lote-div cabezas'><span>Cabezas:</span> {lote.cabezas}</div>
                <div className='lote-div peso'><span>Peso (Prom):</span> {lote.peso}</div>
                <div className='lote-div ubicacion'><span>Localidad:</span> {lote.ubicacion}</div>
                <div className='lote-div precio'><span>Precio ($/Kg):</span> $ {lote.precio}</div>
                <div className='lote-div observaciones'><span>Observaciones:</span>  {lote.observaciones}</div>
                <ItemCount lote={lote} stock={lote.cabezas} inicial={1}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer;