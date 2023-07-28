import React, { createContext, useState } from 'react';

// Create the context
const CartContext = createContext();

// Create the context provider
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };