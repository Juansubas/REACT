import { createContext, Dispatch, SetStateAction, useState, ReactNode, FC } from "react";
import { FiltersType } from "../types/filtersType";

// Creamos el contexto FiltersContext con dos partes:
// 1. El estado `filters` que contiene los valores actuales del filtro.
// 2. La función `setFilters` (Dispatch) que actualiza el estado `filters`.
// `SetStateAction` define que la actualización puede tomar una función o un valor directo.
export const FiltersContext = createContext<[FiltersType, Dispatch<SetStateAction<FiltersType>>] | undefined>(undefined);

interface FiltersProviderProps {
  children: ReactNode;
}

export const FiltersProvider: FC<FiltersProviderProps> = ({ children }) => {
  const [filters, setFilters] = useState<FiltersType>({
    minPrice: 250,
    category: "all"
  });

  return (
    <FiltersContext.Provider value={[filters, setFilters]}>
      {children}
    </FiltersContext.Provider>
  );
};
