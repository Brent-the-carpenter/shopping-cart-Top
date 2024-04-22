import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((currentCart) => {
      const foundIndex = currentCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (foundIndex !== -1) {
        const newCart = [...currentCart];
        newCart[foundIndex] = {
          ...newCart[foundIndex],
          quantity: newCart[foundIndex].quantity + 1,
        };
        return newCart;
      }

      return [...currentCart, { ...item, quantity: item.quantity || 1 }];
    });
  };

  const removeFromCart = (item) => {
    setCart((currentCart) =>
      currentCart.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  const increaseQuantity = (item) => {
    setCart((currentCart) =>
      currentCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decreaseQuantity = (item) => {
    setCart((currentCart) =>
      currentCart.map((cartItem) => {
        if (cartItem.id === item.id) {
          const newQuantity = cartItem.quantity - 1;
          return newQuantity > 0
            ? { ...cartItem, quantity: newQuantity }
            : cartItem;
        }
        return cartItem;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
