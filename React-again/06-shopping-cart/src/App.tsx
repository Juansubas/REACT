import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import CartProvider from "./context/cart";
import { useProductFilters } from "./hooks/useProductsFilters";

function App() {
  // Usamos useProductFilters para filtrar los productos
  const { productsFiltered } = useProductFilters();

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products initialProducts={productsFiltered} />
      <Footer />
    </CartProvider>
  );
}

export default App;
