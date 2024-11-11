import { useContext } from "react";
import { CartContext } from "../context/cart";

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    console.log("Se trato de usar el useCart afuera del contexto CartProvider");
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};

export default useCart;
