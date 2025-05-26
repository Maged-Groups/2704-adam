// SimilarProducts.js
import { Link } from 'react-router';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import apis from '../../lib/apis';

const SimilarProducts = ({ slug, currentProductId }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(apis.byCategory + slug)
            .then(res => res.json())
            .then(data => {
                // Filter out the current product
                const filteredProducts = data.products.filter(
                    product => product.id !== currentProductId
                );
                // Limit to 4 similar products
                setProducts(filteredProducts);
            });
    }, [slug, currentProductId]);

    return (
        <div className="border-t border-pink-200 pt-12">
            <h3 className="text-2xl font-bold text-pink-600 mb-8 text-center">You May Also Like</h3>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {products.map((product) => (
                    <div key={product.id} className="group">
                        <Link to={`/products/${product.id}`} className="block">
                            <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="mt-3 text-center">
                                <h4 className="text-xs sm:text-sm font-medium text-pink-600 group-hover:text-pink-800 line-clamp-1">
                                    {product.title}
                                </h4>
                                <div className="mt-1 flex justify-center items-center gap-2">
                                    <p className="text-xs sm:text-sm text-pink-500">${product.price}</p>
                                    <div className="flex items-center">
                                        <FaStar className="text-yellow-400 text-xs mr-1" />
                                        <span className="text-xs text-gray-500">{product.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SimilarProducts;