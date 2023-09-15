import React from 'react';
import './ItemDetailContainer.scss';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = ({items}) => {

    const {itemId} = useParams();
    const item = items.find(item => String(item.id) === itemId);


    return (
        <div className='ItemDetailContainer'>
            <div className='ItemDetail'>
                <img src={item.img} alt='cardImg'/>
                <div className='lote-div categoria'>{item.categoria}</div>
                <div className='lote-div raza'>{item.raza}</div>
                <div className='lote-div cabezas'><span>Cabezas: </span>{item.cabezas}</div>
                <div className='lote-div peso'><span>Peso: </span>{item.peso}</div>
                <div className='lote-div ubicacion'><span>Localidad: </span>{item.ubicacion}</div>
            </div>
        </div>
    )
}

export default ItemDetailContainer