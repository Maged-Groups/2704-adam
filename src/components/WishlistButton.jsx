import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { rdx_toggle_wishlist_item } from '../redux/wishlistReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

export default function WishlistButton({ product }) {

    const [existsItem, setExistsItem] = useState(false);
    console.log("wishlist rendred");
    const { wishlistItems } = useSelector(store => store.wishlistReducer);

    
    useEffect(() => {
        setExistsItem(wishlistItems.find(item => item.id === product.id));
        console.log('UseEffect fired')
        console.log("wishlist items", wishlistItems);
    }, [wishlistItems])

    const dispatch = useDispatch();
    // console.log("wishlist items", wishlistItems);
    console.log("product", product);
    console.log("existsItem", existsItem);

    const handleToggleWishlist = () => {
        dispatch(rdx_toggle_wishlist_item(product));
    };

    return (
        <button
            onClick={handleToggleWishlist}
            className="p-2 bg-white rounded-full shadow-md hover:bg-pink-50 transition-colors"
            aria-label={existsItem ? "Remove from wishlist" : "Add to wishlist"}
        >
            {existsItem ? (
                <FaHeart className="text-pink-600" />
            ) : (
                <FaRegHeart className="text-pink-400 hover:text-pink-600" />
            )}
        </button>
    );
};


