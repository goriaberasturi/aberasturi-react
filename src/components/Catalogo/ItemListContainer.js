import { useState } from 'react';
import Lote from './Lote/Lote.js';
import './ItemListContainer.scss';

const images = require.context('./../../images/LoteImgs');
const imageList = images.keys().map(img => images(img));

const ItemListContainer = () => {

    
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
        {
            id: 14263,
            img: '',
            cabezas: 60,
            categoria: 'Terneras',
            raza: 'Aberdeen Angus Negros y Colorados',
            peso: 360,
            ubicacion: 'Cnel. Dorrego, Buenos Aires',
        },
        {
            id: 14264,
            img: '',
            cabezas: 120,
            categoria: 'Novillitos',
            raza: 'Aberdeen Angus Negros y Colorados',
            peso: 390,
            ubicacion: 'Arroyo Venado, Buenos Aires',
        },
        {
            id: 14265,
            img: '',
            cabezas: 35,
            categoria: 'Vaquillonas',
            raza: 'Aberdeen Angus Negros',
            peso: 310,
            ubicacion: 'Santa Teresa, La Pampa',
        },
    ]);

    producto.forEach((item, index, array) => array[index].img = imageList[index]);

    return (
        <div className='itemListContainer'>
            <h1>NUESTRO CATALOGO DE LOTES</h1>
            <div className='catalogo'>
                {producto.map((p) => {
                    return (
                        <Lote
                            key={p.id}
                            img={p.img}
                            cabezas={p.cabezas}
                            categoria={p.categoria}
                            raza={p.raza}
                            peso={p.peso}
                            ubicacion={p.ubicacion}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ItemListContainer;