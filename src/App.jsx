import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { MainLayout } from "./components/layout/MainLayout";
import { ProductDetail } from "./pages/ProductDetail";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
