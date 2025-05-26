import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { FaChevronLeft, FaPlus, FaMinus, FaShoppingCart, FaHeart, FaRegHeart, FaStar, FaRegStar } from 'react-icons/fa';
import SimilarProducts from './SimilarProducts';

const ProductDetail = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('M');
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch product data from DummyJSON
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product:", error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div className="text-center py-12 text-pink-600">Loading product...</div>;
    if (!product) return <div className="text-center py-12 text-red-500">Product not found</div>;

    return (
        <div className="bg-offwhite min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Back button */}
                <Link
                    to="/products"
                    className="flex items-center text-pink-600 hover:text-pink-800 mb-6"
                >
                    <FaChevronLeft className="mr-2" />
                    Back to Products
                </Link>

                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    {/* Image Section */}
                    <div className="w-full max-w-md mx-auto mb-8 lg:mb-0">
                        <div className="relative">
                            <img
                                src={product.thumbnail}
                                className="rounded-lg shadow-md w-full h-auto max-h-[500px] object-contain"
                                alt={product.title}
                            />
                            <button
                                onClick={() => setIsWishlisted(!isWishlisted)}
                                className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md"
                                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                            >
                                {isWishlisted ? (
                                    <FaHeart className="text-pink-600" />
                                ) : (
                                    <FaRegHeart className="text-pink-400" />
                                )}
                            </button>
                        </div>

                        {/* Thumbnail gallery */}
                        <div className="grid grid-cols-4 gap-2 mt-4">
                            {product.images.slice(0, 4).map((image, index) => (
                                <div key={index} className="aspect-square bg-gray-100 rounded overflow-hidden">
                                    <img
                                        src={image}
                                        alt={`${product.title} ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info Section */}
                    <div>
                        <h1 className="text-3xl font-bold text-pink-600 mb-2">{product.title}</h1>

                        {/* Rating */}
                        <div className="flex items-center mb-4">
                            <div className="flex text-yellow-400 mr-2">
                                {[...Array(5)].map((_, i) => (
                                    i < Math.round(product.rating) ?
                                        <FaStar key={i} /> :
                                        <FaRegStar key={i} />
                                ))}
                            </div>
                            <span className="text-pink-500">{product.rating}/5</span>
                        </div>

                        {/* Price */}
                        <p className="text-2xl font-semibold text-pink-600 mb-6">
                            ${product.price} <span className="text-sm text-gray-500 line-through ml-2">${(product.price * 1.2).toFixed(2)}</span>
                        </p>

                        {/* Description */}
                        <p className="text-pink-700 mb-6">{product.description}</p>

                        {/* Size Selector */}
                        <div className="mb-6">
                            <h3 className="text-lg font-medium text-pink-600 mb-2">Size</h3>
                            <div className="flex flex-wrap gap-2">
                                {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 border rounded-md ${selectedSize === size
                                            ? 'bg-pink-600 text-white border-pink-600'
                                            : 'border-pink-300 text-pink-600 hover:bg-pink-50'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity Selector */}
                        <div className="mb-6">
                            <h3 className="text-lg font-medium text-pink-600 mb-2">Quantity</h3>
                            <div className="flex items-center w-fit">
                                <button
                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                    className="p-2 border border-pink-300 rounded-l-md text-pink-600 hover:bg-pink-50"
                                >
                                    <FaMinus />
                                </button>
                                <span className="px-4 py-1 border-t border-b border-pink-300 text-center w-12">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => setQuantity(q => q + 1)}
                                    className="p-2 border border-pink-300 rounded-r-md text-pink-600 hover:bg-pink-50"
                                >
                                    <FaPlus />
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button className="flex-1 flex items-center justify-center bg-pink-600 text-white py-3 px-6 rounded-md hover:bg-pink-700 transition-colors">
                                <FaShoppingCart className="mr-2" />
                                Add to Cart
                            </button>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-8 pt-6 border-t border-pink-200">
                            <div className="mb-4">
                                <h4 className="font-medium text-pink-600">Brand</h4>
                                <p className="text-pink-700">{product.brand}</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-pink-600">Category</h4>
                                <p className="text-pink-700 capitalize">{product.category}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <SimilarProducts slug={product.category} currentProductId={product.id} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;