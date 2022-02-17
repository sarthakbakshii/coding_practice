import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(0);
  //
  const handleCart = (v) => {
    setCart(cart + v);
  };

  return (
    <CartContext.Provider value={{ cart, handleCart }}>
      {children}
    </CartContext.Provider>
  );
};

// CartContext.Consumer
// Syntactic Sugar
