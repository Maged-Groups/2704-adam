import { useState } from 'react';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';

const ResetPassword = ({ onCancel }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setMessage(`Password reset link sent to ${email}`);
        } catch (error) {
            setMessage('Failed to send reset link. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-offwhite flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <button
                    onClick={onCancel}
                    className="flex items-center text-pink-600 mb-4 hover:underline"
                >
                    <FaArrowLeft className="mr-2" /> Back to Login
                </button>

                <h1 className="text-2xl font-bold text-pink-600 mb-6">Reset Password</h1>

                {message ? (
                    <div className="bg-pink-50 p-4 rounded-md text-pink-700">
                        {message}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <p className="text-pink-700">
                            Enter your email address and we'll send you a link to reset your password.
                        </p>

                        <div>
                            <label className="block text-pink-700 mb-1">Email</label>
                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-3 text-pink-400" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''
                                }`}
                        >
                            {isLoading ? 'Sending...' : 'Send Reset Link'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ResetPassword;