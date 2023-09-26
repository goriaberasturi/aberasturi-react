import React, { useState, useContext } from 'react';
import './ItemCount.scss';
import { cartContext } from '../../../Context/CartContext';

const ItemCount = ({id, stock, inicial, onAdd }) => {

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
        addLote({id, count});
    }

    return (
        <div className='ItemCount'>
            <div className='counter'>
                <button className='counterBtn resta' onClick={restar}> - </button>
                <label>{count}</label>
                <button className='counterBtn suma' onClick={sumar}> + </button>
                <button className='counterBtn vaciar' onClick={QuitarTodo}> ◄ </button>
                <button className='counterBtn llenar' onClick={AgregarTodo}> ► </button>
            </div>
            <button className='agregar' onClick={handleAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;