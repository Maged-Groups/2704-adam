import { FaShoppingCart, FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { rdx_remove_item_from_cart, rdx_add_item_to_cart, rdx_clear_cart } from '../redux/cartReducer';

const ShoppingCart = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector(store => store.cartReducer);
    console.log('cart items:', cartItems);

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);



    const removeItem = (id) => {
        dispatch(rdx_remove_item_from_cart(id));
        console.log('After remove:', cartItems);
    }

    const addItem = (id) => {
        dispatch(rdx_add_item_to_cart(id));
        console.log('After add:', cartItems);
    };

    const clearCart = () => {
        dispatch(rdx_clear_cart());
        console.log('After clear', cartItems);
    }

    return (
        <div className={`fixed inset-0 overflow-hidden z-50 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    onClick={onClose}
                ></div>

                <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                    <div className="w-screen max-w-md">
                        <div className="h-full flex flex-col bg-offwhite shadow-xl overflow-y-scroll">
                            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h2 className="text-lg font-medium text-pink-600">Shopping cart</h2>
                                        <p className="text-sm text-pink-400">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
                                    </div>
                                    <div className="ml-3 h-7 flex items-center">
                                        <button
                                            type="button"
                                            className="-m-2 p-2 text-pink-400 hover:text-pink-500"
                                            onClick={onClose}
                                        >
                                            <span className="sr-only">Close panel</span>
                                            <FaTimes className="h-6 w-6" />
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <div className="flow-root">
                                        {cartItems.length === 0 ? (
                                            <div className="text-center py-12">
                                                <FaShoppingCart className="mx-auto h-12 w-12 text-pink-300" />
                                                <h3 className="mt-2 text-lg font-medium text-pink-600">Your cart is empty</h3>
                                                <p className="mt-1 text-pink-500">Start shopping to add items to your cart</p>
                                                <div className="mt-6">
                                                    <button
                                                        onClick={onClose}
                                                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700"
                                                    >
                                                        Continue Shopping
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <ul className="-my-6 divide-y divide-pink-200">
                                                {cartItems.map((item) => (
                                                    <li key={item.id} className="py-6 flex">
                                                        <div className="flex-shrink-0 w-24 h-24 border border-pink-200 rounded-md overflow-hidden">
                                                            <img
                                                                src={item.imageSrc || item.thumbnail}
                                                                alt={item.name || item.title}
                                                                className="w-full h-full object-center object-cover"
                                                            />
                                                        </div>

                                                        <div className="ml-4 flex-1 flex flex-col">
                                                            <div>
                                                                <div className="flex justify-between text-base font-medium text-pink-600">
                                                                    <h3>{item.name || item.title}</h3>
                                                                    <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                                                                </div>
                                                                <p className="mt-1 text-sm text-pink-500">{item.size || item.category}</p>
                                                            </div>
                                                            <div className="flex-1 flex items-end justify-between text-sm">
                                                                <div className="flex items-center border border-pink-300 rounded-md">
                                                                    <button
                                                                        onClick={() => removeItem(item)}
                                                                        className="px-2 py-1 text-pink-600 hover:bg-pink-50"
                                                                    >
                                                                        <FaMinus className="h-3 w-3" />
                                                                    </button>
                                                                    <span className="px-2 py-1 text-pink-600">{item.quantity}</span>
                                                                    <button
                                                                        onClick={() => addItem(item)}
                                                                        className="px-2 py-1 text-pink-600 hover:bg-pink-50"
                                                                    >
                                                                        <FaPlus className="h-3 w-3" />
                                                                    </button>
                                                                </div>

                                                                <div className="flex">
                                                                    <button
                                                                        onClick={clearCart}
                                                                        type="button"
                                                                        className="font-medium text-pink-600 hover:text-pink-500"
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {cartItems.length > 0 && (
                                <div className="border-t border-pink-200 py-6 px-4 sm:px-6">
                                    <div className="flex justify-between text-base font-medium text-pink-600">
                                        <p>Total</p>
                                        <p>${totalPrice.toFixed(2)}</p>
                                    </div>
                                    <p className="mt-0.5 text-sm text-pink-500">Shipping and taxes calculated at checkout.</p>
                                    <div className="mt-6">
                                        <Link
                                            to="/checkout"
                                            className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700"
                                        >
                                            Checkout
                                        </Link>
                                    </div>
                                    <div className="mt-6 flex justify-center text-sm text-center text-pink-500">
                                        <p>
                                            or{' '}
                                            <button
                                                type="button"
                                                className="text-pink-600 font-medium hover:text-pink-500"
                                                onClick={onClose}
                                            >
                                                Continue Shopping<span aria-hidden="true"> &rarr;</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ShoppingCart;