import { useContext } from "react";
import { FiltersContext } from "../context/filters";
import { CartItem } from "../types/cartTypes";

const useFilters = () => {

    // Consumir el contexto FiltersContext
    // lo que hacemos es invocar el useContext y le pasamos el contexto creado.
    const filtersContextValue = useContext(FiltersContext);

    // Verificamos que filtersContextValue no sea undefined, pues al destructurarlo se trata
    // de destructurar un array de dos elementos, el primero es el estado y el segundo es la función setState.
    // Si filtersContextValue es undefined, significa que el contexto no ha sido consumido correctamente.
    if (!filtersContextValue) {
        throw new Error("FiltersContext debe ser usado dentro de un FiltersProvider");
    }

    // Desestructuramos la tupla de filtersContextValue
    const [filters, setFilters] = filtersContextValue;

    const filterProducts = (products: CartItem[]) => (
        // Filtramos primero por precio
        // Luego verificamos si la categoria del filtro es "all". Si es así, no filtramos por categoría.
        // Si no es "all", filtramos por la categoría del filtro.
        products.filter(product => 
            product.price >= filters.minPrice && 
            (filters.category === "all" || product.category === filters.category)
        )
    );

    return { filters, setFilters, filterProducts };
}

export default useFilters;
