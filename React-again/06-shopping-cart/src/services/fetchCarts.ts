import { CartItem, CartsResponse } from '../types/cartTypes';

const fetchCarts = async () : Promise<CartItem[]> => {

    const data = await fetch('https://dummyjson.com/products');
    const dataJson : CartsResponse = await data.json();
    const products :CartItem[] = dataJson.products.map((product) => {
      return {
        id: product.id,
        title: product.title,
        description: product.description,
        category: product.category,
        price: product.price,
        discountPercentage: product.discountPercentage,
        rating: product.rating,
        stock: product.stock,
        thumbnail: product.thumbnail,
        quantity : 1,
      }
    })
    
  return products;
}

export default fetchCarts;