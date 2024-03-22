import {BrowserRouter, Routes, Route} from "react-router-dom"


// components:
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

// user component:
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

// publicly available pages:
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

// Protected admin pages:
import AdminUsersPage from './pages/admin/AdminUsersPage';
import AdminEditUserPage from './pages/admin/AdminEditUserPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';


function App() {
  return (
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
<Route element={<RoutesWithUserChatComponent/>}>

{/*publicly available routes:*/}
<Route path="/" element={<HomePage/> } />
<Route path="/product-list" element={<ProductListPage/> } />
<Route path="/product-details" element={<ProductDetailsPage/> } />
<Route path="/product-details/:id" element={<ProductDetailsPage/> } />
<Route path="/cart" element={<CartPage/> } />
<Route path="/login" element={<LoginPage/> } />
<Route path="/register" element={<RegisterPage/> } />
<Route path="*" element="Page not exists 404" />
</Route>


{/*user protected routes:*/}
<Route element={<ProtectedRoutesComponent admin={false}/>}>
<Route path="/user" element={<UserProfilePage/> } />
<Route path="/user/my-orders" element={<UserOrdersPage/> } />
<Route path="/user/cart-details" element={<UserCartDetailsPage/> } />
<Route path="/user/order-details" element={<UserOrderDetailsPage/> } />
</Route>


{/*admin protected routes:*/}
<Route element={<ProtectedRoutesComponent admin={true} />}>
<Route path="/admin/users" element={<AdminUsersPage/> } />
<Route path="/admin/edit-user" element={<AdminEditUserPage/> } />
<Route path="/admin/products" element={<AdminProductsPage/> } />
</Route>

</Routes>


    <FooterComponent/>
    </BrowserRouter>
    
);
}

export default App;

