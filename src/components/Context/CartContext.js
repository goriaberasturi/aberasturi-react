import React, { createContext } from 'react';

export const cartContext = createContext([]);

const CartContext = ({children}) => {
    return (
        <cartContext.Provider value={{cart : []}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContext