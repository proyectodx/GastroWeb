import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products.jsx";
import { Header } from "./components/Header.jsx";
import { useState } from "react";

function App() {
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const getFilteredProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  const filteredProducts = getFilteredProducts(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
