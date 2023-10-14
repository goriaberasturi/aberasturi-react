import React, { createContext, useState } from 'react';
import Swal from 'sweetalert2';

export const cartContext = createContext([]);

const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);

    const addLote = (lote) => {
        const tmp = cart.find(x => x.prod.id === lote.prod.id);

        if(tmp){
            if(tmp.cant + lote.cant > lote.stock) {
                Swal.fire({
                    title: 'La cantidad de cabezas indicadas es mayor a la disponible',
                    text: 'Se agrego al carrito la maxima cantidad disponible',
                    icon: 'warning',
                    timer: 4000,
                    showConfirmButton: false,
                });
                tmp.cant = lote.stock;

            } else {
                tmp.cant += lote.cant;
                Swal.fire({
                    title: 'Se agrego el lote al carrito',
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
            
        } else {
            setCart([...cart, lote]);
            Swal.fire({
                title: 'Se agrego el lote al carrito',
                icon: 'success',
                timer: 2500,
                showConfirmButton: false,
            });
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