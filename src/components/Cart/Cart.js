import React, {useContext} from 'react';
import { cartContext } from '../../Context/CartContext';
import CartItem from './CartItem/CartItem';
import './Cart.scss';
import arrayLotes from '../../json/lotes.json';

const images = require.context('./../../images/LoteImgs');
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
                    <CartItem
                    key={lt.llave}
                    id={lt.llave}
                    img={item.img}
                    categoria={item.categoria}
                    raza={item.raza}
                    cabezas={lt.cant}
                    peso={item.peso}
                    />
                )
            })}
            <div className='cartCheck'>

            </div>
        </div>
    )
}

export default Cart