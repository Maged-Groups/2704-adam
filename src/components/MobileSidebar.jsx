import { useState } from 'react';
import {
    FaTimes,
    FaShoppingCart,
    FaUser,
    FaSignInAlt,
    FaUserPlus,
    FaChevronDown,
    FaChevronUp,
    FaSearch
} from 'react-icons/fa';
import { Link } from 'react-router';

const MobileSidebar = ({ isOpen, onClose, cartItemsCount = 0 }) => {
    const [openProducts, setOpenProducts] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');



    return (
        <div
            className={`md:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
            onClick={(e) => e.stopPropagation()}
        >
            {/* Close Button */}
            <div className="flex justify-between items-center p-4 border-b border-pink-100">
                <h2 className="text-xl font-bold text-pink-600">Jamila Closet</h2>
                <button
                    onClick={onClose}
                    className="text-pink-600 hover:text-pink-800 focus:outline-none"
                >
                    <FaTimes className="h-6 w-6" />
                </button>
            </div>

            {/* Search Bar (Mobile) */}
            <div className="p-4 border-b border-pink-100">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-full border border-pink-200 focus:outline-none focus:ring-1 focus:ring-pink-500 text-pink-700"
                    />
                    <FaSearch className="absolute left-3 top-3 text-pink-400" />
                </div>
            </div>

            {/* Navigation Links */}
            <div className="overflow-y-auto h-[calc(100vh-120px)] p-4">
                <div className="flex flex-col space-y-3">
                    <Link
                        to="/"
                        onClick={onClose}
                        className="py-2 px-3 text-pink-700 hover:bg-pink-50 rounded-md font-medium"
                    >
                        Home
                    </Link>

                    {/* Products Dropdown */}
                    <div className="mb-2">
                        <button
                            onClick={() => setOpenProducts(!openProducts)}
                            className="w-full flex justify-between items-center py-2 px-3 text-pink-700 hover:bg-pink-50 rounded-md font-medium"
                        >
                            <Link to="/products" >
                                Products
                            </Link>

                        </button>


                    </div>

                    <Link
                        to="/about"
                        onClick={onClose}
                        className="py-2 px-3 text-pink-700 hover:bg-pink-50 rounded-md font-medium"
                    >
                        About
                    </Link>

                    <Link
                        to="/contact"
                        onClick={onClose}
                        className="py-2 px-3 text-pink-700 hover:bg-pink-50 rounded-md font-medium"
                    >
                        Contact
                    </Link>

                    {/* Account Section */}
                    <div className="border-t border-pink-200 pt-4 mt-4 space-y-3">
                        <Link
                            to="/login"
                            onClick={onClose}
                            className="flex items-center py-2 px-3 text-pink-700 hover:bg-pink-50 rounded-md"
                        >
                            <FaSignInAlt className="mr-3 text-pink-500" />
                            Login
                        </Link>

                        <Link
                            to="/register"
                            onClick={onClose}
                            className="flex items-center py-2 px-3 text-pink-700 hover:bg-pink-50 rounded-md"
                        >
                            <FaUserPlus className="mr-3 text-pink-500" />
                            Register
                        </Link>

                        <Link
                            to="/account"
                            onClick={onClose}
                            className="flex items-center py-2 px-3 text-pink-700 hover:bg-pink-50 rounded-md"
                        >
                            <FaUser className="mr-3 text-pink-500" />
                            Account
                        </Link>

                        <Link
                            to="/cart"
                            onClick={onClose}
                            className="flex items-center py-2 px-3 text-pink-700 hover:bg-pink-50 rounded-md relative"
                        >
                            <FaShoppingCart className="mr-3 text-pink-500" />
                            Cart
                            {cartItemsCount > 0 && (
                                <span className="absolute left-8 top-1 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItemsCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileSidebar;