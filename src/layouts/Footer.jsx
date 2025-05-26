import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router'; // Using react-router's Link

const Footer = () => {
    return (
        <footer className="bg-pink-600 text-offwhite">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Jamila Closet</h3>
                        <p className="text-pink-100">
                            Elegant and stylish women's clothing for every occasion.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-pink-100 hover:text-white">
                                <FaFacebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-pink-100 hover:text-white">
                                <FaInstagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-pink-100 hover:text-white">
                                <FaTwitter className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Shop</h4>
                        <ul className="space-y-2">
                            <li><Link to="/products" className="text-pink-100 hover:text-white">All Products</Link></li>
                            <li><Link to="/products/dresses" className="text-pink-100 hover:text-white">Dresses</Link></li>
                            <li><Link to="/products/pants" className="text-pink-100 hover:text-white">Pants</Link></li>
                            <li><Link to="/products/tops" className="text-pink-100 hover:text-white">Tops</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
                        <ul className="space-y-2">
                            <li><Link to="/contact" className="text-pink-100 hover:text-white">Contact Us</Link></li>
                            <li><Link to="/shipping" className="text-pink-100 hover:text-white">Shipping Policy</Link></li>
                            <li><Link to="/returns" className="text-pink-100 hover:text-white">Returns & Exchanges</Link></li>
                            <li><Link to="/faq" className="text-pink-100 hover:text-white">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">About</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-pink-100 hover:text-white">Our Story</Link></li>
                            <li><Link to="/blog" className="text-pink-100 hover:text-white">Blog</Link></li>
                            <li><Link to="/careers" className="text-pink-100 hover:text-white">Careers</Link></li>
                            <li><Link to="/privacy" className="text-pink-100 hover:text-white">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-pink-500">
                    <p className="text-pink-100 text-center">
                        &copy; {new Date().getFullYear()} Jamila Closet. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;