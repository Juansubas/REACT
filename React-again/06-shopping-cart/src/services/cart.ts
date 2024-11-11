import { CartActions, CartItem } from "../types/cartTypes";
import { localStorageSave, removeDataFromLocalStorage } from "./localStorage";

export const cartReducer = (
  state: CartItem[],
  action: CartActions
): CartItem[] => {
  switch (action.type) {
    case "ADD_TO_CART":
      {
        const itemIndex = state.findIndex(
          (item) => item.id === action.payload.id
        );

        if (itemIndex === -1) {
          // Si no está en el carrito, agregamos el nuevo item
          const newArray = [...state, action.payload];
          localStorageSave(newArray);
          return newArray;
        }

        const newArray: CartItem[] = [
          ...state.slice(0, itemIndex),
          { ...state[itemIndex], quantity: state[itemIndex].quantity + 1 },
          ...state.slice(itemIndex + 1),
        ];
        localStorageSave(newArray);
        return newArray;
      }

    case "REMOVE_FROM_CART": {
      // Actualizamos el localStorage
      const newArray = state.filter((item) => item.id !== action.payload.id);
      localStorageSave(newArray);
      return newArray;
    }

    case "DECREASE_QUANTITY":
      {
        const itemIndex = state.findIndex(
          (item) => item.id === action.payload.id
        );

        if (itemIndex === -1) return state;

        if(state[itemIndex].quantity == 1){
          const newArray = state.filter((item) => item.id !== action.payload.id);
          localStorageSave(newArray);
          return newArray;
        }

        const newArray: CartItem[] = [
          ...state.slice(0, itemIndex),
          { ...state[itemIndex], quantity: state[itemIndex].quantity - 1 },
          ...state.slice(itemIndex + 1),
        ];
        localStorageSave(newArray);
        // Actualizamos el localStorage
        return newArray;
      }

    case "CLEAR_CART": {
      // Actualizamos el localStorage
      removeDataFromLocalStorage();
      return [];
    }
    default:
      return state;
  }
};
