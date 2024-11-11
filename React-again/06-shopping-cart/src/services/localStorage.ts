import { CartItem } from "../types/cartTypes";

export const localStorageSave = (product : CartItem[]) => {
  localStorage.setItem('CartItems', JSON.stringify(product)); 
};

export const getDataFromLocalStorage =(() => {
  const data  = localStorage.getItem('CartItems')

  if(data == null) {
    return [];
  }

  const CartItems: CartItem[] = JSON.parse(data);

  return CartItems
})

export const removeDataFromLocalStorage = () => {
  localStorage.removeItem("CartItems");
}