import React, { ChangeEvent, useId } from "react";
import { FiltersType } from "../types/filtersType";
import "./Filters.css";
import useFilters from "../hooks/useFilters";

const Filters = () => {

    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const { filters, setFilters } = useFilters();

    const handleChangeMinPrice = (e : ChangeEvent<HTMLInputElement>) => {
        setFilters( (prevState : FiltersType) => ({
            ...prevState,
            minPrice: parseFloat(e.target.value)
        }));
    };

    const handleChangeCategory = (e : ChangeEvent<HTMLSelectElement>) => {
        setFilters ((prevState : FiltersType) => ({
            ...prevState,
            category: e.target.value
        }))
    };

  return (
    <section className="filters">
      <div >
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input id={minPriceFilterId} type="range" min="0" max="1000" onChange={handleChangeMinPrice} value={filters.minPrice} step="1" />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
            <option value="all">Todos</option>
            <option value="laptops">Portatiles</option>
            <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
};

export default Filters;
