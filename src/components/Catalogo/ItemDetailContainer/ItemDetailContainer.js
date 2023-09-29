import React from 'react';
import './ItemDetailContainer.scss';
import { useParams } from 'react-router-dom';
import arrayLotes from '../../../json/lotes.json';
import ItemCount from './ItemCount/ItemCount';

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

const ItemDetailContainer = () => {

    const { itemId } = useParams();

    const item = arrayLotes.find(i => String(i.id) === itemId);

    return (
        <div className='ItemDetailContainer'>
            <div className='ItemDetail'>
                <img src={item.img} alt='cardImg' />
                <div className='lote-div categoria'>{item.categoria}</div>
                <div className='lote-div raza'>{item.raza}</div>
                <div className='lote-div cabezas'><span>Cabezas: </span>{item.cabezas}</div>
                <div className='lote-div peso'><span>Peso: </span>{item.peso}</div>
                <div className='lote-div ubicacion'><span>Localidad: </span>{item.ubicacion}</div>
                <div className='lote-div observaciones'><span>Observaciones: </span>{item.observaciones}</div>
                <ItemCount id={item.id} stock={item.cabezas} inicial={1}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer;