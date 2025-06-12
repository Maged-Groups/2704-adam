import { useSelector } from 'react-redux';

import { Suspense, lazy } from 'react';
import { Routes, Route, Outlet } from 'react-router';

import Home from '../layouts/Home';
import About from './About';
import Contact from './Contact';
import ShoppingCart from '../components/ShoppingCart';
import Login from './Login';
import Register from './Register';
import PaymentMethod from './PaymentMethod';
import JamilaClosetLoader from '../components/JamilaClosetLoader';
import Wishlist from '../components/Wishlist';
import P404 from './P404';
import ByCat from '../components/products/ByCat';


const ProductDetail = lazy(() => import('../components/products/ProductDetail'));
const Products = lazy(() => import('../components/products/Products'));
const Me = lazy(() => import('./Me'));


export default function index() {


    const { isLoggedin } = useSelector(store => store.userReducer);
    return (
        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/" element={
                <Suspense fallback={<JamilaClosetLoader />}>
                    <Outlet />
                </Suspense>
            }>
                <Route path="products" element={<Products />} />
                <Route path="products/:id" element={<ProductDetail />} />
                <Route path="products/category/:cat" element={<ByCat />} />

                {isLoggedin && <Route path="account" element={<Me />} />}
            </Route>


            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<PaymentMethod />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/wishlist" element={<Wishlist />} />


            <Route path="*" element={<P404 />} />
        </Routes>
    )
}
