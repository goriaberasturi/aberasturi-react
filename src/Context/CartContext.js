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

            } else {
                tmp.cant += lote.cant;
                alert('Se agrego el lote al carrito');
            }
            
        } else {
            setCart([...cart, lote]);
            alert('Se agrego el lote al carrito');
        }
    }

    const totalPrice = () => {
        const suma = cart.reduce((acum, cartItem) => {
            return acum + cartItem.prod.precio*cartItem.cant*cartItem.prod.peso;
        }, 0);
        return suma;
    }
    
    const totalCab = () => {
        const suma = cart.reduce((acum, cartItem) => {
            return acum + cartItem.cant;
        }, 0);
        return suma;
    }

    const emptyCart = () => {
        setCart([]);
    }

    const removeLote = (key) => {
        const newCart = cart.filter((cartItem) => cartItem.prod.id !== key);
        setCart(newCart);
    }
    
    return (
        <cartContext.Provider value={{cart, addLote, totalPrice, totalCab, emptyCart, removeLote}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContext