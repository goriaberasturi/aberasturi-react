import React, { createContext, useState } from 'react';

export const cartContext = createContext([]);

const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);

    const addLote = (lote) => {
        let tmp = cart.find(x => x.llave === lote.llave);

        if(tmp){
            if(tmp.cant + lote.cant > lote.stock) {
                alert('La cantidad de cabezas indicadas es mayor a la disponible.\nSe agrego al carrito la maxima cantidad disponible');
                tmp.cant = lote.stock;
            } else {
                tmp.cant += lote.cant;
                alert('Se agrego el lote al carrito');
            }
            
        } else {
            setCart([...cart, lote]);
            alert('Se agrego el lote al carrito');
        }
    }
    
    return (
        <cartContext.Provider value={{cart, addLote}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContext