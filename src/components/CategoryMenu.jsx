import { useState } from 'react';
import { Link } from 'react-router'; // Using react-router's Link
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const categories = [
    { name: 'Dresses', slug: 'dresses', subcategories: ['Casual', 'Evening', 'Summer'] },
    { name: 'Tops', slug: 'tops', subcategories: ['Blouses', 'T-Shirts', 'Sweaters'] },
    { name: 'Pants', slug: 'pants', subcategories: ['Jeans', 'Slacks', 'Leggings'] },
    { name: 'Accessories', slug: 'accessories', subcategories: ['Bags', 'Jewelry', 'Scarves'] },
];

const CategoryMenu = () => {
    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (slug) => {
        setOpenCategory(openCategory === slug ? null : slug);
    };

    return (
        <div className="bg-pink-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">Shop by Category</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {categories.map((category) => (
                        <div key={category.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <button
                                onClick={() => toggleCategory(category.slug)}
                                className="w-full flex justify-between items-center p-4 text-left hover:bg-pink-50 transition-colors"
                            >
                                <span className="font-medium text-pink-700">{category.name}</span>
                                {openCategory === category.slug ? (
                                    <FaChevronUp className="text-pink-500" />
                                ) : (
                                    <FaChevronDown className="text-pink-500" />
                                )}
                            </button>

                            {openCategory === category.slug && (
                                <div className="px-4 pb-4">
                                    <ul className="space-y-2">
                                        {category.subcategories.map((subcat) => (
                                            <li key={subcat}>
                                                <Link
                                                    to={`/products/${category.slug}/${subcat.toLowerCase()}`}
                                                    className="block py-2 px-2 text-pink-600 hover:bg-pink-100 rounded transition-colors"
                                                >
                                                    {subcat}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        to={`/products/${category.slug}`}
                                        className="mt-3 inline-block text-sm font-medium text-pink-600 hover:underline"
                                    >
                                        View all {category.name}
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryMenu;