import React, {useContext} from 'react';
import { cartContext } from '../Context/CartContext';
import Lote from './../Catalogo/Lote/Lote';
import './Cart.scss';
import arrayLotes from '../../json/lotes.json';

const images = require.context('./../../images/LoteImgs');
const imageList = images.keys().map(img => images(img));
arrayLotes.forEach((item, index, array) => {
    array[index].img = imageList[index];
});

const Cart = () => {

    const {cart} = useContext(cartContext);

    const findLote = (arr, llave) => {
        return arr.find(x => x.id === llave);
    }

    return (
        <div className='Cart'>
            {cart.map((lt) => {
                let item = findLote(arrayLotes, lt.llave);
                return(
                    <Lote 
                    key={lt.llave} 
                    img={item.img} 
                    categoria={item.categoria}
                    raza={item.raza}
                    cabezas={lt.cant}
                    peso={item.peso}
                    ubicacion={item.ubicacion}
                    />
                )
            })}
        </div>
    )
}

export default Cart