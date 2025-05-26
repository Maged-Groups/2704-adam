import { useState } from 'react';
import { FaCreditCard, FaPaypal, FaMoneyBillWave } from 'react-icons/fa';

const PaymentMethod = () => {
    const [selectedMethod, setSelectedMethod] = useState('card');

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-xl font-bold text-pink-600 mb-6">Payment Method</h2>

            <div className="space-y-4">
                <div
                    onClick={() => setSelectedMethod('card')}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${selectedMethod === 'card' ? 'border-pink-500 bg-pink-50' : 'border-gray-200'}`}
                >
                    <div className="flex items-center">
                        <FaCreditCard className="text-pink-600 mr-3 text-xl" />
                        <span className="font-medium">Credit/Debit Card</span>
                    </div>
                    {selectedMethod === 'card' && (
                        <div className="mt-4 space-y-3">
                            <input type="text" placeholder="Card Number" className="w-full p-2 border border-pink-200 rounded" />
                            <div className="grid grid-cols-2 gap-3">
                                <input type="text" placeholder="MM/YY" className="p-2 border border-pink-200 rounded" />
                                <input type="text" placeholder="CVV" className="p-2 border border-pink-200 rounded" />
                            </div>
                        </div>
                    )}
                </div>

                <div
                    onClick={() => setSelectedMethod('paypal')}
                    className={`p-4 border rounded-lg cursor-pointer ${selectedMethod === 'paypal' ? 'border-pink-500 bg-pink-50' : 'border-gray-200'}`}
                >
                    <div className="flex items-center">
                        <FaPaypal className="text-blue-500 mr-3 text-xl" />
                        <span className="font-medium">PayPal</span>
                    </div>
                </div>

                <div
                    onClick={() => setSelectedMethod('cod')}
                    className={`p-4 border rounded-lg cursor-pointer ${selectedMethod === 'cod' ? 'border-pink-500 bg-pink-50' : 'border-gray-200'}`}
                >
                    <div className="flex items-center">
                        <FaMoneyBillWave className="text-green-500 mr-3 text-xl" />
                        <span className="font-medium">Cash on Delivery</span>
                    </div>
                </div>
            </div>

            <button className="w-full mt-6 bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition-colors">
                Complete Payment
            </button>
        </div>
    );
};
export default PaymentMethod;