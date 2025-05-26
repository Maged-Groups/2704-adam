import { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={`relative mx-4 transition-all duration-200 ${isFocused ? 'w-64' : 'w-48'}`}>
            <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-pink-300 focus:border-pink-500 focus:outline-none text-pink-700"
            />
            <FaSearch className="absolute left-3 top-3 text-pink-400" />
            {query && (
                <button
                    onClick={() => setQuery('')}
                    className="absolute right-3 top-3 text-pink-400 hover:text-pink-600"
                >
                    <FaTimes />
                </button>
            )}
        </div>
    );
};

export default SearchBar;