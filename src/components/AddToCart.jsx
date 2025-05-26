import React from 'react'
import { rdx_add_item_to_cart, rdx_remove_item_from_cart } from '../redux/cartReducer';
import { useDispatch, useSelector } from 'react-redux'
import { FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';




function AddToCart({ product }) {

    const { cartItems } = useSelector(store => store.cartReducer);

    const existsItem = cartItems.find(item => item.id === product.id);

    const quantity = existsItem ? existsItem.quantity : 0

    const dispatch = useDispatch();


    // Handle increment/decrement
    const handleIncrement = () => { dispatch(rdx_add_item_to_cart(product)) };
    const handleDecrement = () => { dispatch(rdx_remove_item_from_cart(product)) };

    console.log(cartItems);
    return (

        <div className="mt-3">
            {quantity > 0 ? (
                <div className="flex items-center justify-between">
                    <div className="flex items-center border border-pink-300 rounded-md">
                        <button
                            onClick={handleDecrement}
                            className="px-2 py-1 text-pink-600 hover:bg-pink-50 transition-colors"
                        >
                            <FaMinus size={12} />
                        </button>
                        <span className="px-2 text-sm text-pink-700">{quantity}</span>
                        <button
                            onClick={handleIncrement}
                            className="px-2 py-1 text-pink-600 hover:bg-pink-50 transition-colors"
                        >
                            <FaPlus size={12} />
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    className="w-full flex items-center justify-center py-1 px-3 rounded-md bg-pink-600 text-white text-sm hover:bg-pink-700 transition-colors"
                    onClick={handleIncrement}
                >
                    <FaShoppingCart className="mr-1" size={12} />
                    Add to Cart
                </button>
            )}
        </div>


    )
}


export default AddToCart;