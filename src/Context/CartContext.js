import React, { createContext, useState } from 'react';

export const cartContext = createContext([]);

const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);

    const addLote = (lote) => {
        let tmp = cart.find(x => x.llave === lote.llave);

        if(tmp){
            if(tmp.cant + lote.cant > lote.stock) {
                alert('No hay stock disponible para la cantidad indicada.\nSe agrego al carrito la maxima cantidad disponible');
                tmp.cant = lote.stock;
            } else {
                tmp.cant += lote.cant;
            }

        } else {
            setCart([...cart, lote]);
        }
    }
    
    return (
        <cartContext.Provider value={{cart, addLote}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContext