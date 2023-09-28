import { useState, useEffect } from 'react';
import Lote from './../Lote/Lote.js';
import './ItemListContainer.scss';
import { Link, useParams } from 'react-router-dom';
import arrayLotes from '../../../json/lotes.json';

// Se obtiene al ruta de react
const images = require.context('./../../../images/LoteImgs');
const imageList = [];

// Se crea un objeto de la forma {idLote1 : rutaReact1, idLote2 : rutaReact2, ...}
// Se le quitan a las keys del objeto images los ".", "/" y extension (".jpg") para que quede el id del lote
images.keys().map(img => {
    imageList[img.replace('./', '').replace('.jpg', '')] = images(img);
});

// Se busca el id en el json importado y luego se le asigna a la propiedad imagen, el valor obtenido de buscar el id en el objeto creado en al linea 12
Object.keys(imageList).forEach(imag => {
    arrayLotes.find(x => x.id === parseInt(imag)).img = imageList[imag];
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