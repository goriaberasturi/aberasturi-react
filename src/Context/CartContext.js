import React, { createContext, useState } from 'react';

export const cartContext = createContext([]);

const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);

    const addLote = (lote) => {
        const tmp = cart.find(x => x.prod.id === lote.prod.id);

        if(tmp){
            if(tmp.cant + lote.cant > lote.stock) {
                alert('La cantidad de cabezas indicadas es mayor a la disponible.\nSe agrego al carrito la maxima cantidad disponible');
                tmp.cant = lote.stock;
                console.log(cart);
            } else {
                tmp.cant += lote.cant;
                alert('Se agrego el lote al carrito');
                console.log(cart);
            }
            
        } else {
            setCart([...cart, lote]);
            alert('Se agrego el lote al carrito');
            console.log(cart);
        }
    }

    const totalPrice = () => {
        const suma = cart.reduce((acum, item) => {
            return acum + item.precio;
        }, 0);
        return suma;
    }
    
    return (
        <cartContext.Provider value={{cart, addLote, totalPrice}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContext