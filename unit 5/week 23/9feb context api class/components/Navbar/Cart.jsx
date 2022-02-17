// state of cart

import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  return <div>Cart: {cart}</div>;
};
