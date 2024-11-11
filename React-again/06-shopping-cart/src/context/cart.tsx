import { createContext, useReducer } from "react";
import { CartItem, CartContextType } from "../types/cartTypes";
import { cartReducer } from "../services/cart";
import { getDataFromLocalStorage } from "../services/localStorage";

// Definir el contexto con el tipo correcto
export const CartContext = createContext<
  CartContextType | undefined
>(undefined);

// Hook que gestiona el estado del carrito con useReducer
const useCartReducer = () => {

    const initialData : CartItem[] = getDataFromLocalStorage();

    console.log(initialData)

  const [state, dispatch] = useReducer(cartReducer, initialData); 

  const addToCart = (product : CartItem) => dispatch({
    type: 'ADD_TO_CART',
    payload: product 
  });

  const decreaseQuantityFromCart = (product : CartItem) => dispatch({
    type: 'DECREASE_QUANTITY',
    payload: product
  });

  const removeFromCart = (product : CartItem) => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  });

  const clearCart = () => dispatch({
    type: 'CLEAR_CART'
  });


  return { cart: state, addToCart, removeFromCart, clearCart, decreaseQuantityFromCart };
};

// Componente CartProvider que envuelve a los hijos con el contexto de carrito
const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { cart, addToCart, removeFromCart, clearCart, decreaseQuantityFromCart } = useCartReducer();

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, decreaseQuantityFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
