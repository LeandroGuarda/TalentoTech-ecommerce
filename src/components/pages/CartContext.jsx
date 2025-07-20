// src/context/CartContext.jsx
import { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);


    
    useEffect(() => {
      console.log(cart);
     localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])
    
 

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
