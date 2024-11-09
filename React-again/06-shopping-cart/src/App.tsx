import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import { useProductFilters } from "./hooks/useProductsFilters";


function App() {

  // Usamos useProductFilters para filtrar los productos
  const { productsFiltered } = useProductFilters();

  return (
    <>
      <Header />
      <Products initialProducts={productsFiltered} />
      <Footer />
    </>
  );
}

export default App;
