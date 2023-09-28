import React, { createContext, useState } from 'react';

export const cartContext = createContext([]);

const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);

    const addLote = (lote) => {
        setCart([...cart, lote]);
        console.log(cart);
    }
    
    return (
        <cartContext.Provider value={{cart, addLote}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContext