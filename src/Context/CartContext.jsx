import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartComponentContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      if (existingItemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += item.quantity;
        return updatedCart;
      } else {
        return [...prevCart, item];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, setCart, agregarAlCarrito }}>
      {children}
    </CartContext.Provider>
  );
};
