// CartContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useCart } from 'react-use-cart';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { cart, addItem, updateItemQuantity } = useCart();

  useEffect(() => {
    // Load cart data from local storage
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      // If the item already exists in the cart, update its quantity
      updateItemQuantity(item.id, existingItem.quantity + 1);
    } else {
      // If the item doesn't exist, add it to the cart
      addItem(item);
    }
  };

  const removeFromCart = (itemId) => {
    // Implement your remove-from-cart logic here
    const updatedCart = cart.filter(item => item.id !== itemId);
    updateItemQuantity(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useLocalCart = () => useContext(CartContext);
