import React, { useState, useContext } from 'react';
import './ItemCount.scss';
import { cartContext } from '../../../../Context/CartContext';

const ItemCount = ({id, stock, inicial}) => {

    const [count, setCount] = useState(inicial);

    const {addLote} = useContext(cartContext);

    const sumar = () => {
        if (stock > count) {
            setCount(count + 1);
        }
    }

    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const AgregarTodo = () => {
        setCount(stock);
    }

    const QuitarTodo = () => {
        setCount(1);
    }

    const handleAdd = () => {
        addLote({llave: id, cant: count, stock: stock});
    }

    return (
        <div className='ItemCount'>
            <div className='counter'>
                <button className={`counterBtn vaciar${count===1 ? ' off' : ''}`} onClick={QuitarTodo}> ◄ </button>
                <button className={`counterBtn resta${count===1 ? ' off' : ''}`} onClick={restar}> - </button>
                <label>{count}</label>
                <button className={`counterBtn suma${count===stock ? ' off' : ''}`} onClick={sumar}> + </button>
                <button className={`counterBtn llenar${count===stock ? ' off' : ''}`} onClick={AgregarTodo}> ► </button>
            </div>
            <button className='agregar' onClick={handleAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;