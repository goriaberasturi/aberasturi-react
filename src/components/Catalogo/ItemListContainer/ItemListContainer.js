import { useState, useEffect } from 'react';
import Lote from './../Lote/Lote.js';
import './ItemListContainer.scss';
import { Link, useParams } from 'react-router-dom';
import arrayLotes from '../../../json/lotes.json';

const images = require.context('./../../../images/LoteImgs');
const imageList = images.keys().map(img => images(img));
arrayLotes.forEach((item, index, array) => {
    array[index].img = imageList[index];
});

const ItemListContainer = () => {

    const [lotes, setLotes] = useState([]);
    const { cat } = useParams();

    useEffect(() => {
        const fetchLotes = async () => {
            try {
                const data = await new Promise((resolve) => {
                    resolve(cat ? arrayLotes.filter(i => i.categoria === cat) : arrayLotes);
                })
                setLotes(data)
                console.log(lotes)
            } catch (error) {
                console.log('Error: ', error);
            }
        }

        fetchLotes()        
    }, [cat])
    
    return (
        <div className='itemListContainer'>
            <h1>NUESTRO CATALOGO DE LOTES</h1>
            <div className='catalogo'>
                {lotes.map((p) => {
                    return (
                        <Link key={p.id} className='ItemLink' to={`/catalogo/item/${p.id}`}>
                            <Lote
                                img={p.img}
                                cabezas={p.cabezas}
                                categoria={p.categoria}
                                raza={p.raza}
                                peso={p.peso}
                                ubicacion={p.ubicacion}
                            />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default ItemListContainer;