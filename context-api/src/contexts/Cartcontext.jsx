import { createContext, useState } from "react";

export const CartContext = createContext(); // typeof context

export const CartContextProvider = ({ children }) => {
  // typeof contextProvider
  const [cart, setCart] = useState(10);
  const handleCartUpdate = (value) => {
    setCart(cart + value);
  };

  return (
    <CartContext.Provider value={{ cart, handleCartUpdate }}>
      {children}
    </CartContext.Provider>
  );
};
