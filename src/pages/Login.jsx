import { useState } from 'react';
import { Link } from 'react-router';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';
import ResetPassword from '../components/ResetPassword';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showResetPassword, setShowResetPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your authentication logic here
        console.log('Login attempt with:', { email, password });
    };

    if (showResetPassword) {
        return <ResetPassword onCancel={() => setShowResetPassword(false)} />;
    }

    return (
        <div className="min-h-screen bg-offwhite flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-pink-600 mb-6 flex items-center">
                    <FaSignInAlt className="mr-2" /> Login
                </h1>

                {error && <div className="mb-4 text-red-500">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-4">
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

                    <div>
                        <label className="block text-pink-700 mb-1">Password</label>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-3 text-pink-400" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={() => setShowResetPassword(true)}
                            className="text-sm text-pink-600 hover:underline"
                        >
                            Forgot password?
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-4 text-center text-pink-600">
                    Don't have an account? <Link to="/register" className="font-medium hover:underline">Register here</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;