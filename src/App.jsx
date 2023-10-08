import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";
import "./App.css";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";
import { Footer } from "./components/Footer";
// import { FiltersContext } from "./context/filters";

export default function App() {
  const {filterProducts} = useFilters()

  const filteredProducts = filterProducts(initialProducts)
  return (
    <CartProvider>
    <main className="h-screen">
      <h3>Wenas noches</h3>
      <Cart/>
      <Header/>
      <Products products={filteredProducts} />
      <Footer />
    </main>
    </CartProvider>
  );
}
