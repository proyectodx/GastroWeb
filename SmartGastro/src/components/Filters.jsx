import { useState, useId } from "react";
import "./Filters.css";

export function Filters({ changeFilters }) {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    const newMinPrice = event.target.value;
    setMinPrice(newMinPrice);
    changeFilters((prevState) => ({
      ...prevState,
      minPrice: newMinPrice,
    }));
  };

  const handleChangeCategory = (event) => {
    changeFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div className="filters__container">
        <label htmlFor={minPriceFilterId}>Precio mínimo</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          value={minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
}
