import { useEffect, useState } from "react";
import { CartItem } from "../types/cartTypes";
import useFilters from "./useFilters"; 
import fetchCarts from "../services/fetchCarts";

export const useProductFilters = () => {

  const { filterProducts } = useFilters();
  
  const [products, setProducts] = useState<CartItem[]>([]);

  useEffect(() => {
    const getItems = async () => {
      const products: CartItem[] = await fetchCarts();
      setProducts(products);
    };

    getItems();
  }, []);
  
  const productsFiltered = filterProducts(products);

  return { productsFiltered };
}