import React from 'react';
import './ItemDetailContainer.scss';
import { useParams } from 'react-router-dom';
import arrayLotes from '../../json/lotes.json';

const images = require.context('./../../images/LoteImgs');
const imageList = images.keys().map(imag => images(imag));

const ItemDetailContainer = () => {
    
    const {itemId} = useParams();

    arrayLotes.forEach((item, index, array) => {
        array[index].img = imageList[index];
    });

    const item = arrayLotes.find(i => String(i.id) === itemId);

    return (
        <div className='ItemDetailContainer'>
            <div className='ItemDetail'>
                <img src={item.img} alt='cardImg'/>
                <div className='lote-div categoria'>{item.categoria}</div>
                <div className='lote-div raza'>{item.raza}</div>
                <div className='lote-div cabezas'><span>Cabezas: </span>{item.cabezas}</div>
                <div className='lote-div peso'><span>Peso: </span>{item.peso}</div>
                <div className='lote-div ubicacion'><span>Localidad: </span>{item.ubicacion}</div>
                <div className='lote-div observaciones'><span>Observaciones: </span>{item.observaciones}</div>
            </div>
        </div>
    )
}

export default ItemDetailContainer;