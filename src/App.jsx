import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout/MainLayout.jsx";
import ProductList from "./pages/ProductList/ProductList.jsx";
import CartItem from "./pages/CartItems/CartItem.jsx";

function App() {
  return (
    <BrowserRouter basename="/e-plantshopping">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="/product-list" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
