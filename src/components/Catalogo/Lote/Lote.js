import React from 'react';
import './Lote.scss';

const Lote = ({img, categoria, raza, cabezas, peso, ubicacion, precio}) => {

    return (
        <div className='lote'>
            <img src={img} alt='cardImg'/>
            <div className='lote-div categoria'>{categoria}</div>
            <div className='lote-div raza'>{raza}</div>
            <div className='lote-div cabezas'><span>Cabezas:</span> {cabezas}</div>
            <div className='lote-div precio'><span>Precio ($/Kg):</span> $ {peso}</div>
            <div className='lote-div peso'><span>Peso (Prom):</span> {peso}</div>
            <div className='lote-div ubicacion'><span>Localidad:</span> {ubicacion}</div>
        </div>
    )
}

export default Lote