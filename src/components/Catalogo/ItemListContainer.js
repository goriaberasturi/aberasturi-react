import { useState } from 'react';
import Lote from './Lote/Lote.js';
import './ItemListContainer.scss';


const images2 = require('./../../images/LoteImgs/14261.jpg');
const images = require.context('./../../images/LoteImgs');
const imageList = images.keys().map(img => images(img));

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

    producto.forEach((item, index, array) => array[index].img = imageList[index]);

    return (
        <div className='itemListContainer'>
            <h1>Catalogo de lotes</h1>
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