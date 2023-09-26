import React, { useState } from 'react';
import './ItemCount.scss';

const ItemCount = ({ stock, inicial, onAdd }) => {

    const [count, setCount] = useState(inicial);

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

    const AgregarCantidad = () => {
        onAdd(count);
    }

    const AgregarTodo = () => {
        setCount(stock);
    }

    const QuitarTodo = () => {
        setCount(1);
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
            <button className='agregar' onClick={AgregarCantidad}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;