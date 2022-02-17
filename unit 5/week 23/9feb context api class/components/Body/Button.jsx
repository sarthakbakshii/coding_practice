import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";

export const Button = () => {
  const { handleCart } = useContext(CartContext);
  return (
    <button
      onClick={() => {
        handleCart(1);
      }}
    >
      Add to Cart
    </button>
  );
};
