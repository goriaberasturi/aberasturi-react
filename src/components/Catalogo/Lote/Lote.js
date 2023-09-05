import React from 'react'

const Lote = ({img, categoria, raza, cabezas, peso, ubicacion}) => {
    return (
        <div className='loteCard'>
            <img src={img} alt='cardImg'/><br/>
            <div className='categoria'>{categoria}</div>
            <div className='raza'>{raza}</div>
            <div className='cabezas'>{cabezas}</div>
            <div className='peso'>{peso}</div>
            <div className='ubicacion'>{ubicacion}</div>
        </div>
    )
}

export default Lote