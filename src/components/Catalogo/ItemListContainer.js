import { useState } from 'react';
import Lote from './Lote/Lote.js'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    const [producto, setProducto] = useState([
        {
            id: 14260,
            img: '',
            cabezas: 14,
            categoria: 'Terneros / Terneras',
            raza: 'Aberdeen Angus y Cruza Británicos',
            peso: 140,
            ubicacion: 'Rivera, Buenos Aires',
        },
        {
            id: 14261,
            img: '',
            cabezas: 164,
            categoria: 'Terneros / Terneras',
            raza: 'Aberdeen Angus y Cruza Británicos',
            peso: 180,
            ubicacion: 'Castelli, Buenos Aires',
        },
        {
            id: 14262,
            img: '',
            cabezas: 90,
            categoria: 'Terneros',
            raza: 'Aberdeen Angus Negros',
            peso: 200,
            ubicacion: 'Darregueira, Buenos Aires',
        },
    ]);

    return (
        <div>
            {producto.map((p) => {
                return (
                    <Lote
                        key={p.id}
                        img={p.img}
                        cabezas={p.name}
                        categoria={p.categoria}
                        raza={p.raza}
                        peso={p.peso}
                        ubicacion={p.ubicacion}
                    />
                )
            })}
        </div>
    )
}

export default ItemListContainer;