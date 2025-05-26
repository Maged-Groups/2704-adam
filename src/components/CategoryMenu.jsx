import { useState } from 'react';
import { Link } from 'react-router'; // Using react-router's Link
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import apis from '../lib/apis';

const res = await fetch(apis.categories_list);
const categories = await res.json();

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
                        <Link to={`/products/category/${category}`}  key={category} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <button
                                onClick={() => toggleCategory(category)}
                                className="w-full flex justify-between items-center p-4 text-left hover:bg-pink-50 transition-colors"
                            >
                                <span className="font-medium text-pink-700">{category}</span>
                                {openCategory === category? (
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
                                                    to={`/products/category/${category}`}
                                                    className="block py-2 px-2 text-pink-600 hover:bg-pink-100 rounded transition-colors"
                                                >
                                                    {subcat}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        to={`/products/${category}`}
                                        className="mt-3 inline-block text-sm font-medium text-pink-600 hover:underline"
                                    >
                                        View all {category}
                                    </Link>
                                </div>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryMenu;