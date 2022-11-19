import { Route, Routes } from "react-router-dom";
import Category from "../pages/Category";
import { Kitchen } from "../pages/Kitchen";
import Product from "../pages/Product";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Kitchen />} />
      <Route path="/products" element={<Product />} />
      <Route path="/categories" element={<Category />} />
    </Routes>
  );
};
