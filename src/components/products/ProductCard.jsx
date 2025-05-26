import { Link } from 'react-router';
import { FaPlus, FaMinus, FaShoppingCart, FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import AddToCart from '../AddToCart';
import WishlistButton from '../WishlistButton';

const ProductCard = ({
    product,
}) => {
    return (
        <div className="group relative">
            {/* Wishlist Button */}
            <div className="absolute top-2 right-2 z-10">
                <WishlistButton product={product} />
            </div>

            {/* Product Image */}
            <Link to={`/products/${product.id}`} className="block">
                <div className="w-full aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </Link>

            {/* Product Info */}
            <div className="mt-3">
                <Link
                    to={`/products/${product.id}`}
                    className="text-sm font-medium text-pink-600 hover:underline"
                >
                    {product.title}
                </Link>
                <p className="mt-1 text-sm text-pink-500 capitalize">{product.category}</p>

                <div className="flex justify-between items-center mt-2">
                    <p className="text-sm font-medium text-pink-600">${product.price}</p>
                    <div className="flex items-center">
                        <FaStar className="text-yellow-400 text-xs mr-1" />
                        <span className="text-xs text-gray-500">{product.rating}</span>
                    </div>
                </div>

                <AddToCart product={product}></AddToCart>
            </div>
        </div>
    );
};

export default ProductCard;