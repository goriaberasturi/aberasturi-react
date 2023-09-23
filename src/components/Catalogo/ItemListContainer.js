import { useState, useEffect } from 'react';
import Lote from './Lote/Lote.js';
import './ItemListContainer.scss';
import { Link, useParams } from 'react-router-dom';
import arrayLotes from '../../json/lotes.json';

const images = require.context('./../../images/LoteImgs');
const imageList = images.keys().map(img => images(img));


const ItemListContainer = () => {

    const [lotes, setLotes] = useState([]);
    const {cat} = useParams();

    useEffect(() => {
        const fetchLotes = async () => {
            try {
                const data = await new Promise((resolve) => {
                    resolve(cat ? arrayLotes.filter(i => i.categoria === cat) : arrayLotes);
                })
                setLotes(data);
            } catch(error) {
                console.log('Error: ', error);
            }
        }

        fetchLotes();
    }, [cat]);
    
    lotes.forEach((item, index, array) => {
        array[index].img = imageList[index];
    });

    return (
        <div className='itemListContainer'>
            <h1>NUESTRO CATALOGO DE LOTES</h1>
            <div className='catalogo'>
                {lotes.map((p) => {
                    return (
                        <Link key={p.id} className='ItemLink' to={`/catalogo/${p.id}`}>
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