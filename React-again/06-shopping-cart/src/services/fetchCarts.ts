import { CartItem, CartsResponse } from '../types/cartTypes';

const fetchCarts = async () : Promise<CartItem[]> => {

    const data = await fetch('https://dummyjson.com/products');
    console.log(data);
    const dataJson : CartsResponse = await data.json();
    console.log(dataJson);
    
  return dataJson.products;
}

export default fetchCarts;