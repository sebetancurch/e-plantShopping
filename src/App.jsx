import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout/MainLayout.jsx";
import ProductList from "./pages/ProductList/ProductList.jsx";
import CartItem from "./pages/CartItems/CartItem.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";

function App() {
  return (
    <BrowserRouter basename="/e-plantShopping">
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/" element={<MainLayout />}>
          <Route index path="/product-list" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
