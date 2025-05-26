import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { rdx_add_item_to_wishlist, rdx_remove_item_from_wishlist } from '../redux/wishlistReducer';
import { useDispatch, useSelector } from 'react-redux';

export default function WishlistButton(product) {
    console.log("wishlist rendred");
    const { wishlistItems } = useSelector(store => store.wishlistReducer);
    const existsItem = wishlistItems.find(item => item.id === product.id);
    const dispatch = useDispatch();
    console.log("wishlist item", wishlistItems);

    const handleToggleWishlist = () => {
        if (existsItem) {
            dispatch(rdx_remove_item_from_wishlist(product));
        } else {
            dispatch(rdx_add_item_to_wishlist(product));
        }
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


