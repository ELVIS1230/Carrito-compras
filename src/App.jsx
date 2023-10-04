import { useState } from "react";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";
import "./App.css";

export default function App() {
  const [products] = useState(initialProducts);
  const [filters, setFirlters] = useState({
    category: "all",
    minPrice: 50,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      
        return product.price >= filters.minPrice &&
        (filters.category === "all" || 
        product.category === filters.category);
    });
  };

  const filteredProducts = filterProducts(products)
  return (
    <main className="h-screen">
      <h3>Wenas noches</h3>
      <Header />
      <Products products={filteredProducts} />
    </main>
  );
}
