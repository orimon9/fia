import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";
import UserProfilePage from './pages/user/UserProfilePage';
import UserCartDetailsPage from './pages/user/UserCartDetailsPage';
import UserOrderDetailsPage from './pages/user/UserOrderDetailsPage';
import UserOrdersPage from './pages/user/UserOrdersPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path="/home" element={<HomePage/> } />
<Route path="/product-list" element={<ProductListPage/> } />
<Route path="/product-details" element={<ProductDetailsPage/> } />
<Route path="/cart" element={<CartPage/> } />
<Route path="/login" element={<LoginPage/> } />
<Route path="/register" element={<RegisterPage/> } />
<Route path="*" element="Page not exists 404" />

<Route element={<ProtectedRoutesComponent />}>

<Route path="/user" element={<UserProfilePage/> } />

<Route path="/user/my-orders" element={<UserOrdersPage/> } />

<Route path="/user/cart-details" element={<UserCartDetailsPage/> } />

<Route path="/user/order-details" element={<UserOrderDetailsPage/> } />
</Route>
    </Routes>
    </BrowserRouter>
    
);
}

export default App;

