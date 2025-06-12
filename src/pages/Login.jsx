import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';
import ResetPassword from '../components/ResetPassword';
import apis from '../lib/apis';
import { useDispatch } from 'react-redux';
import { rdxLoggedin } from '../redux/userReducer';
import JamilaClosetLoader from '../components/JamilaClosetLoader';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState('');
    const [showResetPassword, setShowResetPassword] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = () => {


        setIsLoading(true);


        const loginData = JSON.stringify({ username, password });

        console.log('loginData', loginData)

        fetch(apis.login, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: loginData,
        })
            .then(res => res.json())
            .then(data => {

                setIsLoading(false);

                if (data.message) {
                    setError(data.message);
                } else {

                    // Send to redux
                    dispatch(rdxLoggedin(data))

                    const jsonData = JSON.stringify(data);
                    // Save login data to local/session storage
                    if (remember) {
                        localStorage.user = jsonData
                    } else {
                        sessionStorage.user = jsonData
                    }

                    // Navigate to home
                    navigate('/');
                }
            })



        console.log('Login attempt with:', { username, password });
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

                {isLoading && <JamilaClosetLoader />}
                
                {error && <div className="mb-4 text-red-500">{error}</div>}

                <div className="space-y-4">
                    <div>
                        <label className="block text-pink-700 mb-1">username</label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-3 text-pink-400" />
                            <input
                                type="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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

                    <div className='flex items-center gap-2'>
                        <input
                            type="checkbox"
                            value={remember}
                            onClick={() => setRemember(!remember)}
                            className="pl-10 pr-4  border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            required
                            id='remember'
                        />
                        <label htmlFor='remember' className="text-pink-700  ">Remember Me</label>
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
                        type="button"
                        onClick={handleLogin}
                        className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors"
                    >
                        Login
                    </button>
                </div>

                <div className="mt-4 text-center text-pink-600">
                    Don't have an account? <Link to="/register" className="font-medium hover:underline">Register here</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;