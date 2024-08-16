import { createContext, useReducer, useState } from "react";
import { cartReducer, cartInicialState} from '../reducers/cart.js'

// 1 Crear Contexto
export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInicialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({
    type: 'CLEAN_CART'
  })

  return { state, addToCart, removeFromCart, clearCart}
}
// 2 Crear provider
// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
  
  const { state, addToCart, removeFromCart, clearCart} = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart,
      removeFromCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
