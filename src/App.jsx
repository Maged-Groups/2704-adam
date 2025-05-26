import { Suspense, lazy } from 'react';
import { Routes, Route, Outlet } from 'react-router';
import TopNavbar from './layouts/TopNavbar';
import Footer from './layouts/Footer';
import Home from './layouts/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ShoppingCart from './components/ShoppingCart';
import Login from './pages/Login';
import Register from './pages/Register';
import PaymentMethod from './pages/PaymentMethod';
import { FaShoppingCart } from 'react-icons/fa';
import JamilaClosetLoader from './components/JamilaClosetLoader';
import Wishlist from './components/Wishlist';
import './App.css'

const ProductDetail = lazy(() => import('./components/products/ProductDetail'));
const Products = lazy(() => import('./components/products/Products'));


const App = () => {


  return (
    <div className="min-h-screen flex flex-col">
      <TopNavbar

      />

      <main className="flex-grow">
        <main className="flex-grow">
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/" element={
              <Suspense fallback={<JamilaClosetLoader />}>
                <Outlet />
              </Suspense>
            }>
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<ProductDetail />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<PaymentMethod />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </main>
      </main>

      <Footer />

    </div>
  );
};

export default App;