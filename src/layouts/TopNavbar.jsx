import { useState } from 'react';
import { Link } from 'react-router';
import SearchBar from '../components/SearchBar';
import MobileSidebar from '../components/MobileSidebar';
import { FaShoppingCart, FaUser, FaSignInAlt, FaUserPlus, FaBars, FaHeart } from 'react-icons/fa';
import WishlistButton from '../components/WishlistButton';

const TopNavbar = () => {
    const isLoggedIn = 0;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [cartItemsCount] = useState(0);

    return (
        <nav className="bg-offwhite text-pink-600 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo and desktop menu */}
                    <div className="flex items-center gap-7">
                        <Link to="/" className="text-2xl font-bold">Jamila Closet</Link>
                        <div className="hidden md:block ml-10">
                            <div className="flex space-x-8">
                                <Link to="/" className="hover:text-pink-800 px-3 py-2 text-sm font-medium">Home</Link>
                                <div className="relative group">
                                    <Link to="/products" className="hover:text-pink-800 px-3 py-2 text-sm font-medium flex items-center">
                                        Products
                                    </Link>
                                    <div className="absolute z-10 hidden group-hover:block bg-white shadow-lg rounded-md mt-1 w-48">
                                        {/* Dropdown content if needed */}
                                    </div>
                                </div>
                                <Link to="/about" className="hover:text-pink-800 px-3 py-2 text-sm font-medium">About</Link>
                                <Link to="/contact" className="hover:text-pink-800 px-3 py-2 text-sm font-medium">Contact</Link>
                            </div>
                        </div>
                        <div className="hidden md:block mx-4">
                            <SearchBar />
                        </div>
                    </div>

                    {/* Right side icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        {isLoggedIn ? (
                            <>
                                <Link to="/account" className="hover:text-pink-800 flex items-center">
                                    <FaUser className="mr-1" /> Account
                                </Link>
                                <button className="hover:text-pink-800 flex items-center">
                                    <FaSignInAlt className="mr-1" /> Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="hover:text-pink-800 flex items-center">
                                    <FaSignInAlt className="mr-1" /> Login
                                </Link>
                                <Link to="/register" className="hover:text-pink-800 flex items-center">
                                    <FaUserPlus className="mr-1" /> Register
                                </Link>
                            </>
                        )}
                        <Link to="/wishlist" className="text-pink-600 hover:text-pink-800">
                            <FaHeart className="text-xl" />
                        </Link>
                        <div className="relative">
                            <Link to="/cart" className="hover:text-pink-800 flex items-center">
                                <FaShoppingCart className="text-xl" />
                                {cartItemsCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {cartItemsCount}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-pink-600 hover:text-pink-800 focus:outline-none"
                        >
                            <FaBars className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <MobileSidebar
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                cartItemsCount={cartItemsCount}
            />
        </nav>
    );
};

export default TopNavbar;