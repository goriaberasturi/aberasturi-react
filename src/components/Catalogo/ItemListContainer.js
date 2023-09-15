import Lote from './Lote/Lote.js';
import './ItemListContainer.scss';
import { Link, useParams } from 'react-router-dom';

const images = require.context('./../../images/LoteImgs');
const imageList = images.keys().map(img => images(img));

const ItemListContainer = ({items}) => {
    
    items.forEach((item, index, array) => {
        array[index].img = imageList[index];
    });

    return (
        <div className='itemListContainer'>
            <h1>NUESTRO CATALOGO DE LOTES</h1>
            <div className='catalogo'>
                {items.map((p) => {
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