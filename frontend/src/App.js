import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" elemen t={<LoginPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="product-list" element={<ProductListPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element="Page does not exist 404" />
        {/* <Route path="/" component={HomePage} /> in previous versions of react-router-dom */}
        <Route element={<ProtectedRoutesComponent />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-orders" element={<UserOrdersPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route
            path="/user/order-details"
            element={<UserOrderDetailsPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
